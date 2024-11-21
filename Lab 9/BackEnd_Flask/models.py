from database import db

class Stadium(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    audience = db.Column(db.Integer)
    lighting_power = db.Column(db.Integer)

    def to_string(self):
        return {
            "id": self.id,
            "name": self.name,
            "audience": self.audience,
            "lighting_power": self.lighting_power
        }
