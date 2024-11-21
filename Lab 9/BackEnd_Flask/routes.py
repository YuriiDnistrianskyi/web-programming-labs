from flask import request, jsonify
from models import Stadium
from database import db
from flask_cors import cross_origin

def init_routes(app):

    @app.route('/stadium', methods=['GET'])
    def get_stadiums():
        filter_price = request.args.get('price')
        filter_audience = request.args.get('audience')
        filter_lighting_power = request.args.get('lightingPower')

        stadiums = Stadium.query.all()

        if filter_audience:
            stadiums = [stadium for stadium in stadiums if stadium.audience >= int(filter_audience)]
        
        if filter_lighting_power:
            stadiums = [stadium for stadium in stadiums if stadium.lighting_power >= int(filter_lighting_power)]

        if filter_price:
            stadiums = [stadium for stadium in stadiums if stadium.price >= int(filter_price)]

        json_stadiums = [stadium._print() for stadium in stadiums]
        return jsonify(json_stadiums)


    @app.route('/stadium', methods=['POST'])
    def post_stadium():
        data = request.get_json()
        new_stadium = Stadium(name=data['name'], audience=data['audience'], lighting_power=data['lighting_power'], srcImg=data['srcImg'], price=data['price'])
        db.session.add(new_stadium)
        db.session.commit()
        return {'message': 'Stadium added successfully.'}, 201
    
    
    @app.route('/stadium/<int:del_id>', methods=['DELETE'])
    def delete_stadium(del_id):
        delete_obj = Stadium.query.filter_by(id=del_id).first()

        if delete_obj:
            db.session.delete(delete_obj)
            db.session.commit()
            return jsonify({"messange": "delete"})
        return jsonify({"messange": "not"})
    

