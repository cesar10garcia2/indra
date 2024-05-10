

class FilmFunction {
    constructor() {
        this.name_keys = {
            "title": "titulo",
            "episode_id": "identificador_episodio",
            "opening_crawl": "texto_apertura",
            "director": "director",
            "producer": "productor",
            "release_date": "fecha_estreno",
            "species": "especies",
            "starships": "naves_estelares",
            "vehicles": "vehiculos",
            "characters": "caracteres",
            "planets": "planetas",
            "url": "enlace",
            "created": "fecha_creacion",
            "edited": "fecha_edicion"
        };
    }
    
    async translator(film) {
        let value_ini = {};
        return await Object.keys(film).reduce(
            function (obj, field) {
                const parse_field = this.name_keys[field]; 
                obj[parse_field] = film[field];
                return obj;
            }.bind(this), value_ini 
        );
    }
}
module.exports = FilmFunction;