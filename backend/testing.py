import unittest
from flask import json
import flask_unittest
from recipe import app

class TestStringMethods(unittest.TestCase):
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/recipes')
        self.assertEqual(response.status_code,200)
    
    # Testing if get returns the right page
    def test_find_recipe(self):
        tester = app.test_client(self)
        response = tester.get('/recipes/Roasted_Asparagus')
        self.assertEqual(response.status_code, 200)

    # Testing proper error code
    def test_no_Recipe(self):
        tester = app.test_client(self)
        response = tester.get('/recipes/nonexistentrecipe1213123123123')
        self.assertEqual(response.status_code, 404)
    
    # Testing update recipe
    def test_update(self):
        tester = app.test_client(self)
        response = tester.post('/update', json={
            "name": "Roasted Asparagus",
            "time": "40 minutes",
            "ingredients": [
                {
                    "quantity": "1 lb",
                    "name": " asparagus"
                },
                {
                    "quantity": "1 1/2 tbsp",
                    "name": "olive oil"
                },
                {
                    "quantity": "1/2 tsp",
                    "name": "kosher salt"
                }
            ],
            "steps": [
                "Preheat oven to 4258F.",
                "Cut off the woody bottom part of the asparagus spears and discard.",
                "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.\",string.\", and if you eat asparagus you know what I mean by that).",
                "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
                "Sprinkle with salt.",
                "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
                "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
                "They should be tender when pierced with the tip of a knife.",
                "The tips of the spears will get very brown but watch them to prevent burning.",
                "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal."
            ],
            "imageURL": "http://img.sndimg.com/food/image/upload/w_266/v1/img/recipes/50/84/7/picMcSyVd.jpg",
            "originalURL": "http://www.food.com/recipe/roasted-asparagus-50847",
            "response":true
        })
        self.assertEqual(response.status_code, 201)

    # Testing update recipe error
    def test_update(self):
        tester = app.test_client(self)
        response = tester.post('/update', json=None)
        self.assertEqual(response.status_code, 400)
    
    

if __name__ == '__main__':
    unittest.main()

