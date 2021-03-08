
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
        if recipes is not None and len(recipes) > 0:
            return jsonify({"recipes_list": recipes}), 200
        return jsonify({"error": "recipe not found"}), 404
    elif request.method == 'POST':
        recipeToAdd = request.get_json()
        newRecipe = Recipe(recipeToAdd)
        newRecipe.save()
        if "name" in recipeToAdd:
            resp = jsonify(newRecipe), 201
        else:
            resp = jsonify({"error": "something went wrong"}), 400
        return resp
    elif request.method == 'DELETE':
        Recipe().clearAll()
        return jsonify({"success":"entries cleared"}), 200

# implement search by recipe name 
@app.route('/recipes/<name>', methods=['GET', 'DELETE'])
def get_recipes_name(name):
    if request.method == 'GET':
        recipe = Recipe().find_name(name)
        if recipe is not None and len(recipe) != 1:
            global currentRecipe
            currentRecipe = recipe
            resp = jsonify({"success":"recipe loaded into cache"}), 200
            return resp
        else:
            return jsonify({"error":"recipe not found"}), 404
    if request.method == 'DELETE':
         Recipe().deleteby_name(name)
         resp = jsonify({"success":"recipe delete"}), 200
         return resp

@app.route('/recipe', methods=['GET'])
def get_current():
    global currentRecipe
    if currentRecipe is not None:
        return jsonify(currentRecipe), 200
    return jsonify({"error":"recipe not found"}), 404

@app.route('/myrecipes', methods=['GET', 'POST', 'DELETE'])
def get_myrecipes():
    if request.method == 'GET':
        recipes = MyRecipes().find_all()
        if recipes is not None and len(recipes) > 0:
            return jsonify({"recipes_list": recipes}), 200
        else:
            return jsonify({"error":"recipes not found"}), 404
    elif request.method == 'POST':
        recipeToAdd = request.get_json()
        if "name" not in recipeToAdd:
            resp = jsonify({"error": "something went wrong"}), 400
            return resp
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
        if ingredients is not None and len(ingredients) > 0:
            return jsonify({"ingredients": ingredients}), 200
        else:
            return jsonify({"error":"ingredients not found"}), 404
    elif request.method == 'POST':
        temp = request.get_json()
        if "ingredients" in temp:
            ingredientsToAdd = temp["ingredients"]
            for ingredient in ingredientsToAdd:
                newRecipe = Shopping(ingredient)
                newRecipe.save()
            return jsonify({"success":"ingredients added"}), 201
        return jsonify({"error": "something went wrong"}), 400
    elif request.method == 'DELETE':
        Shopping().clearAll()
        return jsonify({"success":"entries cleared"}), 200
        
@app.route('/update', methods=['POST'])
def update_recipe():
    recipe = request.get_json()
    if recipe is not None and "name" in recipe:
        newRecipe = Recipe().update(recipe)
        return jsonify({"success":"recipe updated"}), 201
    return jsonify({"error":"recipe not updated"}), 400
