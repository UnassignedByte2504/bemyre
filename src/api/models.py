from flask_sqlalchemy import SQLAlchemy
import datetime
import math



from sqlalchemy.orm import relationship
db = SQLAlchemy()

# back_populates on relationship 'Countries.states' refers to attribute 'States.country' that is not a relationship.  The back_populates parameter should refer to the name of a relationship on the target class.


 
class Country(db.Model):#pais
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    states = db.relationship('State', backref='Country', lazy=True) 

    def __repr__(self):
        return f'<Countries {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "states": [state.serialize() for state in self.states]

        }

class State(db.Model): #provincias
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    country = db.Column(db.String(80), db.ForeignKey('country.name'), nullable=False)
    cities = db.relationship('City', backref='State', lazy=True)
    def __repr__(self):
        return f'<States {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country": self.country,
            "cities": [city.serialize() for city in self.cities]
        }


class City(db.Model): #ciudades, pueblos
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    state = db.Column(db.String(80), db.ForeignKey('state.name'), nullable=False)
    locales = db.relationship('Local', backref='City', lazy=True)
    def __repr__(self):
        return f'<Cities {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "state": self.state,
            "locales": [locales.serialize() for local in self.locales]
        }

class UserContactInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = relationship("User", back_populates="user_contact_info")
    phone_number = db.Column(db.String(80), unique=True, nullable=True)
    address = db.Column(db.String(80), unique=True, nullable=True)
    country = db.Column(db.Integer , db.ForeignKey('country.id'), nullable=True)
    state = db.Column (db.Integer, db.ForeignKey('state.id'), nullable=True)
    city = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=True)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    def __repr__(self):
        return f'<UserContactInfo {self.user}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "phone_number": self.phone_number,
            "address": self.address,
            "country": self.country,
            "state": self.state,
            "city": self.city,
            "last_update": self.last_update,
        }
class UserType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    def __repr__(self):
        return f'<UserType {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_type = db.Column(db.String(80), db.ForeignKey('user_type.name'), nullable=True)
    user_name= db.Column(db.String(80), unique=True, nullable=False)
    profile_img = db.Column(db.Unicode)
    portrait_img = db.Column(db.Unicode)
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_contact_info = relationship("UserContactInfo", back_populates="user")
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=True)
    user_social_media = relationship("UserSocialMedia", back_populates="user")
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_login = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    is_musician = db.Column(db.Boolean(), unique=False, nullable=False)
    user_musician_info = relationship("UserMusicianInfo", back_populates="user")
    locales = relationship("Local", back_populates="user")
    # followers = relationship("User", secondary=followers, back_populates="following")
    # following = relationship("User", secondary=followers, back_populates="followers")
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_type": self.user_type,
            "user_name": self.user_name,
            "profile_img": self.profile_img,
            "portrait_img": self.portrait_img,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "description": self.description,
            "creation_date": self.creation_date,
            "last_login": self.last_login.strftime("%Y-%m-%d %H:%M:%S"),    
            "user_contact_info": [user_contact_info.serialize() for user_contact_info in self.user_contact_info],
            "user_social_media": [user_social_media.serialize() for user_social_media in self.user_social_media],
            "user_musician_info": [user_musician_info.serialize() for user_musician_info in self.user_musician_info],
            "locales": [x.serialize() for x in self.locales],
            # "followers": [x.serialize() for x in self.followers],
            # "following": [x.serialize() for x in self.following]
        }
            # do not serialize the password, its a security breach

# # create association table for user followers
# class Followers(db.Model):
#     __tablename__ = "followers"
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     follower_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

#     def __repr__(self):
#         return f'<User {self.user and self.follower}>'


class UserSocialMedia(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = relationship("User", back_populates="user_social_media")
    website_url = db.Column(db.String(80), unique=True, nullable=True)
    youtube_url = db.Column(db.String(80), unique=True, nullable=True)
    soundcloud_url = db.Column(db.String(80), unique=True, nullable=True)
    instagram_url = db.Column(db.String(80), unique=True, nullable=True)
    facebook_url = db.Column(db.String(80), unique=True, nullable=True)
    twitter_url = db.Column(db.String(80), unique=True, nullable=True)
    tiktok_url = db.Column(db.String(80), unique=True, nullable=True)
    snapchat_url = db.Column(db.String(80), unique=True, nullable=True)
    spotify_url = db.Column(db.String(80), unique=True, nullable=True)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    def __repr__(self):
        return f'<UserSocialMedia {self.user}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "website_url": self.website_url,
            "youtube_url": self.youtube_url,
            "soundcloud_url": self.soundcloud_url,
            "instagram_url": self.instagram_url,
            "facebook_url": self.facebook_url,
            "twitter_url": self.twitter_url,
            "tiktok_url": self.tiktok_url,
            "snapchat_url": self.snapchat_url,
            "spotify_url": self.spotify_url,
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
        }

class UserMusicianInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=True, nullable=False)
    user = relationship("User", back_populates="user_musician_info")
    user_musical_instruments = relationship("UserMusicalInstrument", back_populates="user_musician_info")
    artistic_name = db.Column(db.String(80), unique=False, nullable=True)
    user_music_genre = relationship("UserMusicGenre", back_populates="user_musician_info")
    musical_instruments_other = db.Column(db.String(80), unique=False, nullable=True)
    musical_genres_other = db.Column(db.String(80), unique=False, nullable=True)
    bands = relationship("Bands")
    band_member = relationship("BandMembers")
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)

  
   

    def __repr__(self):
        return f'<UserMusicianInfo {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "artistic_name": self.artistic_name,
            "user_musical_instruments": [musical_instrument.serialize() for musical_instrument in self.user_musical_instruments],
            "user_music_genre": [musical_genre.serialize() for musical_genre in self.user_music_genre],
            "musical_instruments_other": self.musical_instruments_other,
            "musical_genres_other": self.musical_genres_other,
            "bands": [band.serialize() for band in self.bands],
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
        }

class UserMusicalInstrument(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    user_musician_info_id = db.Column(db.Integer, db.ForeignKey('user_musician_info.id'), nullable=False)
    user_musician_info = relationship("UserMusicianInfo", back_populates="user_musical_instruments")
    musical_instrument = relationship("MusicalInstrument", backref="user_musical_instrument", lazy=True)	
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    def __repr__(self):	
        return f'<UserMusicalInstrument {self.musical_instrument.name}>'
        def serialize(self):
            return {
                "id": self.id,
                "musical_instrument_id": self.musical_instrument_id,
                "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
            }



    
class UserMusicGenre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_musician_info_id = db.Column(db.Integer, db.ForeignKey('user_musician_info.id'), nullable=False)
    user_musician_info = relationship("UserMusicianInfo", back_populates="user_music_genre")
    music_genre_id = db.Column(db.Integer, db.ForeignKey('music_genre.id'), nullable=False)
    music_genre = relationship("MusicGenre", backref="user_music_genre", lazy=True)
    def __repr__(self):
        return f'<UserMusicGenre {self.id}>'
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "music_genre_id": self.music_genre_id,
            "music_genre": self.music_genre.serialize(),
        }
     

class MusicalInstrumentsCategory(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(80), unique=True, nullable=False)
        musical_instruments = relationship("MusicalInstrument", back_populates="musical_instruments_category")
        def __repr__(self):
            return f'<MusicalInstrumentsCategory {self.name}>'

        def serialize(self):
            return {
                "id": self.id,
                "name": self.name,
                "musical_instruments": [musical_instrument.serialize() for musical_instrument in self.musical_instruments],
            }


class MusicalInstrument(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    musical_instruments_category_id = db.Column(db.Integer, db.ForeignKey('musical_instruments_category.id'), nullable=False)
    musical_instruments_category = relationship("MusicalInstrumentsCategory")
    user_musical_instruments_id = db.Column(db.Integer, db.ForeignKey('user_musical_instrument.id'), nullable=False)
    name = db.Column(db.String(80), unique=True, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    def __repr__(self):
        return f'<MusicalInstrument {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
        }

class Bands(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user_musician_info.user_id'), nullable=False)
    owner = relationship("UserMusicianInfo", back_populates="bands")
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(80), unique=True, nullable=True)
    music_genre_id = db.Column(db.String(120), db.ForeignKey('music_genre.name'), nullable=False)
    music_genre = relationship("MusicGenre")
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    band_members = relationship("BandMembers", back_populates="bands")
    def __repr__(self):
        return f'<Bands {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "owner": self.owner.serialize(),
            "name": self.name,
            "description": self.description,
            "music_genre": self.music_genre.serialize(),
            "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
            "band_members ": [band_member.serialize() for band_member in self.band_members],
        }

class BandMembers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    band_id = db.Column(db.Integer, db.ForeignKey('bands.id'), nullable=False)
    bands = relationship("Bands", back_populates="band_members")
    member_id = db.Column(db.Integer, db.ForeignKey('user_musician_info.user_id'), nullable=False)
    member = relationship("UserMusicianInfo", back_populates="band_member")
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    def __repr__(self):
        return f'<BandMembers {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "band": self.band.serialize(),
            "member": self.member.serialize(),
            "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
        }

class MusicGenre(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    bands = relationship("Bands", back_populates="music_genre")
    influence_bands = db.relationship('InfluenceBand', backref='MusicGenre', lazy=True)

    def __repr__(self):
        return f'<MusicGenre {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "bands": [band.serialize() for band in self.bands],
        }


class EventTypes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    events = relationship("Event", back_populates="event_types")
    def __repr__(self):
        return f'<EventTypes {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "events": [event.serialize() for event in self.events],
        }

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    event_types_id = db.Column(db.Integer, db.ForeignKey('event_types.id'), nullable=False)
    event_types = relationship("EventTypes", back_populates="events")
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(80), unique=True, nullable=True)
    date = db.Column(db.DateTime, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)

    def __repr__(self):
        return f'<Events {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "date": self.date.strftime("%Y-%m-%d %H:%M:%S"),
            "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
            "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
        }

class InfluenceBand(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    genre = db.Column(db.String(80), db.ForeignKey('music_genre.name'), nullable=True)


    def __repr__(self):
        return f'<InfluenceBand {self.name}>'

    def serialize(self):
        return {
            "name": self.name,
            "genre": self.music_genre.name,


        }

class ImgTest (db.Model):
    __tablename__ = 'img_test'
    id = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.Unicode)
    img_name = db.Column(db.String(255), nullable=True)
    img_type = db.Column(db.String(255), nullable=True)
    img_size = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            "id": self.id,
            "img": self.img,
            "img_name": self.img_name,
            "img_type": self.img_type,
            "img_size": self.img_size
        }


class Local (db.Model):
    __tablename__='local'
    id=db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), unique=True, nullable=True)
    ubicacion_local = db.Column(db.String(255), nullable=True)
    description = db.Column(db.String(500), nullable=True)
    city_id = db.Column(db.Integer, db.ForeignKey('city.id'), nullable=True)
    city = db.relationship('City', backref=('local'), lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    user = db.relationship('User', backref=('local'), lazy=True)
    local_music_genres = relationship("LocalMusicGenre", backref=('Local'), lazy=True)
    local_type = db.Column(db.String(255), nullable=True)

    

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "ubicacion_local": self.ubicacion_local,
            "description": self.description,
            "city": self.city.name,
            "local_music_genres": [musicgenre.serialize() for musicgenre in self.local_music_genres],
            "local_type": self.local_type
            

        }



# association_table = db.Table('association',
#     db.Column("bands_id", db.Integer, ForeignKey("bands.id"), primary_key=True),
#     db.Column("locales_id", db.Integer, ForeignKey("locales.id"), primary_key=True)
# )

# association_table = db.Table('association',
#     db.Column("musicgenre_id", db.Integer, ForeignKey("musicgenre.id"), primary_key=True),
#     db.Column("locales_id", db.Integer, ForeignKey("locales.id"), primary_key=True)
# )



class LocalMusicGenre (db.Model):
    id= db.Column(db.Integer, primary_key=True)
    musicgenre_id = db.Column(db.Integer, db.ForeignKey('music_genre.id'), nullable=False)
    music_genre = db.relationship ('MusicGenre')
    local_id = db.Column(db.Integer, db.ForeignKey('local.id'), nullable=False)
    local = relationship("Local")

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            "id": self.id,
            "musicgenre_id": self.musicgenre_id,
            "music_genre": self.music_genre.name,
            "local_id": self.local_id,
            "local": self.local
        }
