

const MainFactory = require('../src/translator_model/factory/MainFactory');

describe('Test Translation to model FILMS', ()=>{
    test('Translate model', async () => {
        let en = {
            title: 'Film title',
            director: 'Film director'
        };
        let es = {
            titulo: 'Film title',
            director: 'Film director'
        };
        var func = MainFactory.create_factory("films");
        var data_es = await func.translator(en);

        expect(
            JSON.stringify(es)
        ).toBe(
            JSON.stringify(data_es)
        );
    });

})

describe('Test Translation to model PEOPLES', ()=>{
    test('Translate model', async () => {
        let en = {
            name: "Cesar Garcia Infante",
            birth_year: "10/03/1996",
            eye_color: "negros",
        };
        let es = {
            nombre: 'Cesar Garcia Infante',
            fecha_nacimiento: '10/03/1996',
            color_ojos: 'negros'
        };
        func = MainFactory.create_factory("people");
        var data_es = await func.translator(en);

        expect(
            JSON.stringify(es)
        ).toBe(
            JSON.stringify(data_es)
        );
    });

})


const { createPeople, findAllPeople } = require('../src/people/handler'); // Importa tu aplicación Serverless
var qs = require('querystring');

describe('Test Registro de persona en la base de datos', () => {
    it('Registro Persona', async () => {
        // Datos de ejemplo para el registro
        const data = {
            name: 'cesar garcia TEST',
            birth_year: '26',
            eye_color: 'red',
            gender: 'Male',
            hair_color: 'red',
            height: '170',
            homeworld: 'https://swapi.py4e.com/api/planets/2/',
            skin_color: 'red',
            url: 'https://swapi.py4e.com/api/people/2/'
        };

        // Llama a la función Lambda para registrar la persona en la base de datos
        const response = await createPeople({ body: qs.stringify(data) });

        // Verifica si la respuesta es exitosa (código de estado 200)
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('true');

    });
});

describe('Test Listado de persona en la base de datos', () => {
    it('Listado Persona', async () => {
        // Datos de ejemplo para el registro

        // Llama a la función Lambda para registrar la persona en la base de datos
        const response = await findAllPeople();

        // Verifica si la respuesta es exitosa (código de estado 200)
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('true');

    });
});