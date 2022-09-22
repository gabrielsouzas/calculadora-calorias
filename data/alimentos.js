const alimentos = [
    /* FRUTAS */
    {
        "nome": "Abacate",
        "porcao":"1 abacate (200 g)",
        "calorias":320
    },
    {
        "nome":"Abacaxi",
        "porcao":"1 abacaxi (905 g)",
        "calorias":453
    }/*,
    "Acerola":{
        "porcao":"1 acerola (5 g)",
        "calorias":2
    },
    "Ameixa":{
            "porcao":"1 ameixa (66 g)",
            "calorias":30
    },
    "Ameixa-caranguejeira / Ameixa verde":{
            "porcao":"1 pedaço (5 g)",
            "calorias":2
    },
    "Amora branca":{
            "porcao":"1 xícara (140 g)",
            "calorias":60
    },
    "Amoras":{
            "porcao":"1 xícara (144 g)",
            "calorias":62
    },
    "Azeitona":{
            "porcao":"1 azeitona (2.7 g)",
            "calorias":2
    },
    "Açaí":{
            "porcao":"1 xícara (148 g)",
            "calorias":104
    },
    "Banana":{
            "porcao":"1 banana (125 g)",
            "calorias":111
    },
    "Banana-da-terra":{
            "porcao":"1 banana-da-terra (179 g)",
            "calorias":218
    },
    "Caju":{
            "porcao":"1 porção (10 g)",
            "calorias":55
    },
    "Cajá":{
            "porcao":"1 cajá (50 g)",
            "calorias":23
    },
    "Caqui":{
            "porcao":"1 caqui (25 g)",
            "calorias":32
    },
    "Carambola":{
            "porcao":"1 carambola (91 g)",
            "calorias":28
    },
    "Cerejas":{
            "porcao":"1 cereja (8 g)",
            "calorias":4
    },
    "Coco":{
            "porcao":"1 porção (75 g)",
            "calorias":269
    },
    "Cranberries / Oxicoco":{
            "porcao":"1 xícara (100 g)",
            "calorias":46
    },
    "Damasco":{
            "porcao":"1 damasco (35 g)",
            "calorias":17
    },
    "Figo":{
            "porcao":"1 figo (50 g)",
            "calorias":37
    },
    "Framboesa":{
            "porcao":"1 xícara (123 g)",
            "calorias":64
    },
    "Fruta do conde":{
            "porcao":"1 fruta do conde (182 g)",
            "calorias":184
    },
    "Goiaba":{
            "porcao":"1 goiaba (55 g)",
            "calorias":37
    },
    "Graviola":{
            "porcao":"1 porção (120 g)",
            "calorias":432
    },
    "Groselha":{
            "porcao":"1 xícara (112 g)",
            "calorias":63
    },
    "Jabuticaba":{
            "porcao":"1 jabuticaba (78 g)",
            "calorias":45
    },
    "Jaca":{
            "porcao":"1 xícara (151 g)",
            "calorias":143
    },
    "Kiwi":{
            "porcao":"1 kiwi (183 g)",
            "calorias":112
    },
    "Laranja":{
            "porcao":"1 laranja (131 g)",
            "calorias":62
    },
    "Laranja sanguínea / Laranja vermelha":{
            "porcao":"1 porção (140 g)",
            "calorias":70
    },
    "Lichia":{
            "porcao":"1 lechia (10 g)",
            "calorias":7
    },
    "Lima":{
            "porcao":"1 lima (67 g)",
            "calorias":20
    },
    "Limão":{
            "porcao":"1 limão (58 g)",
            "calorias":17
    },
    "Mamão":{
            "porcao":"1 mamão (500 g)",
            "calorias":215
    },
    "Manga":{
            "porcao":"1 manga (336 g)",
            "calorias":202
    },
    "Maracujá":{
            "porcao":"1 maracujá (18 g)",
            "calorias":17
    },
    "Marmelo":{
            "porcao":"1 marmelo (92 g)",
            "calorias":52
    },
    "Maçã":{
            "porcao":"1 maçã (182 g)",
            "calorias":95
    },
    "Melancia":{
            "porcao":"1 pedaço (286 g)",
            "calorias":86
    },
    "Melão cantaloupe":{
            "porcao":"1 pedaço (69 g)",
            "calorias":23
    },
    "Mirtilos":{
            "porcao":"1 xícara (148 g)",
            "calorias":84
    },
    "Morangos":{
            "porcao":"1 xícara (152 g)",
            "calorias":49
    },
    "Nectarina":{
            "porcao":"1 nectarina (150 g)",
            "calorias":66
    },
    "Passa de uva / Uva-passa":{
            "porcao":"1 xícara (145 g)",
            "calorias":434
    },
    "Pera":{
            "porcao":"1 pera (178 g)",
            "calorias":101
    },
    "Physalis / Fisalis":{
            "porcao":"1 physalis (5 g)",
            "calorias":2
    },
    "Pitanga":{
            "porcao":"1 pitanga (17 g)",
            "calorias":7
    },
    "Purê de maçã":{
            "porcao":"1 xícara (246 g)",
            "calorias":167
    },
    "Pêssego":{
            "porcao":"1 pêssego (150 g)",
            "calorias":59
    },
    "Rambutão":{
            "porcao":"1 rambutão (9 g)",
            "calorias":7
    },
    "Romã":{
            "porcao":"1 romã (282 g)",
            "calorias":234
    },
    "Ruibarbo":{
            "porcao":"1 pedaço (51 g)",
            "calorias":11
    },
    "Salada de frutas":{
            "porcao":"1 xícara (249 g)",
            "calorias":125
    },
    "Tamarindo":{
            "porcao":"1 tamarindo (2 g)",
            "calorias":5
    },
    "Tangerina":{
            "porcao":"1 tangerina (88 g)",
            "calorias":47
    },
    "Tangerina murcote":{
            "porcao":"1 tangerina (74 g)",
            "calorias":35
    },
    "Tâmara":{
            "porcao":"1 tâmara (7.1 g)",
            "calorias":20
    },
    "Uva":{
            "porcao":"1 xícara (151 g)",
            "calorias":104
    }*/
]