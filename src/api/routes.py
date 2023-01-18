"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import datetime
from sqlalchemy import and_, or_, not_
from flask import Flask, request, jsonify, url_for, Blueprint


from api.models import db, User, UserContactInfo, UserMusicianInfo, UserSocialMedia, State, City, Local, MusicGenre, DirectMessage, UserMedia

from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import base64
import cloudinary
import cloudinary.uploader
  
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
        profile_img = None,
        portrait_img = None,
        password=request_data['password'],
        first_name=request_data['first_name'],
        last_name=request_data['last_name'],
        description = None,
        is_active=True,
        is_musician=request_data['is_musician'],
        creation_date = datetime.now(),
        last_login = datetime.now(),
        is_logged = False
    ) 
    db.session.add(new_user)
    db.session.commit()
    # create UserSocialMedia with null values for the new user
    new_user_social_media = UserSocialMedia(
        user_id=new_user.id,
        website_url = None,
        youtube_url = None,
        soundcloud_url = None,
        instagram_url = None,
        facebook_url = None,
        twitter_url = None,
        tiktok_url = None,
        snapchat_url = None,
        spotify_url = None,
        last_update = datetime.now()
        )
    db.session.add(new_user_social_media)
    db.session.commit()
    # create UserContactInfo with null values for the new user
    new_user_contact_info = UserContactInfo(
        user_id=new_user.id,
        phone_number = None,
        address = None,
        country = None,
        state = None,
        city = None,
        last_update = datetime.now()
        )
    db.session.add(new_user_contact_info)
    db.session.commit()

    # check if new_user is_musician is True, if so, create UserMusicianInfo with null values
    if new_user.is_musician:
        new_user_musician_info = UserMusicianInfo(
            user_id=new_user.id,
            artistic_name = None,
            musical_instruments_other = None,
            musical_genres_other = None,
            last_update = datetime.now()
            )
        db.session.add(new_user_musician_info)
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
    user.is_logged = True
    db.session.commit()
    access_token = create_access_token(identity=user.user_name)
    return jsonify(
        {
            "message": "Credenciales correctas",
            "access_token": access_token,
	        "last_login":user.last_login,
            "user_name": user.user_name,
            "profile_img": user.profile_img
        }
        ), 200

@api.route('/isauth/<string:username_var>', methods=['GET'])
@jwt_required()
def is_auth(username_var):
    user = get_jwt_identity()
    if user == username_var:
        return jsonify({"auth": True}), 200
    elif user != username_var:
        return jsonify({"auth": False}), 200   


#<<-----1 LOGIN ENDPOINT END ----->>
 
#<<-----Change password ----->>

@api.route('/settings/<string:username_var>/changepassword', methods=['PUT'])
@jwt_required()
def change_password(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"message": "Access Denied"}), 401
    request_data = request.get_json(force=True)
    old_password= request_data['password']
    user = db.session.query(User).filter(User.user_name == username_var, User.password == old_password).first()
    if user == None:
        return jsonify({"msg": "contraseña no coincide"})

    else: 
        user.password = request.json.get('new_password', None)
        db.session.commit()
        return jsonify({"msg":"Contraseña modificada con exito", })


#<<----- Editar Información ----->>
@api.route('/settings/<string:username_var>/editinfo', methods=['PUT'])
@jwt_required()
def edit_info(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"message": "Access Denied"}), 401
    user = db.session.query(User).filter(User.user_name == username_var).first()
    request_data = request.get_json(force=True)
    # user.user_name = request_data['user_name']
    user.first_name = request_data['first_name']
    user.last_name = request_data['last_name']
    user.description = request_data['description']
    db.session.commit()
    return jsonify({"msg":"Información actualizada", })


#<<----- Edit Contact Info ------>>

@api.route('/settings/<string:username_var>/editcontactinfo', methods=['PUT'])
@jwt_required()
def edit_contact_info(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"message": "Access Denied"}), 401
    user_contact_info = db.session.query(UserContactInfo).filter(User.user_name == username_var).first()
    request_data = request.get_json(force=True)
    # user.user_name = request_data['user_name']
    user_contact_info.phone_number = request_data['phone_number']
    # user_contact_info.city = request_data['city']
    user_contact_info.address = request_data['address']
    db.session.commit()
    return jsonify({"msg":"Información actualizada", })





#<<-----1 User related endpoints ----->>

@api.route('/<string:username_var>', methods=['GET'])

def handle_user(username_var):

    if request.method == 'GET':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        if not user:
            return jsonify({"message": "User not found"}), 404
    return jsonify(user.serialize()), 200

#<<-----1.1 User Settings related endpoints START----->>
@api.route('settings/<string:username_var>/profileimgs', methods=['PUT'])
@jwt_required()
def handle_user_profile_img(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"message": "Access Denied"}), 401
    if request.method == 'PUT':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        if not user:
            return jsonify({"message": "User not found"}), 404
        default_values = user
        request_data = request.get_json(force=True)
        user.profile_img = request_data.get("profile_img", default_values.profile_img)
        user.portrait_img = request_data.get("portrait_img", default_values.portrait_img)
        last_update = datetime.now()
        db.session.commit()
        return jsonify({"msg":"Imagen actualizada con exito"}), 200


@api.route('settings/<string:username_var>/deleteaccount', methods=['DELETE'])
@jwt_required()
def handle_user_delete_account(username_var):
    user = get_jwt_identity()
    request_data = request.get_json(force=True)
    user_password = request_data['password']
    if user != username_var:
        return jsonify({"message": "Access Denied"}), 401
    if request.method == 'DELETE':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        if not user:
            return jsonify({"message": "User not found"}), 404
        if user.password != user_password:
            return jsonify({"message": "Password incorrect"}), 401
        db.session.delete(user)
        db.session.commit()
        user_social_media = db.session.query(UserSocialMedia).filter(UserSocialMedia.user_id == user.id).first()
        if not user_social_media:
            pass
        else:
            db.session.delete(user_social_media)
            db.session.commit()
        user_contact_info = db.session.query(UserContactInfo).filter(UserContactInfo.user_id == user.id).first()
        if not user_contact_info:
            pass
        else:
            db.session.delete(user_contact_info)
            db.session.commit()
        user_musician_info = db.session.query(UserMusicianInfo).filter(UserMusicianInfo.user_id == user.id).first()
        if not user_musician_info:
            pass
        else:
            db.session.delete(user_musician_info)
            db.session.commit()
        user_id = user.id
        user_direct_messages = DirectMessage.query.filter(or_(DirectMessage.sender_id == user_id, DirectMessage.recipient_id == user_id)).all()
        for message in user_direct_messages:
            db.session.delete(message)
            db.session.commit()
        return jsonify({"msg":"Cuenta eliminada con exito"}), 200
   


@api.route('/settings/<string:username_var>/contactinfo', methods=['PUT'])
@jwt_required()
def handle_user_contact_info(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"Access Denied"})
    if request.method == 'PUT':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_contact_info = db.session.query(UserContactInfo).filter(UserContactInfo.user_id == user.id).first()
        if not user or not user_contact_info:
            return jsonify({"message": "User not found"}), 404
        default_values = user_contact_info
        user_contact_info.phone_number = request_data.get("phone_number", default_values.phone_number)
        user_contact_info.address = request_data.get("address", default_values.address)
        user_contact_info.city = request_data.get("city", default_values.city)
        user_contact_info.country = request_data.get("country", default_values.country)
        user_contact_info.state = request_data.get("state", default_values.state)
        user_contact_info.last_update = datetime.now()
        db.session.commit()
        return jsonify({"message":"Informacion actualizada correctamente", "user_contact_info": user_contact_info.serialize()}), 200

@api.route('/settings/<string:username_var>/hasmedia', methods=['GET'])
@jwt_required()
def handle_user_has_media(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"Access Denied"}), 401
    if request.method == 'GET':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_media = db.session.query(UserMedia).filter(UserMedia.user_id == user.id).first()
        if not user_media:
            return jsonify({"hasmedia": False}), 200
        return jsonify({"hasmedia": True}), 200

@api.route('/settings/<string:username_var>/addmedia', methods=['POST', 'PUT'])
@jwt_required()
def handle_user_add_media(username_var):
    user = get_jwt_identity()
    if user != username_var:
        return jsonify({"Access Denied"})
    if request.method == 'POST':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_media = db.session.query(UserMedia).filter(UserMedia.user_id == user.id).first()
        if not user_media:
            user_media = UserMedia(
            user_id=user.id,
            youtube_media1=None,
            youtube_media2=None,
            spotify_media1=None,
            spotify_media2=None,
            soundcloud_media1=None,
            soundcloud_media2=None)
            db.session.add(user_media)
            db.session.commit()
        youtube_media1 = request_data.get("youtube_media1", None)
        youtube_media2 = request_data.get("youtube_media2", None)
        spotify_media1 = request_data.get("spotify_media1", None)
        spotify_media2 = request_data.get("spotify_media2", None)
        soundcloud_media1 = request_data.get("soundcloud_media1", None)
        soundcloud_media2 = request_data.get("soundcloud_media2", None)
        new_user_media = UserMedia(
        youtube_media1=youtube_media1,
        youtube_media2=youtube_media2,
        spotify_media1=spotify_media1,
        spotify_media2=spotify_media2,
        soundcloud_media1=soundcloud_media1,
        soundcloud_media2=soundcloud_media2)
        db.session.add(new_user_media)
        db.session.commit()
        return jsonify({"msg": "Informacion actualizada correctamente"}), 200
    if request.method == 'PUT':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_media = db.session.query(UserMedia).filter(UserMedia.user_id == user.id).first()
        default_values = user_media
        youtube_media1 = request_data.get("youtube_media1", default_values.youtube_media1)
        youtube_media2 = request_data.get("youtube_media2", default_values.youtube_media2)
        spotify_media1 = request_data.get("spotify_media1", default_values.spotify_media1)
        spotify_media2 = request_data.get("spotify_media2", default_values.spotify_media2)
        soundcloud_media1 = request_data.get("soundcloud_media1", default_values.soundcloud_media1)
        soundcloud_media2 = request_data.get("soundcloud_media2", default_values.soundcloud_media2)
        db.session.commit()
        return jsonify({"msg": "Informacion actualizada correctamente"}), 200




@api.route('settings/<string:username_var>/socialmedia', methods=['PUT'])
@jwt_required()
def handle_user_social_media(username_var):
    current_user = get_jwt_identity()
    if current_user != username_var:
        return jsonify({"message": "Access denied"}), 401
    if request.method == 'PUT':
        request_data = request.get_json(force=True)
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_social_media = db.session.query(UserSocialMedia).filter(UserSocialMedia.user_id == user.id).first()
        if not user or not user_social_media:
            return jsonify({"message": "User not found"}), 404
        default_values = user_social_media
        user_social_media.website_url = request_data.get("website_url", default_values.website_url)
        user_social_media.youtube_url = request_data.get("youtube_url", default_values.youtube_url)
        user_social_media.soundcloud_url = request_data.get("soundcloud_url", default_values.soundcloud_url)
        user_social_media.instagram_url = request_data.get("instagram_url", default_values.instagram_url)
        user_social_media.facebook_url = request_data.get("facebook_url", default_values.facebook_url)
        user_social_media.twitter_url = request_data.get("twitter_url", default_values.twitter_url)
        user_social_media.tiktok_url = request_data.get("tiktok_url", default_values.tiktok_url)
        user_social_media.snapchat_url = request_data.get("snapchat_url", default_values.snapchat_url)
        user_social_media.spotify_url = request_data.get("spotify_url", default_values.spotify_url)
        user_social_media.last_update = datetime.now()
        db.session.commit()
    
    return jsonify({"message":"Informacion actualizada correctamente", "user_social_media": user_social_media.serialize()}), 200
#<<-----1.1 User Settings related endpoints END----->>

#<<----1.1 START UserSocialMedia endpoint ----->>
@api.route('/<string:username_var>/socialmedia', methods=['GET'])
def handle_user_socialmedia(username_var):

    #GET, ES EL QUE USAREMOS POR DEFECTO PARA REPRSENTAR EN EL FRONT TODA LA INFORMACION QUE DICHO USUARIO TENGA EN SU PERFIL
    if request.method == 'GET':
        user = db.session.query(User).filter(User.user_name == username_var).first()
        user_social_media = db.session.query(UserSocialMedia).filter(UserSocialMedia.user_id == user.id).first()
        if not user_social_media:
            return jsonify({"message": "User not found"}), 404
        return jsonify(user_social_media.serialize()), 200

    #put BASICAMENTE PARA ACTUALIZAR CUALQUIER CAMPO RELACIONADO CON SOCIAL MEDIA


        #<<----1.1 UserSocialMedia endpoint END ----->>

        #<<----1.2 UserContactInfo endpoint START  ----->>

@api.route('/<string:username_var>/contactinfo', methods=['GET'])
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


         #<<----1.2 UserContactInfo endpoint END ----->>

@api.route('/logout', methods=['GET'])
@jwt_required()
def logout():
    user = get_jwt_identity()
    return jsonify({"message": f"{user} has been logged out"}), 200



#<<-----1.1 User Follow Unfollow endpoints----->>
@api.route('/follow/<string:username_var>', methods=['POST'])
@jwt_required()
def follow(username_var):
    user = get_jwt_identity()
    user_to_follow = User.query.filter_by(user_name=username_var).first()
    if not user_to_follow:
        return jsonify({"message": "User not found"}), 404

    user_to_follow_id = user_to_follow.id
    user_id = User.query.filter_by(user_name=user).first().id 
    if user_id == user_to_follow_id:
        return jsonify({"message": "You cannot follow yourself"}), 400

    user_to_follow_followers = user_to_follow.followers 
    if user_id in user_to_follow_followers:
        return jsonify({"message": "You are already following this user"}), 400

    user = User.query.filter_by(user_name=user).first()
    user.follow(user_to_follow)
    db.session.commit()
    return jsonify({"message": "You are now following this user"}), 201



@api.route('/unfollow/<string:username_var>', methods=['POST'])
@jwt_required()
def unfollow(username_var):
    user = get_jwt_identity()
    user_to_unfollow = User.query.filter_by(user_name=username_var).first()
    if not user_to_unfollow:
        return jsonify({"message": "User not found"}), 404

    user_to_unfollow_id = user_to_unfollow.id
    user_id = User.query.filter_by(user_name=user).first().id 
    if user_id == user_to_unfollow_id:
        return jsonify({"message": "You cannot unfollow yourself"}), 400

    user_to_unfollow_followers = user_to_unfollow.followers 
    user = User.query.filter_by(user_name=user).first()
    user.unfollow(user_to_unfollow)
    db.session.commit()
    return jsonify({"message": "You are no longer following this user"}), 201 

@api.route('/followers/<string:username_var>', methods=['GET'])
def followers(username_var):
    user = User.query.filter_by(user_name=username_var).first()
    if not user:
        return jsonify ({"message": "User not found"}), 404

    followers_list = user.followers
    followers_list_names = []
    followers_profile_img = []
    for follower in followers_list:
        followers_list_names.append(follower.user_name)
        followers_profile_img.append(follower.profile_img)
    return jsonify({"followers": followers_list_names, "profile_img": followers_profile_img}), 200
@api.route('/followerscount/<string:username>', methods=['GET'])
def followerscount(username):
    user = User.query.filter_by(user_name=username).first()
    if not user:
        return jsonify ({"message": "User not found"}), 404

    followers_list = user.followers
    followers_names = []
    for follower in followers_list:
        followers_names.append(follower.user_name)
    number_of_followers = len(followers_names)
    return jsonify(number_of_followers)

@api.route('/following/<string:username_var>', methods=['GET'])
def following(username_var):
    user = User.query.filter_by(user_name=username_var).first()
    if not user:
        return jsonify ({"message": "User not found"}), 404

    following_list = user.followed
    following_list_names = []
    following_profile_img= []
    for following in following_list:
        user = User.query.filter_by(id=following.id).first()
        following_list_names.append(user.user_name)
        following_profile_img.append(user.profile_img)
    return jsonify({"following": following_list_names, "profile_img": following_profile_img}),200

@api.route('/followingcount/<string:username>', methods=['GET'])
def followingcount(username):
    user = User.query.filter_by(user_name=username).first()
    if not user:
        return jsonify ({"message": "User not found"}), 404

    following_list = user.followed
    following_names = []
    for following in following_list:
        following_names.append(following.user_name)
    number_of_following = len(following_names)
    return jsonify(number_of_following)


#<<-----1 LOCALES ENDPOINT START ----->>

@api.route('/locales', methods=['GET'])
def get_locales():
    print('holaaa')
    locales = Local.query.all()
    locales_list = []
    for local in locales:
        locales_list.append(local.serialize())
    return jsonify(locales_list), 200
 
 
# PUBLIC LOCAL

@api.route('settings/publiclocal', methods=['POST'])
@jwt_required()
def public_local():
    user_name = get_jwt_identity()
    user = User.query.filter_by(user_name=user_name).first()
    # city_name da igual el nombre que se le de? al final se trae lo unico que se autocompleta en e l form?
    body_city = request.form.get('city_name')
    city = City.query.filter_by(name = body_city).first()
    
    
    

    if 'local_img' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['local_img'])
    else:
        raise APIException('Missing local_img on the FormData')


    data=request.form
    if db.session.query(Local).filter(Local.name == data['name']).first():
        return jsonify({"message": "El local ya está registrado"}),400
    try:
        print(data["ubicacion_local"], data["description"], result['secure_url'] )
        new_local = Local(
            name = data['name'],
            ubicacion_local = data["ubicacion_local"],
            description = data["description"],
            city_id = city.id,
            user_id = user.id,
            local_img = result['secure_url'],
            
        )
        db.session.add(new_local)
        db.session.commit()
    except Exception as error:
        print(error)
    response_body = {
        "msg": "local añadido"
        
    }
    return jsonify(response_body), 201








# @api.route('settings/<string:username_var>/publiclocal', methods=['PUT'])
# @jwt_required()
# def handle_public_local(username_var):
#     current_user = get_jwt_identity()
#     if current_user != username_var:
#         return jsonify({"message": "Access denied"}), 401
#     if request.method == 'PUT':
#         request_data = request.get_json(force=True)
#         user = db.session.query(User).filter(User.user_name == username_var).first()
#         user_social_media = db.session.query(UserSocialMedia).filter(UserSocialMedia.user_id == user.id).first()
#         if not user or not user_social_media:
#             return jsonify({"message": "User not found"}), 404
#         default_values = user_social_media
#         user_social_media.website_url = request_data.get("website_url", default_values.website_url)
#         user_social_media.youtube_url = request_data.get("youtube_url", default_values.youtube_url)
#         user_social_media.soundcloud_url = request_data.get("soundcloud_url", default_values.soundcloud_url)
#         user_social_media.last_update = datetime.now()
#         db.session.commit()
    
#     return jsonify({"message":"Informacion actualizada correctamente", "user_social_media": user_social_media.serialize()}), 200



#<<-----1 LOCALES ENDPOINT END ----->>


#<<-----MUSIC GENRES ----->>

@api.route('/music_genres', methods=['GET'])
def get_music_genres():
    music_genres = MusicGenre.query.all()
    music_genres_list = []
    for music_genre in music_genres:
        music_genres_list.append(music_genre.serialize())
    return jsonify(music_genres_list), 200


#<<-----MUSIC GENRES ----->>

#<<-----<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FILTER ENDPOINTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ----->>


@api.route('<string:country_var>/states', methods=['GET'])
def get_states(country_var):
    states = State.query.filter_by(country = country_var).all()
    states_list = []
    for state in states:
        states_list.append(state.name)
    return jsonify(states_list), 200

@api.route('/<string:state_var>/cities', methods=['GET'])
def get_cities(state_var):
    cities = City.query.filter_by(state = state_var).all()
    cities_list = []
    for city in cities:
        cities_list.append(city.name)
    return jsonify(cities_list), 200

@api.route('<string:state_var>/<string:city_var>', methods= ['GET'])
def get_city(state_var, city_var):
    cities = City.query.filter_by(state = state_var).all()
    cities_list = []
    for city in cities:
        cities_list.append(city.name)
    filtered_cities = [city for city in cities_list if city_var in city]
    return jsonify(filtered_cities), 200

@api.route('/states/<string:city_var>', methods=['GET'])
def get_state(city_var):
    state = City.query.filter_by(name = city_var).first()
    return jsonify(state.state), 200
#<<-----<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<FILTER ENDPOINTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ----->>


#<<-----<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<MESAGGES ENDPOINTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ----->>

@api.route('/<string:username_var>/receivedmessages', methods=['GET'])
def get_received_messages(username_var):
    user = User.query.filter_by(user_name = username_var).first()
    received_messages = DirectMessage.query.filter_by(recipient_id = user.id).all()
    received_messages_list = []
    for message in received_messages:
        received_messages_list.append(message.serialize())
    return jsonify(received_messages_list), 200

@api.route('/<string:username_var>/recipients', methods=['GET'])
def get_sent_messages(username_var):
    user = User.query.filter_by(user_name = username_var).first()
    recipients_user_names = []
    recipients = DirectMessage.query.filter_by(sender_id = user.id).all()
    for x in recipients:
        if x.recipient.user_name not in recipients_user_names:
            recipients_user_names.append(x.recipient.user_name)
    senders = DirectMessage.query.filter_by(recipient_id = user.id).all()
    for x in senders:
        if x.sender.user_name not in recipients_user_names:
            recipients_user_names.append(x.sender.user_name)
    recipient_profile_img = []
    for x in recipients_user_names:
        recipient_profile_img.append(User.query.filter_by(user_name = x).first().profile_img)
    return jsonify({"names": recipients_user_names, "profile_img":recipient_profile_img}), 200

@api.route('<string:username_var>/usernames', methods=['GET'])
def get_usernames(username_var):
    user = User.query.filter_by(user_name = username_var).first()
    users = User.query.all()
    usernames = []
    if user in users:
        for x in users:
            if x.user_name != user.user_name:
                usernames.append(x.user_name)
    return jsonify(usernames), 200

@api.route('/<string:username_sender>/newmessage/<string:username_recipient>', methods=['POST'])
def send_message(username_sender, username_recipient):
    sender_id = User.query.filter_by(user_name = username_sender).first().id
    recipient_id = User.query.filter_by(user_name = username_recipient).first().id
    request_data = request.get_json(force=True)
    message_body = request_data['message_body']
    new_message = DirectMessage(sender_id = sender_id, recipient_id = recipient_id, message_body = message_body)
    db.session.add(new_message)
    db.session.commit()
    return jsonify(new_message.serialize()), 201

@api.route('/<string:username_var>/conversation/<string:username_recipient>', methods=['GET'])
def get_conversation(username_var, username_recipient):
    user_id = User.query.filter_by(user_name = username_var).first().id
    recipient_id = User.query.filter_by(user_name = username_recipient).first().id
    messages_between = DirectMessage.query.filter(or_(and_(DirectMessage.sender_id == user_id, DirectMessage.recipient_id == recipient_id), and_(DirectMessage.sender_id == recipient_id, DirectMessage.recipient_id == user_id))).all()
    messages_between_list = []
    for x in messages_between:
        messages_between_list.append(x.serialize())
    return jsonify(messages_between_list), 200



