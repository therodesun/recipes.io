# recipes.io
CSC307 Project

reci.p is an app designed to store recipes that users have created. On the app users can add their own recipes to a database, and then search through the database to find recipes. Users can view all recipes in a table page, where an image, name, and the time to make the recipe are displayed. By clicking on these recipes, users are taken to recipe pages, where they can view the ingredients and instructions to create the dish. Users can also click on a button to add all the ingredients to a shopping cart, where they can view what they need to buy

Project CI Page: https://travis-ci.com/github/therodesun/recipes.io

**Diagrams**

UI Prototype: https://www.figma.com/file/KyD6pFxzOh6RtUUyBgult2/Reci.P?node-id=0%3A1 Last Updated: 2/3/21

UML Use Diagram: https://app.diagrams.net/#G1k5-pMzCaIBLEzz-6L6kYaYBWmw1fH75a Last Updated: 3/8/21

UML Class Diagram: https://app.diagrams.net/#G16uo9sK-sCjnR-Nszxf3Au21kKtAxGJUk Last Updated: 2/8/21

**Linters**

Pycodestyle - in command line, execute the following command: pip install pycodestyle

Prettier - open extensions tab in VS Code and search "Prettier," install the first result

**Development Environment Setup**

Front end: Install npm/node.js https://nodejs.org/en/download/

Back end: Install python's flask library https://flask.palletsprojects.com/en/1.1.x/installation/

Connecting the front and back: Install the javascript axios library by running the command 'npm install axios' in the front end folder. Additioanlly, install the flask-cors library in the back end folder by running the command 'pip install flask-cors'

Database: Install MongoDB. Windows: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ Mac: https://github.com/mongodb/homebrew-brew Linux: https://docs.mongodb.com/manual/administration/install-on-linux/

In order to connect the database with the backend, install pymongo in the python virtual environment of the backend by running 'pip install pymongo' in command line

**To run the project**

Front end: 

* cd /recipes.io/ui

* npm start

Back end:

* cd /recipes.io/backend

* export FLASK_APP=recipe.py

* flask run
