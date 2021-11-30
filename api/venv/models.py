from flask import Flask
import flask
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
from flask_cors import CORS

import os
# temp_db = 


#this flask instance is made only to add create the database
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sqlite3.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =  False
app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app)

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=False, nullable=False)
    reviews = db.relationship('Review',backref='person')

@dataclass
class Review(db.Model):
    id:int
    text:str
    rating:int
    user_name:str
    to_movie:int

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(200), unique=False, nullable=False)
    rating = db.Column(db.Integer, unique=False, nullable=False)
    user_name = db.Column(db.String(80), db.ForeignKey('user.username'))
    to_movie = db.Column(db.Integer,nullable=False)


#db.ForeignKey(user.id)
