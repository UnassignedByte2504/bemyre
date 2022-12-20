"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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
        is_active=True
    ) 
    db.session.add(new_user)
    db.session.commit()
    return jsonify(
        {
            "message": "User created successfully",
            "user": new_user.serialize()
        }
    ), 201


 




