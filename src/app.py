"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import datetime
import os
from sqlalchemy import and_, or_, not_
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, User, UserContactInfo, UserMusicianInfo, UserSocialMedia, State, City, Local, LoggedUsers, DirectMessage
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from flask_jwt_extended import JWTManager 
from flask_socketio import SocketIO
from flask_socketio import send, emit
import json
#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SUPERSECRETKEY") 
# app.config['JWT_EXPIRATION_DELTA'] = datetime.timedelta(days=10)
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(hours=1)
jwt = JWTManager(app)
socketio = SocketIO(app, cors_allowed_origins="*")
# database condiguration
db_url = os.getenv("DATABASE_URL")

if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")

else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type = True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response
@socketio.on('connect')
def test_connect():
    print('client connected')

@socketio.on('disconect')
def test_disconnect():
    print('Client disconnected')

@socketio.on('message')
def handle_message(data):
    print(data)
    socketio.emit('message', data)

@socketio.on('logged_users')
def handle_is_connected():
    logged_users = User.query.filter_by(is_logged=True).all()
    logged_users_name = [user.user_name for user in logged_users]
    print("hola estos son los usuarios conectados", logged_users_name)
    socketio.emit('logged_users', logged_users_name)

@socketio.on('recipients')
def handle_recipients(current_user):
    sender_id = User.query.filter_by(user_name=current_user).first().id
    recipients = DirectMessage.query.filter_by(sender_id=sender_id).all()
    recipients_name = []
    for recipient in recipients:
        if recipient.recipient.user_name not in recipients_name:
            recipients_name.append(recipient.recipient.user_name)
    print("hola estos son los usuarios conectados", recipients_name)
    socketio.emit('recipients', recipients_name)


  
# create a socket for direct messages and store them in the database
@socketio.on('direct_message')
def handle_direct_message(message_body, sender_user_name, receiver_username):
    sender_user = User.query.filter_by(user_name=sender_user_name).first()
    receiver_user = User.query.filter_by(user_name=receiver_username).first()
    direct_message = DirectMessage(
        sender_id=sender_user.id,
        recipient_id=receiver_user.id,
        message_body=message_body
    )
    db.session.add(direct_message)
    db.session.commit()
    print("direct_message", direct_message.serialize())
    socketio.emit('direct_message', direct_message.serialize())





    
 
 
# create a socket for group messages and store them in the database





# create a socket for group messages and store them in the database
 





# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    socketio.run(app, host='0.0.0.0', port=PORT, debug=True)
