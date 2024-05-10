

class PeopleFunction {
    constructor() {
        this.name_keys = {
            "name": "nombre",
            "birth_year": "fecha_nacimiento",
            "eye_color": "color_ojos",
            "gender": "sexo",
            "hair_color": "color_cabello",
            "height": "altura",
            "mass": "peso",
            "skin_color": "color_piel",
            "homeworld": "mundo_natal",
            "films": "peliculas",
            "species": "especies",
            "starships": "naves_estelares",
            "vehicles": "vehiculos",
            "url": "enlace",
            "created": "fecha_creacion",
            "edited": "fecha_edicion"
        };
    }
    
    async translator(model) {
        let value_ini = {};
        return await Object.keys(model).reduce(
            function (obj, field) {
                const parse_field = this.name_keys[field]; 
                obj[parse_field] = model[field];
                return obj;
            }.bind(this), value_ini 
        );
    }
}

module.exports = PeopleFunction;
