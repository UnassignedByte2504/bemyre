from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    surnames = db.Column(db.String(80), unique=False, nullable=False)
    user_name= db.Column(db.String(80), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    localidad_id= db.Column(db.String(120), db.ForeignKey(localidad.id))
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "First name": self.first_name,
            "Surnames": self.surnames,
            "User name": self.user_name,
            "Localidad": self.localidad_id
            # do not serialize the password, its a security breach
        }


class Localidad(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    localidad = db.Column(db.String(120), unique=True, nullable=False)
    provincia = db.Column(db.String(80), unique=False, nullable=False)
    locales_id = db.Column(db.String(80), ForeignKey(locales.id))
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
    jamsession = db.Column(db.Boolean(), unique=False, nullable=False)
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
    fecha_hora = db.Column(db.String(120))
    bandas_id = db.Column(db.String(120), ForeignKey(bandas.id))
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

class Bandas_Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bandas_id = db.Column(db.String(120), ForeignKey(bandas.id))
    user_id = db.Column(db.String(120), ForeignKey(user.id))
    def __repr__(self):
        return f'<User {self.bandas_id, self.user_id}>'

    def serialize(self):
        return {
            "id": self.id,
            "Bandas id": self.bandas_id,
            "User id": self.user_id
            # do not serialize the password, its a security breach
        }

class Instruments_Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    instrument_id = db.Column(db.String(120), ForeignKey(instrument.id))
    user_id = db.Column(db.String(120), ForeignKey(user.id))
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