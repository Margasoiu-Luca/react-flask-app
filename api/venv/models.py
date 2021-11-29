from flask import Flask
import flask
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass

import os
# temp_db = 


#this flask instance is made only to add create the database
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sqlite3.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =  False

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
    user_id:int
    to_movie:int

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(80), unique=False, nullable=False)
    rating = db.Column(db.Integer, unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    to_movie = db.Column(db.Integer,nullable=False)


#db.ForeignKey(user.id)
