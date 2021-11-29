from flask import request, json, Response, jsonify
from models import *
from auxiliaries import *
from flask_cors import cross_origin

init_db(db)

def attemptLogin(data):
    print(data['user'],data['password'])
    x = User.query.filter_by(username = data['user'],password = data['password']).all()
    print(x==1)
    if len(x)==1:
        return True
    return False

@app.route("/api/test")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route("/api/validateToken", methods=['POST'])
def validate():
    data = request.get_json()
    print(data['token'])
    values=decodeToken(data['token'])
    valid= attemptLogin({"user":values[0],"password":values[1]})
    return str(valid)


@app.route('/api/createUser',methods = ['POST', 'GET'])
@cross_origin()
def register():
    if request.method == 'GET':
        return {'error':'Method Not avalabile'}
    elif request.method == 'POST':
        request_data = request.get_json()
        if checkValidUsersRequest(request_data):
            return Response(json.dumps({'error':'the json format is incorrect'}),status=400)
        try:
            user = User(username = request_data['user'],password = encodePassword(request_data['password']))
            db.session.add(user)
            db.session.commit() 
        except Exception as e :
            d=json.dumps({"error":str(e)})
            print(d)
            return Response(d, status=500)
        return Response(json.dumps({'successful':'item added successfully'}),status=200)
  
@app.route('/api/login',methods = ['POST'])
def login():
    data = request.get_json()
    if checkValidUsersRequest(data):
        return Response(json.dumps({'error':"the json format is incorrect"}),status=400)
    encryptedPass = encodePassword(data['password'])
    if not attemptLogin({"user":data['user'],"password":encryptedPass}):
        return Response(json.dumps({'unauthorised':'incorrect credentials'}),status=401)
    token = createToken(data)
    return Response(json.dumps({'token':str(token)}),status=200)


@app.route('/api/review',methods = ['POST'])
def addReview():
    if request.method == 'GET':
        return {'error':'Method Not avalabile'}
        
    data = request.get_json()
    if not ('text' in data and 'rating' in data and 'user_id' in data and 'to_movie' in data ):
        return Response(json.dumps({'error':'missing data'}),status=400) 
    try:
        review = Review(text=data['text'],rating=data['rating'],user_id=data['user_id'],to_movie=data['to_movie'])
        db.session.add(review)
        db.session.commit()
    except Exception as e :
        d=json.dumps({"error":str(e)})
        print(d)
        return Response(d, status=500)
    return Response(json.dumps({'sucessful':'review added successfully'}),status=200)

@app.route('/api/review/<movie_id>', methods = ['GET'])
def findReviews(movie_id):
    if request.method == 'POST':
        return {'error':'Method Not avalabile'}
    search = Review.query.filter_by(to_movie = movie_id).all()
    if not search:
        return Response(json.dumps({'error':'no reviews found for movie id'}),status=400)
    return jsonify(search)