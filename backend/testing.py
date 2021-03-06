

import unittest
from flask import json
import flask_unittest
from recipe import app

class TestStringMethods(unittest.TestCase):
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get('/recipes')
        self.assertEqual(response.status_code,200)
    
    

if __name__ == '__main__':
    unittest.main()

