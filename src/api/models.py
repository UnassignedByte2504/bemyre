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
    cities = db.relationship('Cities', backref='State', lazy=True)
    def __repr__(self):
        return f'<States {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "country": self.country,
            "cities": [city.serialize() for city in self.cities]
        }


class Cities(db.Model): #ciudades, pueblos
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    state = db.Column(db.String(80), db.ForeignKey('state.name'), nullable=False)
    def __repr__(self):
        return f'<Cities {self.name}>'
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "state": self.state,
        }

class ZipCodes (db.Model):
    id = db.Column(db.Integer, primary_key=True)
    zip_code = db.Column(db.String(80), unique=True, nullable=False)
    city = db.Column(db.String(80), db.ForeignKey('cities.name'), nullable=False)
    state = db.Column(db.String(80), db.ForeignKey('state.name'), nullable=False)
    country = db.Column(db.String(80), db.ForeignKey('country.name'), nullable=False)
    def __repr__(self):
        return f'<ZipCodes {self.zip_code}>'
    def serialize(self):
        return {
            "id": self.id,
            "zip_code": self.zip_code,
            "city": self.city,
            "state": self.state,
            "country": self.country,
        }

class UserContactInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = relationship("User", back_populates="user_contact_info")
    phone_number = db.Column(db.String(80), unique=True, nullable=True)
    address = db.Column(db.String(80), unique=True, nullable=True)
    country = db.Column(db.String(80), db.ForeignKey('country.name'), nullable=True)
    state = db.Column(db.String(80), db.ForeignKey('state.name'), nullable=True)
    city = db.Column(db.String(80), db.ForeignKey('cities.name'), nullable=True)
    zip_code = db.Column(db.String(80), db.ForeignKey('zip_codes.zip_code'), nullable=True)
    last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    def __repr__(self):
        return f'<UserContactInfo {self.url}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "phone_number": self.phone_number,
            "address": self.address,
            "country": self.country,
            "state": self.state,
            "city": self.city,
            "zip_code": self.zip_code,
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
    email = db.Column(db.String(120), unique=True, nullable=False)
    user_contact_info = relationship("UserContactInfo", back_populates="user")
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=False)
    birth_day = db.Column(db.DateTime, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    user_social_media = relationship("UserSocialMedia", back_populates="user")
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    last_login = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # is_musician = db.Column(db.Boolean(), unique=False, nullable=False)
    # user_musician_info = relationship("UserMusicianInfo", back_populates="user")
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_type": self.user_type,
            "email": self.email,
            "first name": self.first_name,
            "last name": self.last_name,
            "birth day": self.birth_day,
            "age": math.floor((datetime.datetime.utcnow() - self.birth_day).days / 365),
            "user_contact_info": [user_contact_info.serialize() for user_contact_info in self.user_contact_info],
            "user_social_media": [user_social_media.serialize() for user_social_media in self.user_social_media],
        }
            # do not serialize the password, its a security breach

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
        return f'<UserSocialMedia {self.url}>'

    def serialize(self):
        return {
            "id": self.id,
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


# class UserMusicalInstrument(db.Model):
#     id= db.Column(db.Integer, primary_key=True)
#     user_musician_info_id = db.Column(db.Integer, db.ForeignKey('user_musician_info.id'), nullable=False)
#     user_musician_info = relationship("UserMusicianInfo", backref="user_musical_instruments", lazy=True)
#     musical_instrument_id = db.Column(db.Integer, db.ForeignKey('musical_instrument.id'), nullable=False)
#     musical_instrument = relationship("MusicalInstrument", backref="user_musical_instruments", lazy=True)	
#     last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)	;
#     def __repr__(self):	
#         return f'<UserMusicalInstrument {self.musical_instrument.name}>'
#         def serialize(self):
#             return {
#                 "id": self.id,
#                 "musical_instrument_id": self.musical_instrument_id,
#                 "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
#             }


# class UserMusicianInfo(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     user = relationship("User", backref="user_musician_info", lazy=True)
#     user_musical_instruments = relationship("UserMusicalInstrument", backref="user_musician_info", lazy=True)
#     artistic_name = db.Column(db.String(80), unique=False, nullable=True)
#     musical_genres = relationship("UserMusicGenre", backref="user_musician_info", lazy=True)
#     musical_styles = relationship("UserMusicStyle", backref="user_musician_info", lazy=True)
#     musical_styles_other = db.Column(db.String(80), unique=False, nullable=True)
#     musical_instruments_other = db.Column(db.String(80), unique=False, nullable=True)
#     musical_genres_other = db.Column(db.String(80), unique=False, nullable=True)

#     def __repr__(self):
#         return f'<UserMusicianInfo {self.id}>'
#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "artistic_name": self.artistic_name,
#             "musical_instruments": [musical_instrument.serialize() for musical_instrument in self.musical_instruments],
#             "musical_genres": [musical_genre.serialize() for musical_genre in self.musical_genres],
#             "musical_styles": [musical_style.serialize() for musical_style in self.musical_styles],
#             "musical_styles_other": self.musical_styles_other,
#             "musical_instruments_other": self.musical_instruments_other,
#             "musical_genres_other": self.musical_genres_other,
#         }
    
# class UserMusicGenre(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     user = relationship("User", back_populates="user_musician_info")
#     music_genre_id = db.Column(db.Integer, db.ForeignKey('music_genre.id'), nullable=False)
#     music_genre = relationship("MusicGenre", back_populates="user_music_genres")
#     def __repr__(self):
#         return f'<UserMusicGenre {self.id}>'
#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "music_genre_id": self.music_genre_id,
#             "music_genre": self.music_genre.serialize(),
#         }
     
# class UserMusicStyle(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     user = relationship("User", back_populates="user_musician_info")
#     music_style_id = db.Column(db.Integer, db.ForeignKey('music_style.id'), nullable=False)	
#     music_style = relationship("MusicStyle", back_populates="user_music_styles")	
#     def __repr__(self):
#         return f'<UserMusicStyle {self.id}>'	
#     def serialize(self):
#         return {
#             "id": self.id,
#             "user_id": self.user_id,
#             "music_style_id": self.music_style_id,
#             "music_style": self.music_style.serialize(),
#         }

# class MusicalInstrumentsCategory(db.Model):
#         id = db.Column(db.Integer, primary_key=True)
#         name = db.Column(db.String(80), unique=True, nullable=False)
#         musical_instruments = relationship("MusicalInstrument", back_populates="musical_instruments_category")
#         def __repr__(self):
#             return f'<MusicalInstrumentsCategory {self.name}>'

#         def serialize(self):
#             return {
#                 "id": self.id,
#                 "name": self.name,
#                 "musical_instruments": [musical_instrument.serialize() for musical_instrument in self.musical_instruments],
#             }


# class MusicalInstrument(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     musical_instruments_category_id = db.Column(db.Integer, db.ForeignKey('musical_instruments_category.id'), nullable=False)
#     musical_instruments_category = relationship("MusicalInstrumentsCategory", back_populates="musical_instruments")
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
#     last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
#     def __repr__(self):
#         return f'<MusicalInstrument {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
#             "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
#         }

# class Bands(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     owner = relationship("User", back_populates="bands")
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     description = db.Column(db.String(80), unique=True, nullable=True)
#     music_genre_id = db.Column(db.String(120), db.ForeignKey('music_genre.name'), nullable=False)
#     music_genre = relationship("MusicGenre", back_populates="bands")
#     creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
#     last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
#     band_members = relationship("BandMembers", back_populates="bands")
#     def __repr__(self):
#         return f'<Bands {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "owner": self.owner.serialize(),
#             "name": self.name,
#             "description": self.description,
#             "music_genre": self.music_genre.serialize(),
#             "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
#             "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
#             "band_members ": [band_member.serialize() for band_member in self.band_members],
#         }

# class BandMembers(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     band_id = db.Column(db.Integer, db.ForeignKey('bands.id'), nullable=False)
#     band = relationship("Bands", back_populates="band_members")
#     member_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     member = relationship("User", back_populates="band_members")
#     creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
#     last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)
#     def __repr__(self):
#         return f'<BandMembers {self.id}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "band": self.band.serialize(),
#             "member": self.member.serialize(),
#             "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
#             "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
#         }

# class MusicGenre(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     music_genres_id = db.Column(db.Integer, db.ForeignKey('music_genres.id'), nullable=False)
#     bands = relationship("Bands", back_populates="music_genre")

#     def __repr__(self):
#         return f'<MusicGenre {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "music_genres_id": self.music_genres_id,
#             "bands": [band.serialize() for band in self.bands],
#         }
# class MusicGenres(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     music_genres = relationship("MusicGenre", back_populates="music_genres")
#     def __repr__(self):
#         return f'<MusicGenres {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "music_genres": [music_genre.serialize() for music_genre in self.music_genres],
#         }


# class EventTypes(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     events = relationship("Event", back_populates="event_types")
#     def __repr__(self):
#         return f'<EventTypes {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "events": [event.serialize() for event in self.events],
#         }

# class Events(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     event_types_id = db.Column(db.Integer, db.ForeignKey('event_types.id'), nullable=False)
#     event_types = relationship("EventTypes", back_populates="events")
#     name = db.Column(db.String(80), unique=True, nullable=False)
#     description = db.Column(db.String(80), unique=True, nullable=True)
#     date = db.Column(db.DateTime, nullable=False)
#     creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
#     last_update = db.Column(db.DateTime, nullable=False, default = datetime.datetime.utcnow)

#     def __repr__(self):
#         return f'<Events {self.name}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "description": self.description,
#             "date": self.date.strftime("%Y-%m-%d %H:%M:%S"),
#             "creation_date": self.creation_date.strftime("%Y-%m-%d %H:%M:%S"),
#             "last_update": self.last_update.strftime("%Y-%m-%d %H:%M:%S"),
#         }