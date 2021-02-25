
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
from model import User


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
