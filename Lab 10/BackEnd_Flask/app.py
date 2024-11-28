from flask import Flask
from routes import init_routes
from database import db, migrate
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#CORS(app, resources={r"/stadium/*": {"origins": "http://127.0.0.1:3000"}})

app.config.from_object('config.Config')

db.init_app(app)
migrate.init_app(app, db)

from models import Stadium

init_routes(app)

if __name__ == "__main__":
    with app.app_context():
        db.create_all() 
    app.run(debug=True)
