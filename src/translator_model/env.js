

const ENV_ALL_MODEL_ENDPOINT = (model) => (`https://swapi.py4e.com/api/${model}/`);
const ENV_GET_MODEL_ENDPOINT = (model, id) => (`https://swapi.py4e.com/api/${model}/${id}/?format=json`);

exports.ENV_ALL_MODEL_ENDPOINT = ENV_ALL_MODEL_ENDPOINT;
exports.ENV_GET_MODEL_ENDPOINT = ENV_GET_MODEL_ENDPOINT;