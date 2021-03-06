
from flask import Flask
from flask import request
from flask import jsonify
import json
# for linking frontend-backend
from flask_cors import CORS

# for random ids 
# import random 
# import string

# for mongo db
<<<<<<< HEAD
from model import User
=======
from model import Recipe
>>>>>>> 06d99dabf187803dac4cb00845305fdf894ed74d


app = Flask(__name__)
#CORS stands for Cross Origin Requests.
#Here we'll allow requests coming from any domain. Not recommended for production environment.
CORS(app) 
#print
@app.route('/')
def get():
    return 'HI'
# create list 
recipe = {
    'recipes_list':[]
}

<<<<<<< HEAD
@app.route('/recipes', methods=['GET', 'POST'])
def get_recipes():
   if request.method == 'GET':
      recipes = User().find_all()
      return {"recipes_list": recipes}
   elif request.method == 'POST':
      recipeToAdd = request.get_json()
      # make DB request to add user
      newRecipe = User(recipeToAdd)
      newRecipe.save()
      resp = jsonify(newRecipe), 201
      return resp
=======
currentRecipe = None

@app.route('/recipes', methods=['GET', 'POST', 'DELETE'])
def get_recipes():
    if request.method == 'GET':
        recipes = Recipe().find_all()
        return {"recipes_list": recipes}
    elif request.method == 'POST':
        recipeToAdd = request.get_json()
        # make DB request to add user
        newRecipe = Recipe(recipeToAdd)
        newRecipe.save()
        resp = jsonify(newRecipe), 201
        return resp
    elif request.method == 'DELETE':
        Recipe().clearAll()
        return jsonify({"success":"entries cleared"}), 200

# implement search by recipe name 
@app.route('/recipes/<name>', methods=['GET'])
def get_recipes_name(name):
    if request.method =='GET':
        recipe = Recipe().find_name(name)
        global currentRecipe
        currentRecipe = recipe
        resp = jsonify({"success":"recipe loaded into cache"}), 200
        return resp
    return jsonify({"error":"recipe not found"}), 404

@app.route('/recipe', methods=['GET'])
def get_current():
    global currentRecipe
    if currentRecipe is not None:
        return currentRecipe
    return jsonify({"error":"recipe not found"}), 404
>>>>>>> 06d99dabf187803dac4cb00845305fdf894ed74d
