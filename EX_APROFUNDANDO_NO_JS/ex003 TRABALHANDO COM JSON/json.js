// arquivo json dentro de uma template string 
let json = `{
    "pessoas": {
        "bruno": {
            "nomeCompleto": "bruno alves dos santos",
            "idade": 19,
            "altura": 1.75,
            "estadoCivil": "solteiro",
            "temCarro": false,
            "sexo": "masculino",
            "açõesPreferidas":[
                "programar",
                "jogar",
                "comer",
                "ver filmes",
                "ver jogos de futbol"
            ]
        },
        "danyele": {
           "nomeCompleto":"Danyele vanilde dos santos",
           "idade": 4,
           "altura": 1.00,
           "estadoCivil":null,
           "temCarro":null,
           "sexo":"feminino",
           "açõesPreferidas":[
               "fazer nada",
               "assistir tv",
               "assistir no celular"
           ]
        }
    }
}`

console.log(JSON.parse(json))