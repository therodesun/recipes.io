
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
from model import Recipe
from model import Shopping
from model import MyRecipes


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


shopping = {
    'ingredients':[]
}

myrecipes = {
    'recipes':[]
}

currentRecipe = None

@app.route('/recipes', methods=['GET', 'POST', 'DELETE'])
def get_recipes():
    if request.method == 'GET':
        recipes = Recipe().find_all()
        return {"recipes_list": recipes}
    elif request.method == 'POST':
        recipeToAdd = request.get_json()
        newRecipe = Recipe(recipeToAdd)
        newRecipe.save()
        resp = jsonify(newRecipe), 201
        return resp
    elif request.method == 'DELETE':
        Recipe().clearAll()
        return jsonify({"success":"entries cleared"}), 200

# implement search by recipe name and delete
@app.route('/recipes/<name>', methods=['GET','DELETE'])
def get_recipes_name(name):
    if request.method =='GET':
        recipe = Recipe().find_name(name)
        global currentRecipe
        currentRecipe = recipe
        resp = jsonify({"success":"recipe loaded into cache"}), 200
        return resp
    if request.method == 'DELETE': 
         Recipe().deleteby_name(name)
         resp = jsonify({"success":"recipe delete"}), 200
         return resp
    return jsonify({"error":"recipe not found"}), 404

    
@app.route('/update', methods=['POST'])
def update_recipe():
    recipe = request.get_json()
    newRecipe = Recipe().update(recipe)
    if newRecipe is not None:
        resp = jsonify({"success":"recipe updated"}), 201
    else:
        resp = jsonify({"error":"recipe not updated"}), 400
    return resp

@app.route('/recipe', methods=['GET'])
def get_current():
    global currentRecipe
    if currentRecipe is not None:
        return currentRecipe
    return jsonify({"error":"recipe not found"}), 404
    
@app.route('/myrecipes', methods=['GET', 'POST', 'DELETE'])
def get_myrecipes():
    if request.method == 'GET':
        recipes = MyRecipes().find_all()
        return {"recipes_list": recipes}
    elif request.method == 'POST':
        recipeToAdd = request.get_json()
        newRecipe = MyRecipes(recipeToAdd)
        newRecipe.save()
        resp = jsonify(newRecipe), 201
        return resp
    elif request.method == 'DELETE':
        MyRecipes().clearAll()
        return jsonify({"success":"entries cleared"}), 200

@app.route('/shopping', methods=['GET', 'POST', 'DELETE'])
def get_ingredients():
    if request.method == 'GET':
        ingredients = Shopping().find_all()
        return {"ingredients": ingredients}
    elif request.method == 'POST':
        ingredientsToAdd = request.get_json()
        for ingredient in ingredientsToAdd:
            newRecipe = Shopping(ingredient)
            newRecipe.save()
        return jsonify({"success":"true"}), 201
    elif request.method == 'DELETE':
        Shopping().clearAll()
        return jsonify({"success":"entries cleared"}), 200
