from flask_sqlalchemy import SQLAlchemy
import datetime
import math
from sqlalchemy import Column, ForeignKey, Integer, String, Date


from sqlalchemy.orm import relationship
db = SQLAlchemy()


class Country(db.Model):#pais
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    states = db.relationship('State', backref='country', lazy=True) 

    def __repr__(self):
        return f'<Countries {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class State(db.Model): #provincias
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    country_name = db.Column(db.String(80), db.ForeignKey('country.name'), nullable=False)
   
    def __repr__(self):
        return f'<States {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country_name": self.country_name,
      
        }

class City(db.Model): #ciudades, pueblos
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    state_name = db.Column(db.String(80), db.ForeignKey('state.name'), nullable=False)
    locales = db.relationship('Local', backref='city', lazy=True)
    bands = db.relationship('Band', backref='city', lazy=True)
    users = db.relationship('User', backref='city', lazy=True)
    events = db.relationship('Event', backref='city', lazy=True)

    def __repr__(self):
        return f'<Cities {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "state_name": self.state_name,
            
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name= db.Column(db.String(80), unique=True, nullable=False)
    profile_img = db.Column(db.Unicode)
    portrait_img = db.Column(db.Unicode)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=True)
    description = db.Column(db.String(500), nullable=True)
    phone_number = db.Column(db.String(80), nullable=True)
    address = db.Column(db.String(80), nullable=True)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id')) 

    website_url = db.Column(db.String(80), nullable=True)
    youtube_url = db.Column(db.String(80), nullable=True)
    soundcloud_url = db.Column(db.String(80), nullable=True)
    instagram_url = db.Column(db.String(80), nullable=True)
    facebook_url = db.Column(db.String(80), nullable=True)
    twitter_url = db.Column(db.String(80), nullable=True)
    tiktok_url = db.Column(db.String(80), nullable=True)
    snapchat_url = db.Column(db.String(80), nullable=True)
    spotify_url = db.Column(db.String(80), nullable=True)

    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_login = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_musician = db.Column(db.Boolean(), unique=False, nullable=False)
    
    locales = db.relationship("Local", backref="user", lazy=True)
    bands = db.relationship('Band', backref='user', lazy=True)

    followed = db.relationship(
        'User', secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic')


    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def is_following(self, user):
        return self.followed.filter(
            followers.c.followed_id == user.id).count() > 0
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "profile_img": self.profile_img,
            "portrait_img": self.portrait_img,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "description": self.description,
            "phone_number": self.phone_number,
            "address": self.address,
            "city_id": self.city_id,

            "website_url": self.website_url,
            "youtube_url": self.youtube_url,
            "soundcloud_url": self.soundcloud_url,
            "instagram_url": self.instagram_url,
            "facebook_url": self.facebook_url,
            "twitter_url": self.twitter_url,
            "tiktok_url": self.tiktok_url,
            "snapchat_url": self.snapchat_url,
            "spotify_url": self.spotify_url,

            "creation_date": self.creation_date,
            "last_login": self.last_login.strftime("%Y-%m-%d %H:%M:%S"),  
            "last_update": self.last_update,
            "is_active": self.is_active,
            "is_musician": self.is_musician,

            "followed": [x.user_name for x in self.followed],
            
        }

followers = db.Table('followers',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'))
)


class MusicalInstrumentsCategory(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(80), unique=True, nullable=False)
        musical_instruments = db.relationship("MusicalInstrument", backref="musical_instruments_category")

        def __repr__(self):
            return f'<MusicalInstrumentsCategory {self.name}>'

        def serialize(self):
            return {
                "id": self.id,
                "name": self.name,
            }

class MusicalInstrument(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    musical_instruments_category_id = db.Column(db.Integer, db.ForeignKey('musical_instruments_category.id'), nullable=False)
    
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    def __repr__(self):
        return f'<MusicalInstrument {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "musical_instruments_category_id": self.musical_instruments_category_id,
            "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
        }

class Band(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    band_img = db.Column(db.Unicode)
    name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.String(500), nullable=True)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)

    def __repr__(self):
        return f'<Bands {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "band_img": self.band_img,
            "name": self.name,
            "description": self.description,
            "city_id":self.city_id,
            "user_id": self.user_id,

            "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
          
        }

class MusicGenre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    

    def __repr__(self):
        return f'<MusicGenre {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
          
        }

class Local (db.Model):
    # __tablename__='local'
    id=db.Column(db.Integer, primary_key=True)
    local_img = db.Column(db.Unicode)
    name = db.Column(db.String(255), nullable=False)
    ubicacion_local = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    events = db.relationship('Event', backref='local', lazy=True)

  

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "ubicacion_local": self.ubicacion_local,
            "description": self.description,
            "city": self.city.name,
            "local_type": self.local_type
            

        }

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_img = db.Column(db.Unicode)
    name = db.Column(db.String(80), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    hour = db.Column(db. String(10), nullable=True) 
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=False)
    local_id = db.Column(db.Integer, db.ForeignKey('local.id'), nullable=False)

    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)

    def __repr__(self):
        return f'<Events {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "event_img":self.event_img,
            "name": self.name,
            "date": self.date.strftime("%Y-%m-%d %H:%M:%S"),
            "hour": self.hour,
            "city_id": self.city_id,
            "local_id": self.local_id,

            "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
        }

band_local = db.Table('band_local',
    db.Column("band_id", db.Integer, ForeignKey("band.id"), primary_key=True),
    db.Column("local_id", db.Integer, ForeignKey("local.id"), primary_key=True)
)


music_genre_local = db.Table('music_genre_local',
    db.Column("music_genre_id", db.Integer, ForeignKey("music_genre.id"), primary_key=True),
    db.Column("local_id", db.Integer, ForeignKey("local.id"), primary_key=True)
)

music_genre_band = db.Table('music_genre_band',
    db.Column("band_id", db.Integer, ForeignKey("band.id"), primary_key=True),
    db.Column("music_genre_id", db.Integer, ForeignKey("music_genre.id"), primary_key=True)
)

music_genre_user = db.Table('music_genre_user',
    db.Column("user_id", db.Integer, ForeignKey("user.id"), primary_key=True),
    db.Column("music_genre_id", db.Integer, ForeignKey("music_genre.id"), primary_key=True)
)

music_genre_event = db.Table('music_genre_event',
    db.Column("event_id", db.Integer, ForeignKey("event.id"), primary_key=True),
    db.Column("music_genre_id", db.Integer, ForeignKey("music_genre.id"), primary_key=True)
)


musical_instrument_user = db.Table('music_genre_user',
    db.Column("user_id", db.Integer, ForeignKey("user.id"), primary_key=True),
    db.Column("musical_instrument_id", db.Integer, ForeignKey("musical_instrument.id"), primary_key=True)
)

musical_instrument_band = db.Table('music_genre_band',
    db.Column("band_id", db.Integer, ForeignKey("band.id"), primary_key=True),
    db.Column("musical_instrument_id", db.Integer, ForeignKey("musical_instrument.id"), primary_key=True)
)