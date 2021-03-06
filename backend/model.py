import pymongo
from bson import ObjectId

class Model(dict):
    """
    A simple model that wraps mongodb document
    """
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                { "_id": ObjectId(self._id) }, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result :
                self.update(result)
                self._id = str(self._id)
                return True
        return False

    def remove(self):
        if self._id:
            resp = self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()
            return resp


class Recipe(Model):
    db_client = pymongo.MongoClient('localhost', 27017)  #change if your db is in another host and port
    collection = db_client['users']["recipes"]
    
    def find_all(self):
        recipes = list(self.collection.find())
        for recipe in recipes:
            recipe["_id"] = str(recipe["_id"])
        return recipes
        
    def find_name(self, name):
        recipes = list(self.collection.find({"name":name}))
        for recipe in recipes: 
            recipe["_id"] = str(recipe["_id"])
            return recipe
        
    def clearAll(self):
        for recipe in list(self.collection.find()):
            resp = self.collection.remove({"_id": recipe["_id"]})
        return resp
        
    def update(self, recipe):
        return self.collection.update({'name' : recipe['name']}, { '$set': { 'name' : recipe['name'], 'ingredients' : recipe['ingredients'], 'steps' : recipe['steps'], 'time': recipe['time'], 'imageURL' : recipe['imageURL'] }})
        
    def deleteby_name(self, name):
        return self.collection.delete_one({'name' : name})

class Shopping(Model):
    db_client = pymongo.MongoClient('localhost', 27017)  #change if your db is in another host and port
    collection = db_client['users']["shopping"]
    
    def find_all(self):
        ingredients = list(self.collection.find())
        for ingredient in ingredients:
            ingredient["_id"] = str(ingredient["_id"])
        return ingredients
        
    def clearAll(self):
        for ingredient in list(self.collection.find()):
            resp = self.collection.remove({"_id": ingredient["_id"]})
        return resp

class MyRecipes(Model):
    db_client = pymongo.MongoClient('localhost', 27017)  #change if your db is in another host and port
    collection = db_client['users']["myrecipes"]
    
    def find_all(self):
        recipes = list(self.collection.find())
        for recipe in recipes:
            recipe["_id"] = str(recipe["_id"])
        return recipes

    def clearAll(self):
        for recipe in list(self.collection.find()):
            resp = self.collection.remove({"_id": recipe["_id"]})
        return resp
    
    def deleteby_name(self,name):
        recipes = list(self.collection.find({"name":name}))
        for recipe in recipes:
            recipe = self.collection.remove({"_id": recipe["_id"]})
        return recipe



