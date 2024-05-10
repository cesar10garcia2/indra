
const connection = require('../../db/connection')
const queryString = require('querystring')
const { responseJsonExito, responseJsonError } = require("../response.js");

module.exports.findAllPeople = async (event, context) => {
    if (context) {
        context.callbackWaitsForEmptyEventLoop = false;
    }
    
    try {
        const sql = 'SELECT * FROM t_people';
        const rows = await new Promise((resolve, reject) => {
            connection.query(sql, (error, rows) => {
                if (error) reject(error);
                else resolve(rows);
            });
        });
        return responseJsonExito(200,"Listado de Personas en DB", rows);
    } catch (error) {
        return responseJsonError(500,"Error ", error.message);
    }
};

module.exports.createPeople = async (event, context, callback) => {
    if (context) {
        context.callbackWaitsForEmptyEventLoop = false;
    }
    const body = queryString.parse(event['body']);
    const data = {
        birth_year: body.birth_year,
        eye_color: body.eye_color,
        films: body.films,
        gender: body.gender,
        hair_color: body.hair_color,
        height: body.height,
        homeworld: body.homeworld,
        name: body.name,
        skin_color: body.skin_color,
        species: body.species,
        starships: body.starships,
        url: body.url,
        vehicles: body.vehicles,
    }
    const sql = 'INSERT INTO t_people SET ?';

    try {
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, [data] , (error, rows) => {
                if (error) reject(error);
                else resolve(rows);
            });
        });
    
        if (result.insertId) {
            return responseJsonExito(200,"Personas registrada en DB", {});
        }else {
            return responseJsonError(500, 'Error', 'No se registro en DB');
        }
    } catch (error) {
        return responseJsonError(500,"Error", error.message);
    }

    

};