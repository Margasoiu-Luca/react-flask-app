import os
import hashlib
import base64
def encodePassword(password):
    encoded_str = password.encode()
    sha_3_encoded = hashlib.sha3_256(encoded_str)
    return sha_3_encoded.hexdigest()

def init_db(db):
    db.create_all()
    if not os.path.isfile('./sqlite3.db'):
        print("hello")
        db.create_all()
        print("Database did not exist, created")

# sendToken

def checkValidUsersRequest(data):
    print('user' in data and 'password' in data)
    if not ('user' in data and 'password' in data):
        return {'error':"the json format is incorrect"}
    
def createToken(data):
    toBeEncoded = str(data['user']+encodePassword(data['password'])).encode("utf-8")
    encoded = base64.b64encode(toBeEncoded)
    print(encoded)
    return encoded
# def decodeToken(token):
#     decoded