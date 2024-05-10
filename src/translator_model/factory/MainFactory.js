const FilmFactory = require('./FilmFactory');
const PeopleFactory = require('./PeopleFactory');

class MainFactory {
    static create_factory(type_model) {
        switch (type_model) {
            case 'films':
                return new FilmFactory();
            case 'people':
                return new PeopleFactory();
            default:
                throw new Error("Traducción de modelo soportado en esta versión");
        }
    }
}

module.exports = MainFactory;
