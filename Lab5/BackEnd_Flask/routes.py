from flask import request, jsonify
from models import Stadium
from database import db
from flask_cors import cross_origin

def init_routes(app):

    @app.route('/stadium', methods=['GET'])
    def get_stadiums():
        stadiums = Stadium.query.all()
        json_stadiums = [stadium.to_string() for stadium in stadiums]
        return jsonify({"stadiums": json_stadiums})


    @app.route('/stadium', methods=['POST'])
    def post_stadium():
        data = request.get_json()
        new_stadium = Stadium(name=data['name'], audience=data['audience'], lighting_power=data['lighting_power'])
        db.session.add(new_stadium)
        db.session.commit()
        return {'message': 'Stadium added successfully.'}, 201


    @app.route('/stadium/<int:edit_id>', methods=['PUT'])
    def put_stadium(edit_id):
        data = request.get_json()
        stadium = Stadium.query.get(edit_id)

        if stadium:
            stadium.name = data['name']
            stadium.audience = data['audience']
            stadium.lighting_power = data['lighting_power']
            db.session.commit()
            return {'message': f"Stadium (id = {edit_id}) edited successfully."}, 201

        else:
            return {'message': f'Stadium id ({edit_id}) not found'}, 404


    @app.route('/stadium/<int:delete_id>', methods=["DELETE"])
    @cross_origin()
    def delete_stadium(delete_id):
        stadium = Stadium.query.filter_by(id=delete_id).first()

        if stadium:
            db.session.delete(stadium)
            db.session.commit()
            return {'messange': f'Stadium {delete_id} deleted successfully.'}, 201
        else:
            return {'messange': f'Stadium {delete_id} not found.'}, 404
