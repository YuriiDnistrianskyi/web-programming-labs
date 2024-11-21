from database import db

class Stadium(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    audience = db.Column(db.Integer)
    lighting_power = db.Column(db.Integer)
    srcImg = db.Column(db.String(300))
    price = db.Column(db.Integer)

    def _print(self):
        return {
            "id": self.id,
            "name": self.name,
            "audience": self.audience,
            "lighting_power": self.lighting_power,
            "srcImg": self.srcImg,
            "price": self.price
        }
