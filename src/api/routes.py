"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import datetime
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, UserContactInfo, UserMusicianInfo, UserSocialMedia
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    request_data=request.get_json(force=True)
    # verificar si el email esta en la bbdd
    if db.session.query(User).filter(User.email == request_data['email']).first():
    #db.session conecta con la base de datos y query hace una busqueda en la tabla de datos User
        return jsonify({"message": "El email ya está registrado"}), 400
    if db.session.query(User).filter(User.user_name == request_data['user_name']).first():
        return jsonify({"message": "El usuario ya está registrado"}), 400
    #si ha pasado esos dos condicionales sin hacer los if, crea un usuario
    new_user = User(
        user_name=request_data['user_name'],
        email=request_data['email'],
        password=request_data['password'],
        first_name=request_data['first_name'],
        last_name=request_data['last_name'],
        is_active=True,
        is_musician=False,
        creation_date = datetime.now(),
        last_login = datetime.now()
    ) 
    db.session.add(new_user)
    db.session.commit()
    return jsonify(
        {
            "message": "User created successfully",
            "user": new_user.serialize()
        }
    ), 201

#<<-----1 LOGIN ENDPOINT START ----->>
#al hacer el login ademas de devolver un mensaje y un acces_token hay que devolver el username

#añadir last_login
@api.route('/login', methods=['POST'])
def handle_login():
    request_data=request.get_json(force=True)
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if  user == None:
        return jsonify({"msg": "usuario o password incorrecto"}), 401
    # actualizamos last_login
    user.last_login = datetime.now()
    db.session.commit()
    access_token = create_access_token(identity=user.id)
    return jsonify(
        {
            "message": "Credenciales correctas",
            "access_token": access_token,
	        "last_login":user.last_login,
            "user_name": user.user_name
        }
        ), 200
    


#<<-----1 LOGIN ENDPOINT END ----->>
 
#<<-----1 User related endpoints ----->>

@api.route('/<string:username_var>', methods=['GET', 'PUT'])
@jwt_required()
def handle_user(username_var):
    current_user = get_jwt_identity()
    if current_user != username_var:
        return jsonify({"message": "Access denied", "msg": current_user}), 401
    if request.method == 'GET':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        if not user:
            return jsonify({"message": "User not found"}), 404
    return jsonify(user.serialize()), 200

#<<----1.1 START UserSocialMedia endpoint ----->>
@api.route('/<string:username_var>/socialmedia', methods=['GET', 'PUT','POST'])
@jwt_required()
def handle_user_socialmedia(username_var):
    current_user = get_jwt_identity()
    if current_user != username_var:
        return jsonify({"message": "Access denied"}), 401
    #GET, ES EL QUE USAREMOS POR DEFECTO PARA REPRSENTAR EN EL FRONT TODA LA INFORMACION QUE DICHO USUARIO TENGA EN SU PERFIL
    if request.method == 'GET':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_social_media = db.session.query(UserSocialMedia).filter(UserSocialMedia.user_id == user.id).all()
        if not user_social_media:
            return jsonify({"message": "User not found"}), 404
        return jsonify({"social_media": [social_media.serialize() for social_media in user_social_media]}), 200
    #POST PARA AÑADIR CAMPOS A LA TABLA
    if request.method == 'POST':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        new_user_social_media = UserSocialMedia(
            user_id = user.id,
            website_url = request_data['website_url'],
            youtube_url = request_data['youtube_url'],
            soundcloud_url = request_data['soundcloud_url'],
            instagram_url = request_data['instagram_url'],
            facebook_url = request_data['facebook_url'],
            twitter_url = request_data['twitter_url'],
            tiktok_url = request_data['tiktok_url'],
            snapchat_url = request_data['snapchat_url'],
            spotify_url = request_data['spotify_url'],
            last_update = datetime.now()
        )
        db.session.add(new_user_social_media)
        db.session.commit()
        return jsonify(new_user_social_media.serialize()), 201
    #put BASICAMENTE PARA ACTUALIZAR CUALQUIER CAMPO RELACIONADO CON SOCIAL MEDIA
    if request.method == 'PUT':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_social_media = db.session.query(UserSocialMedia).filter(UserSocialMedia.user_id == user.id).first()
        if not user or not user_social_media:
            return jsonify({"message": "User not found"}), 404
        user_social_media.website_url = request_data['website_url']
        user_social_media.youtube_url = request_data['youtube_url']
        user_social_media.soundcloud_url = request_data['soundcloud_url']
        user_social_media.instagram_url = request_data['instagram_url']
        user_social_media.facebook_url = request_data['facebook_url']
        user_social_media.twitter_url = request_data['twitter_url']
        user_social_media.tiktok_url = request_data['tiktok_url']
        user_social_media.snapchat_url = request_data['snapchat_url']
        user_social_media.spotify_url = request_data['spotify_url']
        last_update = datetime.now()
        db.session.commit()
      
        return jsonify({"message":"Informacion actualizada correctamente", "user_social_media": user_social_media.serialize()}), 200

        #<<----1.1 UserSocialMedia endpoint END ----->>

        #<<----1.2 UserContactInfo endpoint START ----->>

@api.route('/<string:username_var>/contactinfo', methods=['GET', 'PUT','POST'])
@jwt_required()
def user_contact_info(username_var):
    #GET CURRENT IDENTITY AND COMPERE WITH CURRENT USER
    current_user = get_jwt_identity()
    if current_user != username_var:
        return jsonify({"message": "Access denied"}), 401
    #GET BASICAMENTE PARA OBTENER TODA LA INFORMACION DE CONTACTO DE UN USUARIO
    if request.method == 'GET':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_contact_info = db.session.query(UserContactInfo).filter(UserContactInfo.user_id == user.id).first()
        if not user or not user_contact_info:
            return jsonify({"message": "User not found"}), 404
        return jsonify({"user_contact_info": user_contact_info.serialize()}), 200
    #PUT ACTUALIZA CAMPOS DE CONTACTO DE USUARIO
    if request.method == 'PUT':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_contact_info = db.session.query(UserContactInfo).filter(UserContactInfo.user_id == user.id).first()
        if not user or not user_contact_info:
            return jsonify({"message": "User not found"}), 404
        user_contact_info.phone_number = request_data['phone_number']
        user_contact_info.address = request_data['address'] #direccion
        user_contact_info.country = request_data['country']#pais
        user_contact_info.state = request_data['state']#provincia
        user_contact_info.city = request_data['city']#ciudad, poblacion, etc..
        user_contact_info.zip_code = request_data['zip_code']#codigo postal
        user_contact_info.last_update = datetime.now()
        db.session.commit()
        return jsonify({"message":"Informacion actualizada correctamente", "user_contact_info": user_contact_info.serialize()}), 200
    #POST AÑADE NUEVA INFORMACION DE CONTACTO
    if request.method == 'POST':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_contact_info = db.session.query(UserContactInfo).filter(UserContactInfo.user_id == user.id).first()
        if not user or not user_contact_info:
            return jsonify({"message": "User not found"}), 404
        user = db.session.query(User).filter(User.user_name == username_var).first()
        new_user_contact_info = UserContactInfo(
            user_id = user.id,
            phone_number = request_data['phone_number'],
            address = request_data['address'],
            country = request_data['country'],
            state = request_data['state'],
            city = request_data['city'],
            zip_code = request_data['zip_code'],
            last_update = datetime.now()
        )
        db.session.add(new_user_contact_info)
        db.session.commit()
        return jsonify({"message":"Informacion agregada correctamente", "user_contact_info": new_user_contact_info.serialize()}), 200

         #<<----1.2 UserContactInfo endpoint END ----->>