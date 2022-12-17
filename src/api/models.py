from flask_sqlalchemy import SQLAlchemy
import datetime
import math



from sqlalchemy.orm import relationship
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    surnames = db.Column(db.String(80), unique=False, nullable=False)
    user_name= db.Column(db.String(80), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    localidad_id= db.Column(db.Integer, db.ForeignKey('localidad.id'))
    localidad = relationship('Localidad', backref='user')
    creation_date = db.Column(db.DateTime, nullable=False, default=datetime.datetime.utcnow)
    birth_day = db.Column(db.DateTime, nullable=False)
    age = db.Column(db.Integer, nullable=True)
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "First name": self.first_name,
            "Surnames": self.surnames,
            "User name": self.user_name,
            "Localidad": self.localidad_id,
            "birth_day": self.birth_day,
            "age": math.floor((datetime.datetime.utcnow() - self.birth_day).days / 365),
            
            # do not serialize the password, its a security breach
        }


class Localidad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    localidad = db.Column(db.String(120), unique=True, nullable=False)
    provincia = db.Column(db.String(80), unique=False, nullable=False)
    locales_id = db.Column(db.Integer, db.ForeignKey('locales.id'))
    def __repr__(self):
        return f'<User {self.localidad}>'

    def serialize(self):
        return {
            "id": self.id,
            "localidad": self.localidad,
            "Provincia" : self.provincia
            # do not serialize the password, its a security breach
        }

class Locales(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    locales = db.Column(db.String(120), unique=False, nullable=False)
    offers_jamsession = db.Column(db.Boolean(), unique=False, nullable=False)
    def __repr__(self):
        return f'<User {self.locales}>'

    def serialize(self):
        return {
            "id": self.id,
            "locales": self.locales,
            "Jamsession" : self.jamsession
            # do not serialize the password, its a security breach
        }

class Conciertos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bandas_id = db.Column(db.Integer, db.ForeignKey('bandas.id'))
    def __repr__(self):
        return f'<User {self.fecha_hora}>'

    def serialize(self):
        return {
            "id": self.id,
            "Fecha y hora": self.fecha_hora,
            "Banda que toca" : self.bandas_id
            # do not serialize the password, its a security breach
        }


class Bandas(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    banda_nombre = db.Column(db.String(120))
    def __repr__(self):
        return f'<User {self.banda_nombre}>'

    def serialize(self):
        return {
            "id": self.id,
            "Nombre Banda": self.banda_nombre,
            # do not serialize the password, its a security breach
        }

class BandasUsers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bandas_id = db.Column(db.Integer, db.ForeignKey('bandas.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    def __repr__(self):
        return f'<User {self.bandas_id, self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "Bandas id": self.bandas_id,
            "User id": self.user_id
            # do not serialize the password, its a security breach
        }

class InstrumentsUsers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    instrument_id = db.Column(db.Integer, db.ForeignKey('instruments.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    def __repr__(self):
        return f'<User {self.instrument_id, self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "Instrument id": self.instrument_id,
            "User id": self.user_id
            # do not serialize the password, its a security breach
        }

class Instruments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(120), unique=True)
    instrument = db.Column(db.String(120), unique=True)

    def __repr__(self):
        return f'<User {self.instrument}>'

    def serialize(self):
        return {
            "id": self.id,
            "Instrument": self.instrument,
            "Categoria": self.category
            # do not serialize the password, its a security breach
        }