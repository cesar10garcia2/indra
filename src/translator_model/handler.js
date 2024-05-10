'use strict';

const axios = require('axios');
const { ENV_ALL_MODEL_ENDPOINT, ENV_GET_MODEL_ENDPOINT } = require('./env.js');
const { responseJsonExito, responseJsonError } = require("../response.js");

const MainFactory = require('./factory/MainFactory.js');


module.exports.getAllModel = async (event) => {

    console.log("entro")
    const { model } = event.pathParameters;
    const API =  ENV_ALL_MODEL_ENDPOINT(model);
    const params = {
        "params": { "format": "json" }
    }
    try {
        let data;
        const response = await axios.get(API, params);
        var func = MainFactory.create_factory(model);

        const translations = await Promise.all(response.data.results.map(item => func.translator(item)));
        response.data.results = translations;
        data = response.data;

        return responseJsonExito(200,"Listado de "+model, data);


    } catch (error) {
        return responseJsonError(200,"Error "+model, error.message);
    }
};

module.exports.getDetailModel = async (event) => {

    console.log("entro")
    const { model, id } = event.pathParameters;
    const API =  ENV_GET_MODEL_ENDPOINT(model, id);
    const params = {
        "params": { "format": "json" }
    }
    try {
        let data;
        const response = await axios.get(API, params);

        var func = MainFactory.create_factory(model);
        var data_es = await func.translator(response.data);

        return responseJsonExito(200,"Detalle "+model, data_es);

    } catch (error) {
        return responseJsonError(200,"Error "+model, error.message);
    }
};