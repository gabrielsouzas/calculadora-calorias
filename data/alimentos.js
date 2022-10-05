const alimentos = [
    {
        "nome": "Abacate",
        "porcao": "1/2 pequeno (100 g)",
        "calorias": "180"
    },
    {
        "nome": "Abacaxi",
        "porcao": "1 fatia grande (100 g)",
        "calorias": "49"
    },
    {
        "nome": "Acerola",
        "porcao": "1 pequena (10 g)",
        "calorias": "2"
    },///*
    {
        "nome": "Ameixa fresca",
        "porcao": "1 grande (50 g)",
        "calorias": "27"
    },
    {
        "nome": "Ameixa seca",
        "porcao": "1 média (5 g)",
        "calorias": "11"
    },
    {
        "nome": "Amora",
        "porcao": "1 xícara",
        "calorias": "50"
    },
    {
        "nome": "Banana-maçã",
        "porcao": "1 média (65 g)",
        "calorias": "72"
    },
    {
        "nome": "Banana-nanica",
        "porcao": "1 média (70 g)",
        "calorias": "67"
    },
    {
        "nome": "Banana-ouro",
        "porcao": "1 pequena (30 g)",
        "calorias": "31"
    },
    {
        "nome": "Banana-prata ",
        "porcao": "1 média (55 g)",
        "calorias": "54"
    },
    {
        "nome": "Cajá-manga",
        "porcao": "1 médio (48 g)",
        "calorias": "22"
    },
    {
        "nome": "Caju",
        "porcao": "1 médio (50 g)",
        "calorias": "23"
    },
    {
        "nome": "Caqui",
        "porcao": "1 médio (52 g)",
        "calorias": "36"
    },
    {
        "nome": "Carambola",
        "porcao": "1 média (105 g) ",
        "calorias": "31"
    },
    {
        "nome": "Cereja",
        "porcao": "1 média (10 g)",
        "calorias": "7"
    },
    {
        "nome": "Damasco seco",
        "porcao": "1 médio (12 g)",
        "calorias": "26"
    },
    {
        "nome": "Figo",
        "porcao": "1 médio (70 g)",
        "calorias": "46"
    },
    {
        "nome": "Framboesa",
        "porcao": "1 xícara (100 g)",
        "calorias": "57"
    },
    {
        "nome": "Goiaba",
        "porcao": "1 média (95 g)",
        "calorias": "48"
    },
    {
        "nome": "Jabuticaba",
        "porcao": "4 unidades (20 g)",
        "calorias": "10"
    },
    {
        "nome": "Jaca",
        "porcao": "1 bago (12 g)",
        "calorias": "9"
    },
    {
        "nome": "Kiwi",
        "porcao": "1 médio (90 g)",
        "calorias": "45"
    },
    {
        "nome": "Laranja",
        "porcao": "1 média (130 g)",
        "calorias": "60"
    },
    {
        "nome": "Lichia",
        "porcao": "4 unidades (100 g)",
        "calorias": "65"
    },
    {
        "nome": "Lima-da-pérsia",
        "porcao": "1 média (95 g)",
        "calorias": "51"
    },
    {
        "nome": "Limão",
        "porcao": "1 médio (30 g)",
        "calorias": "9"
    },
    {
        "nome": "Maçã",
        "porcao": "1 média (140 g)",
        "calorias": "81"
    },
    {
        "nome": "Maçã verde",
        "porcao": "1 média (140 g)",
        "calorias": "54"
    },
    {
        "nome": "Mamão",
        "porcao": "1 fatia média (100 g)",
        "calorias": "36"
    },
    {
        "nome": "Mamão papaia",
        "porcao": "1/2 unidade (155 g)",
        "calorias": "56"
    },
    {
        "nome": "Manga",
        "porcao": "1/2 unidade (125 g)",
        "calorias": "82"
    },
    {
        "nome": "Maracujá",
        "porcao": "1 grande (90 g)",
        "calorias": "40"
    },
    {
        "nome": "Melancia",
        "porcao": "1 fatia média (200 g)",
        "calorias": "50"
    },
    {
        "nome": "Melão",
        "porcao": "1 fatia média (70 g)",
        "calorias": "19"
    },
    {
        "nome": "Morango",
        "porcao": "5 médios (50 g)",
        "calorias": "20"
    },
    {
        "nome": "Nectarina",
        "porcao": "1 grande (120 g)",
        "calorias": "76"
    },
    {
        "nome": "Passas",
        "porcao": "1 colher (sopa) (11 g)",
        "calorias": "30"
    },
    {
        "nome": "Pêra",
        "porcao": "1 média (110 g)",
        "calorias": "68"
    },
    {
        "nome": "Pêssego",
        "porcao": "1 pequeno (60 g)",
        "calorias": "29"
    },
    {
        "nome": "Salada de frutas",
        "porcao": "1/2 xícara",
        "calorias": "138"
    },
    {
        "nome": "Tangerina",
        "porcao": "1 média (100 g)",
        "calorias": "45"
    },
    {
        "nome": "Uva",
        "porcao": "1 média (5 g)",
        "calorias": "8"
    },
    {
        "nome": "Abóbora",
        "porcao": "1 xícara",
        "calorias": "49"
    },
    {
        "nome": "Abobrinha",
        "porcao": "1 xícara",
        "calorias": "24"
    },
    {
        "nome": "Acelga ",
        "porcao": "1 xícara",
        "calorias": "13"
    },
    {
        "nome": "Agrião",
        "porcao": "1 xícara",
        "calorias": "6"
    },
    {
        "nome": "Aipo (salsão)",
        "porcao": "1 xícara",
        "calorias": "20"
    },
    {
        "nome": "Alcachofra",
        "porcao": "1 unidade (80 g)",
        "calorias": "61"
    },
    {
        "nome": "Alface",
        "porcao": "1 folha",
        "calorias": "6"
    },
    {
        "nome": "Almeirão",
        "porcao": "1 xícara",
        "calorias": "8"
    },
    {
        "nome": "Berinjela",
        "porcao": "1 xícara",
        "calorias": "28"
    },
    {
        "nome": "Bertalha",
        "porcao": "1 xícara",
        "calorias": "6"
    },
    {
        "nome": "Beterraba",
        "porcao": "1 xícara",
        "calorias": "40"
    },
    {
        "nome": "Brócolis",
        "porcao": "1 xícara",
        "calorias": "18"
    },
    {
        "nome": "Broto de feijão",
        "porcao": "1 xícara",
        "calorias": "43"
    },
    {
        "nome": "Cebola",
        "porcao": "1 xícara",
        "calorias": "30"
    },
    {
        "nome": "Cenoura",
        "porcao": "1 xícara",
        "calorias": "31"
    },
    {
        "nome": "Chicória",
        "porcao": "1 xícara",
        "calorias": "9"
    },
    {
        "nome": "Chuchu",
        "porcao": "1 xícara",
        "calorias": "25"
    },
    {
        "nome": "Cogumelo",
        "porcao": "1 xícara",
        "calorias": "29"
    },
    {
        "nome": "Couve",
        "porcao": "1 xícara",
        "calorias": "14"
    },
    {
        "nome": "Couve-de-bruxelas",
        "porcao": "1 xícara",
        "calorias": "46"
    },
    {
        "nome": "Couve-flor",
        "porcao": "1 xícara",
        "calorias": "21"
    },
    {
        "nome": "Endívia",
        "porcao": "1 xícara",
        "calorias": "14"
    },
    {
        "nome": "Erva-doce (funcho)",
        "porcao": "1 xícara",
        "calorias": "20"
    },
    {
        "nome": "Ervilha (vagem)",
        "porcao": "1 xícara",
        "calorias": "45"
    },
    {
        "nome": "Erviha em conserva",
        "porcao": "1 xícara",
        "calorias": "110"
    },
    {
        "nome": "Escarola",
        "porcao": "1 xícara",
        "calorias": "9"
    },
    {
        "nome": "Espinafre",
        "porcao": "1 xícara",
        "calorias": "14"
    },
    {
        "nome": "Jiló",
        "porcao": "1 xícara",
        "calorias": "57"
    },
    {
        "nome": "Milho verde",
        "porcao": "1 xícara",
        "calorias": "130"
    },
    {
        "nome": "Nabo",
        "porcao": "1 xícara",
        "calorias": "11"
    },
    {
        "nome": "Palmito",
        "porcao": "1 xícara",
        "calorias": "38"
    },
    {
        "nome": "Pepino",
        "porcao": "1 xícara",
        "calorias": "12"
    },
    {
        "nome": "Picles em conserva",
        "porcao": "1 xícara",
        "calorias": "20"
    },
    {
        "nome": "Pimentão",
        "porcao": "1 xícara",
        "calorias": "26"
    },
    {
        "nome": "Rabanete",
        "porcao": "1 xícara",
        "calorias": "12"
    },
    {
        "nome": "Repolho",
        "porcao": "1 xícara",
        "calorias": "13"
    },
    {
        "nome": "Rúcula",
        "porcao": "1 xícara",
        "calorias": "10"
    },
    {
        "nome": "Quiabo",
        "porcao": "1 xícara",
        "calorias": "36"
    },
    {
        "nome": "Seleta de legumes",
        "porcao": "1 xícara",
        "calorias": "45"
    },
    {
        "nome": "Tomate",
        "porcao": "1 unidade",
        "calorias": "26"
    },
    {
        "nome": "Vagem",
        "porcao": "1 xícara",
        "calorias": "77"
    },
    {
        "nome": "Babaganuche (pasta de berinjela)",
        "porcao": "1 colher (sopa)",
        "calorias": "74"
    },
    {
        "nome": "Berinjela frita",
        "porcao": "1 colher (sopa)",
        "calorias": "55"
    },
    {
        "nome": "Chucrute",
        "porcao": "1 xícara",
        "calorias": "33"
    },
    {
        "nome": "Couve-flor à milanesa",
        "porcao": "1 colher (sopa)",
        "calorias": "38"
    },
    {
        "nome": "Espinafre ao creme",
        "porcao": "1 colher (sopa)",
        "calorias": "34"
    },
    {
        "nome": "Gaspacho",
        "porcao": "1 prato (300 ml)",
        "calorias": "120"
    },
    {
        "nome": "Salada de legumes com maionese",
        "porcao": "1 colher (sopa)",
        "calorias": "25"
    },
    {
        "nome": "Sopa de cebola",
        "porcao": "1 prato (300 ml)",
        "calorias": "134"
    },
    {
        "nome": "Sopa de legumes",
        "porcao": "1 prato (300 ml)",
        "calorias": "231"
    },
    {
        "nome": "Sopa de tomate",
        "porcao": "1 prato (300 ml)",
        "calorias": "164"
    },
    {
        "nome": "Tomate seco",
        "porcao": "1 unidade",
        "calorias": "45"
    },
    {
        "nome": "Tabule",
        "porcao": "1 colher (sopa)",
        "calorias": "52"
    },
    {
        "nome": "Blanquete de peru",
        "porcao": "1 fatia fina (10 g)",
        "calorias": "13"
    },
    {
        "nome": "Chester assado",
        "porcao": "1 pedaço médio (60 g)",
        "calorias": "98"
    },
    {
        "nome": "Estrogonofe de frango",
        "porcao": "1 concha",
        "calorias": "338"
    },
    {
        "nome": "Filé de frango à milanesa",
        "porcao": "1 médio (100 g)",
        "calorias": "287"
    },
    {
        "nome": "Filé de frango grelhado",
        "porcao": "1 médio (100 g)",
        "calorias": "97"
    },
    {
        "nome": "Filé de frango frito",
        "porcao": "1 médio (100 g)",
        "calorias": "145"
    },
    {
        "nome": "Frango assado",
        "porcao": "coxa média (40 g)",
        "calorias": "49"
    },
    {
        "nome": "Frango assado",
        "porcao": "peito (100 g)",
        "calorias": "109"
    },
    {
        "nome": "Frango assado",
        "porcao": "sobrecoxa (65 g)",
        "calorias": "78"
    },
    {
        "nome": "Frango ensopado desfiado",
        "porcao": "1 colher (sopa)",
        "calorias": "26"
    },
    {
        "nome": "Frango xadrez",
        "porcao": "1 concha",
        "calorias": "70"
    },
    {
        "nome": "Hambúrguer de frango (sem o pão)",
        "porcao": "1 unidade (56 g)",
        "calorias": "130"
    },
    {
        "nome": "Hambúrguer de peru (sem o pão)",
        "porcao": "1 unidade (90 g)",
        "calorias": "133"
    },
    {
        "nome": "Peito de frango defumado",
        "porcao": "1 fatia (30 g)",
        "calorias": "29"
    },
    {
        "nome": "Peito de peru defumado light",
        "porcao": "1 fatia (15 g)",
        "calorias": "15"
    },
    {
        "nome": "Peito de peru assado",
        "porcao": "1 fatia grande (100 g)",
        "calorias": "162"
    },
    {
        "nome": "Peru assado, carne escura",
        "porcao": "1 pedaço (100 g)",
        "calorias": "218"
    },
    {
        "nome": "Salsicha de frango ou chester",
        "porcao": "1 unidade (50 g)",
        "calorias": "106"
    },
    {
        "nome": "Salsicha de peru",
        "porcao": "1 unidade (50 g)",
        "calorias": "65"
    },
    {
        "nome": "Omelete",
        "porcao": "1 ovo",
        "calorias": "110"
    },
    {
        "nome": "Ovo de codorna",
        "porcao": "1 unidade",
        "calorias": "16"
    },
    {
        "nome": "Ovo de galinha cozido",
        "porcao": "1 médio",
        "calorias": "71"
    },
    {
        "nome": "Ovo frito",
        "porcao": "1 médio",
        "calorias": "105"
    },
    {
        "nome": "Ovo mexido",
        "porcao": "1 colher (sopa)",
        "calorias": "29"
    },
    {
        "nome": "Almôndega",
        "porcao": "1 unidade (50 g)",
        "calorias": "102"
    },
    {
        "nome": "Bife à milanesa",
        "porcao": "1 pequeno (100 g)",
        "calorias": "287"
    },
    {
        "nome": "Bife frito",
        "porcao": "1 médio (100 g)",
        "calorias": "248"
    },
    {
        "nome": "Bife na chapa",
        "porcao": "1 médio (100 g)",
        "calorias": "203"
    },
    {
        "nome": "Bife à parmigiana",
        "porcao": "1 pequeno (100 g)",
        "calorias": "369"
    },
    {
        "nome": "Bife rolê",
        "porcao": "1 pequeno (100 g)",
        "calorias": "224"
    },
    {
        "nome": "Carne assada",
        "porcao": "1 fatia média (100 g)",
        "calorias": "288"
    },
    {
        "nome": "Carne ensopada",
        "porcao": "1 colher (sopa) (50 g)",
        "calorias": "56"
    },
    {
        "nome": "Carne moída",
        "porcao": "4 colheres (sopa)(100 g)",
        "calorias": "213"
    },
    {
        "nome": "Carne-seca",
        "porcao": "1 pedaço médio (65 g)",
        "calorias": "279"
    },
    {
        "nome": "Carpaccio com molho de <br />limão, mostarda e alcaparras",
        "porcao": "1 prato (95 g)",
        "calorias": "90"
    },
    {
        "nome": "Costela de boi assada",
        "porcao": "1 pedaço médio (65 g)",
        "calorias": "181"
    },
    {
        "nome": "Churrasco (maminha, picanha)",
        "porcao": "(100 g)",
        "calorias": "250"
    },
    {
        "nome": "Estrogonofe de carne",
        "porcao": "1 concha (170 g)",
        "calorias": "294"
    },
    {
        "nome": "Fígado frito",
        "porcao": "1 bife médio (100 g)",
        "calorias": "216"
    },
    {
        "nome": "Fraldinha assada",
        "porcao": "1 fatia (100 g)",
        "calorias": "185"
    },
    {
        "nome": "Hambúrguer (sem o pão)",
        "porcao": "1 unidade (80 g)",
        "calorias": "160"
    },
    {
        "nome": "Rosbife",
        "porcao": "1 fatia fina (45 g)",
        "calorias": "72"
    },
    {
        "nome": "Bacon",
        "porcao": "1 fatia (15 g)",
        "calorias": "99"
    },
    {
        "nome": "Costela de porco",
        "porcao": "1 pedaço pequeno (23 g)",
        "calorias": "102"
    },
    {
        "nome": "Lingüiça calabresa frita",
        "porcao": "1 unidade (40 g)",
        "calorias": "120"
    },
    {
        "nome": "Lombo de porco assado",
        "porcao": "1 fatia (80 g)",
        "calorias": "242"
    },
    {
        "nome": "Mortadela",
        "porcao": "1 fatia fina (15 g)",
        "calorias": "41"
    },
    {
        "nome": "Porco agridoce",
        "porcao": "1 colher grande (80 g)",
        "calorias": "277"
    },
    {
        "nome": "Presunto cru ",
        "porcao": "1 fatia (15 g)",
        "calorias": "30"
    },
    {
        "nome": "Presunto cozido",
        "porcao": "1 fatia (15 g)",
        "calorias": "25"
    },
    {
        "nome": "Tender assado",
        "porcao": "1 fatia média (50 g)",
        "calorias": "82"
    },
    {
        "nome": "Salame",
        "porcao": "1 fatia fina (2,5 g)",
        "calorias": "11"
    },
    {
        "nome": "Salsicha",
        "porcao": "1 unidade (50 g)",
        "calorias": "146"
    },
    {
        "nome": "Salsichão",
        "porcao": "1 fatia (10 g)",
        "calorias": "45"
    },
    {
        "nome": "Atum em óleo",
        "porcao": "1 lata (160 g)",
        "calorias": "448"
    },
    {
        "nome": "Atum em água",
        "porcao": "1 lata (160 g)",
        "calorias": "184"
    },
    {
        "nome": "Bacalhau assado",
        "porcao": "1 posta (100 g)",
        "calorias": "110"
    },
    {
        "nome": "Camarão cozido",
        "porcao": "5 grandes(100 g)",
        "calorias": "82"
    },
    {
        "nome": "Camarão frito",
        "porcao": "10 médios (100 g)",
        "calorias": "310"
    },
    {
        "nome": "Estrogonofe de camarão",
        "porcao": "1 concha",
        "calorias": "338"
    },
    {
        "nome": "Filé de peixe grelhado",
        "porcao": "1 médio (120 g)",
        "calorias": "120"
    },
    {
        "nome": "Filé de peixe à milanesa <br>e molho de camarão",
        "porcao": "1 médio (100g)",
        "calorias": "383"
    },
    {
        "nome": "Kani kama",
        "porcao": "1 stick (16 g)",
        "calorias": "13"
    },
    {
        "nome": "Lagosta grelhada na manteiga",
        "porcao": "1 unidade (200 g)",
        "calorias": "308"
    },
    {
        "nome": "Lula cozida",
        "porcao": "1/2 concha (100 g)",
        "calorias": "93"
    },
    {
        "nome": "Lula frita",
        "porcao": "4 colheres (sopa) (100 g)",
        "calorias": "190"
    },
    {
        "nome": "Mariscos ao vinagrete",
        "porcao": "1 prato (sobremesa) ",
        "calorias": "82"
    },
    {
        "nome": "Mexilhão cozido",
        "porcao": "8 grandes (100 g)",
        "calorias": "80"
    },
    {
        "nome": "Ostras",
        "porcao": "6 médias (100 g)",
        "calorias": "60"
    },
    {
        "nome": "Peixe à escabeche",
        "porcao": "1 filé médio (100 g)",
        "calorias": "183"
    },
    {
        "nome": "Peixe ensopado",
        "porcao": "1 concha (100 g)",
        "calorias": "130"
    },
    {
        "nome": "Pintado na brasa",
        "porcao": "1 pedaço médio (80 g)",
        "calorias": "134"
    },
    {
        "nome": "Polvo refogado",
        "porcao": "1 colher (sopa) (22 g)",
        "calorias": "18"
    },
    {
        "nome": "Salmão defumado",
        "porcao": "1 filé fino (50 g)",
        "calorias": "75"
    },
    {
        "nome": "Salmão cozido ou grelhado ",
        "porcao": "1 filé (120 g)",
        "calorias": "240"
    },
    {
        "nome": "Sardinha em conserva (molho de tomate)",
        "porcao": "1 unidade (25 g)",
        "calorias": "45"
    },
    {
        "nome": "Sardinha (no azeite)",
        "porcao": "1 unidade (33 g)",
        "calorias": "98"
    },
    {
        "nome": "Sardinha frita",
        "porcao": "1 unidade (40 g)",
        "calorias": "91"
    },
    {
        "nome": "Sashimi (variado)",
        "porcao": "1 porção (100 g)",
        "calorias": "80"
    },
    {
        "nome": "Truta assada ou cozida",
        "porcao": "1/2 unidade (120 g)",
        "calorias": "162"
    },
    {
        "nome": "Coalhada",
        "porcao": "1 colher (sopa) (20 g)",
        "calorias": "52"
    },
    {
        "nome": "Creme de leite fresco",
        "porcao": "1 colher (sopa)",
        "calorias": "52"
    },
    {
        "nome": "Creme de leite light",
        "porcao": "1 colher (sopa)",
        "calorias": "26"
    },
    {
        "nome": "Danoninho",
        "porcao": "1 unidade (45 g)",
        "calorias": "66"
    },
    {
        "nome": "Iogurte desnatado",
        "porcao": "1 unidade (200 ml)",
        "calorias": "90"
    },
    {
        "nome": "Iogurte natural",
        "porcao": "1 unidade (200 ml)",
        "calorias": "154"
    },
    {
        "nome": "Leite condensado",
        "porcao": "1 colher (sopa)",
        "calorias": "49"
    },
    {
        "nome": "Leite condensado light",
        "porcao": "1 colher (sopa)",
        "calorias": "39"
    },
    {
        "nome": "Leite desnatado",
        "porcao": "1 copo (200 ml)",
        "calorias": "72"
    },
    {
        "nome": "Leite integral",
        "porcao": "1 copo (200 ml)",
        "calorias": "126"
    },
    {
        "nome": "Leite semidesnatado",
        "porcao": "1 copo (200 ml)",
        "calorias": "90"
    },
    {
        "nome": "Yakult",
        "porcao": "1 unidade (80 g)",
        "calorias": "51"
    },
    {
        "nome": "Brie",
        "porcao": "1 fatia média (22 g)",
        "calorias": "57"
    },
    {
        "nome": "Camembert",
        "porcao": "1 fatia média (25 g)",
        "calorias": "68"
    },
    {
        "nome": "Catupiry",
        "porcao": "1 colher (sopa)",
        "calorias": "75"
    },
    {
        "nome": "Cheddar",
        "porcao": "1 fatia fina (15 g)",
        "calorias": "63"
    },
    {
        "nome": "Cottageintegral",
        "porcao": "1 colher (sopa)",
        "calorias": "37"
    },
    {
        "nome": "Cottage desnatado",
        "porcao": "1 colher (sopa)",
        "calorias": "30"
    },
    {
        "nome": "Cream cheese",
        "porcao": "1 colher (sopa)",
        "calorias": "105"
    },
    {
        "nome": "Cream cheese light",
        "porcao": "1 colher (sopa)",
        "calorias": "62"
    },
    {
        "nome": "Emmental",
        "porcao": "1 fatia pequena (35 g)",
        "calorias": "140"
    },
    {
        "nome": "Gorgonzola",
        "porcao": "1 fatia média (38 g)",
        "calorias": "164"
    },
    {
        "nome": "Minas",
        "porcao": "1 fatia média (30 g)",
        "calorias": "73"
    },
    {
        "nome": "Minas light",
        "porcao": "1 fatia média (30 g)",
        "calorias": "46"
    },
    {
        "nome": "Mussarela",
        "porcao": "1 fatia fina (20 g)",
        "calorias": "65"
    },
    {
        "nome": "Mussarela de búfala",
        "porcao": "1 unidade (45 g)",
        "calorias": "74"
    },
    {
        "nome": "Parmesão ralado",
        "porcao": "1 colher (sopa)",
        "calorias": "27"
    },
    {
        "nome": "Polenguinho",
        "porcao": "1 unidade (20 g)",
        "calorias": "50"
    },
    {
        "nome": "Prato",
        "porcao": "1 fatia fina (15 g)",
        "calorias": "59"
    },
    {
        "nome": "Prato light",
        "porcao": "1 fatia fina (15 g)",
        "calorias": "35"
    },
    {
        "nome": "Provolone",
        "porcao": "1 fatia fina (15 g)",
        "calorias": "51"
    },
    {
        "nome": "Requeijão",
        "porcao": "1 colher (sopa)",
        "calorias": "86"
    },
    {
        "nome": "Requeijão light",
        "porcao": "1 colher (sopa)",
        "calorias": "57"
    },
    {
        "nome": "Ricota",
        "porcao": "1 fatia média (30 g)",
        "calorias": "51"
    },
    {
        "nome": "Ricota light",
        "porcao": "1 fatia média (30 g)",
        "calorias": "39"
    },
    {
        "nome": "Cannelloni de frango",
        "porcao": "1 unidade (50 g)",
        "calorias": "97"
    },
    {
        "nome": "Cannelloni de ricota",
        "porcao": "1 unidade (55 g)",
        "calorias": "135"
    },
    {
        "nome": "Cappellettide carne",
        "porcao": "1 xícara(100 g)",
        "calorias": "282"
    },
    {
        "nome": "Lasanha",
        "porcao": "1 colher sopa (50 g)",
        "calorias": "104"
    },
    {
        "nome": "Macarrão à bolonhesa",
        "porcao": "1/2 xícara(115 g)",
        "calorias": "142"
    },
    {
        "nome": "Macarrão cozido",
        "porcao": "1/2 xícara (100 g)",
        "calorias": "110"
    },
    {
        "nome": "Macarrão ao sugo",
        "porcao": "1/2 xícara (100 g)",
        "calorias": "102"
    },
    {
        "nome": "Macarrão com rúcula e queijo",
        "porcao": "1/2xícara (80 g)",
        "calorias": "262"
    },
    {
        "nome": "Nhoque ao sugo",
        "porcao": "1 colher sopa (30 g)",
        "calorias": "42"
    },
    {
        "nome": "Panqueca",
        "porcao": "1 unidade (50 g)",
        "calorias": "95"
    },
    {
        "nome": "Panqueca de carne",
        "porcao": "1 unidade (80 g)",
        "calorias": "228"
    },
    {
        "nome": "Pizza calabresa (sem mussarela)",
        "porcao": "1 fatia",
        "calorias": "239"
    },
    {
        "nome": "Pizza calabresa (com mussarela)",
        "porcao": "1 fatia",
        "calorias": "320"
    },
    {
        "nome": "Pizza de mussarela",
        "porcao": "1 fatia",
        "calorias": "278"
    },
    {
        "nome": "Pizza portuguesa",
        "porcao": "1 fatia",
        "calorias": "302"
    },
    {
        "nome": "Rolinho primavera",
        "porcao": "1 unidade (60 g)",
        "calorias": "95"
    },
    {
        "nome": "Quiche de queijo",
        "porcao": "1 fatia (100 g)",
        "calorias": "288"
    },
    {
        "nome": "Torta de camarão",
        "porcao": "1 fatia (100 g)",
        "calorias": "310"
    },
    {
        "nome": "Torta de frango",
        "porcao": "1 fatia (120 g)",
        "calorias": "282"
    },
    {
        "nome": "Torta de legumes",
        "porcao": "1 fatia (100 g)",
        "calorias": "241"
    },
    {
        "nome": "Torta de palmito",
        "porcao": "1 fatia (100 g)",
        "calorias": "260"
    },
    {
        "nome": "Torta de queijo",
        "porcao": "1 fatia (100 g)",
        "calorias": "320"
    },
    {
        "nome": "Arroz à grega",
        "porcao": "1 colher (sopa)",
        "calorias": "35"
    },
    {
        "nome": "Arroz branco cozido",
        "porcao": "1 colher (sopa)",
        "calorias": "41"
    },
    {
        "nome": "Arroz chop-suey",
        "porcao": "1 colher (sopa)",
        "calorias": "43"
    },
    {
        "nome": "Arroz-de-carreteiro",
        "porcao": "1 colher (sopa)",
        "calorias": "63"
    },
    {
        "nome": "Arroz integral cozido",
        "porcao": "1 colher (sopa)",
        "calorias": "54"
    },
    {
        "nome": "Aveia em flocos",
        "porcao": "1 colher (sopa)",
        "calorias": "26"
    },
    {
        "nome": "Baked potato com requeijão light",
        "porcao": "1 unidade",
        "calorias": "305"
    },
    {
        "nome": "Batata cozida",
        "porcao": "1 unidade média (90 g)",
        "calorias": "76"
    },
    {
        "nome": "Batata-doce cozida",
        "porcao": "1 fatia média (70 g)",
        "calorias": "72"
    },
    {
        "nome": "Batata frita",
        "porcao": "1 prato sobremesa (200 g)",
        "calorias": "545"
    },
    {
        "nome": "Batata sauté",
        "porcao": "1 colher (sopa)",
        "calorias": "38"
    },
    {
        "nome": "Cereal tipo All-Bran",
        "porcao": "1 colher (sopa)",
        "calorias": "23"
    },
    {
        "nome": "Corn Flakes",
        "porcao": "1 colher (sopa)",
        "calorias": "15"
    },
    {
        "nome": "Creme de milho",
        "porcao": "1 colher (sopa)",
        "calorias": "35"
    },
    {
        "nome": "Farinha de mandioca",
        "porcao": "1 colher (sopa)",
        "calorias": "57"
    },
    {
        "nome": "Farofa",
        "porcao": "1 colher (sopa)",
        "calorias": "71"
    },
    {
        "nome": "Feijão",
        "porcao": "1 colher (sopa)",
        "calorias": "12"
    },
    {
        "nome": "Granola",
        "porcao": "1 colher (sopa)",
        "calorias": "28"
    },
    {
        "nome": "Grão-de-bico",
        "porcao": "1 colher (sopa)",
        "calorias": "26"
    },
    {
        "nome": "Lentilha",
        "porcao": "1 colher (sopa)",
        "calorias": "19"
    },
    {
        "nome": "Mandioca frita",
        "porcao": "1 pedaço pequeno (50 g)",
        "calorias": "176"
    },
    {
        "nome": "Mandioca cozida",
        "porcao": "1 pedaço médio (90 g)",
        "calorias": "108"
    },
    {
        "nome": "Pipoca",
        "porcao": "1 saco pequeno (60 g)",
        "calorias": "240"
    },
    {
        "nome": "Polenta cozida",
        "porcao": "1 fatia (100 g)",
        "calorias": "172"
    },
    {
        "nome": "Polenta frita",
        "porcao": "1 quadrado (50 g)",
        "calorias": "184"
    },
    {
        "nome": "Purê de batata",
        "porcao": "1 colher (sopa)",
        "calorias": "56"
    },
    {
        "nome": "Salada de batata com maionese",
        "porcao": "1 colher (sopa)",
        "calorias": "53"
    },
    {
        "nome": "Salada de feijão-fradinho",
        "porcao": "1 colher (sopa)",
        "calorias": "51"
    },
    {
        "nome": "Sopa de ervilha",
        "porcao": "1 concha média (130 g)",
        "calorias": "169"
    },
    {
        "nome": "Sopa de feijão com macarrão",
        "porcao": "1 concha média (160 g)",
        "calorias": "211"
    },
    {
        "nome": "Tofu (queijo de soja)",
        "porcao": "1 fatia média(30 g)",
        "calorias": "60"
    },
    {
        "nome": "Tutu de feijão",
        "porcao": "1 colher (sopa) (30 g)",
        "calorias": "34"
    },
    {
        "nome": "Baguete (pequena)",
        "porcao": "1 unidade (55 g)",
        "calorias": "156"
    },
    {
        "nome": "Biscoito de fibras",
        "porcao": "1 unidade",
        "calorias": "36"
    },
    {
        "nome": "Biscoito doce",
        "porcao": "1 unidade",
        "calorias": "27"
    },
    {
        "nome": "Biscoito recheado",
        "porcao": "1 unidade",
        "calorias": "64"
    },
    {
        "nome": "Biscoito waffle",
        "porcao": "1 unidade",
        "calorias": "47"
    },
    {
        "nome": "Bisnaguinha",
        "porcao": "1 unidade (30 g)",
        "calorias": "59"
    },
    {
        "nome": "Ciabatta(pequena)",
        "porcao": "1 unidade (70 g)",
        "calorias": "160"
    },
    {
        "nome": "Cookie de chocolate",
        "porcao": "1 unidade (10 g)",
        "calorias": "48"
    },
    {
        "nome": "Cream cracker, água e sal",
        "porcao": "1 unidade (8 g)",
        "calorias": "32"
    },
    {
        "nome": "Croissant",
        "porcao": "1 unidade (40 g)",
        "calorias": "165"
    },
    {
        "nome": "Muffin",
        "porcao": "1 unidade (45 g)",
        "calorias": "173"
    },
    {
        "nome": "Pão de batata",
        "porcao": "1 unidade",
        "calorias": "165"
    },
    {
        "nome": "Pão de fôrma",
        "porcao": "1 fatia",
        "calorias": "68"
    },
    {
        "nome": "Pão francês",
        "porcao": "1 unidade",
        "calorias": "134"
    },
    {
        "nome": "Pão francês sem miolo",
        "porcao": "1 unidade",
        "calorias": "81"
    },
    {
        "nome": "Pão de glúten, centeio",
        "porcao": "1 fatia",
        "calorias": "72"
    },
    {
        "nome": "Pão light",
        "porcao": "1 fatia",
        "calorias": "52"
    },
    {
        "nome": "Pão sírio",
        "porcao": "1 unidade média",
        "calorias": "160"
    },
    {
        "nome": "Pão italiano",
        "porcao": "1 fatia média",
        "calorias": "85"
    },
    {
        "nome": "Pão de queijo",
        "porcao": "1 grande",
        "calorias": "173"
    },
    {
        "nome": "Stick",
        "porcao": "1 unidade (3 g)",
        "calorias": "4"
    },
    {
        "nome": "Torrada",
        "porcao": "1 unidade (12 g)",
        "calorias": "36"
    },
    {
        "nome": "Açúcar",
        "porcao": "1 colher (sopa)",
        "calorias": "40"
    },
    {
        "nome": "Bala",
        "porcao": "1 unidade (5 g)",
        "calorias": "20"
    },
    {
        "nome": "Barra de cereais (de banana)",
        "porcao": "1 unidade (25 g)",
        "calorias": "90"
    },
    {
        "nome": "Batom Garoto",
        "porcao": "1 unidade (16g)",
        "calorias": "66"
    },
    {
        "nome": "Beijinho",
        "porcao": "1 unidade (30 g)",
        "calorias": "105"
    },
    {
        "nome": "Bis",
        "porcao": "1 unidade (7,5 g)",
        "calorias": "39"
    },
    {
        "nome": "Bolo comum",
        "porcao": "1 fatia (60 g)",
        "calorias": "215"
    },
    {
        "nome": "Bolo diet",
        "porcao": "1 fatia (60 g)",
        "calorias": "129"
    },
    {
        "nome": "Bombom Alpino",
        "porcao": "1 unidade (13g)",
        "calorias": "69"
    },
    {
        "nome": "Bombom com cereja",
        "porcao": "1 unidade (21 g)",
        "calorias": "99"
    },
    {
        "nome": "Bombom Serenata de Amor",
        "porcao": "1 unidade (20g)",
        "calorias": "88"
    },
    {
        "nome": "Bombom Sonho de Valsa",
        "porcao": "1 unidade (21,5 g)",
        "calorias": "115"
    },
    {
        "nome": "Brigadeiro",
        "porcao": "1 unidade (30 g)",
        "calorias": "121"
    },
    {
        "nome": "Cereja em calda",
        "porcao": "1 colher (sobremesa)",
        "calorias": "39"
    },
    {
        "nome": "Chiclete",
        "porcao": "1 unidade(4 g)",
        "calorias": "14"
    },
    {
        "nome": "Chocolate",
        "porcao": "tablete de 30 g",
        "calorias": "150"
    },
    {
        "nome": "Creme de papaia",
        "porcao": "1 taça (150 g)",
        "calorias": "260"
    },
    {
        "nome": "Frozen iogurte",
        "porcao": "1 porção (200 g)",
        "calorias": "115"
    },
    {
        "nome": "Frutas em calda",
        "porcao": "1/2 xícara (60 g)",
        "calorias": "110"
    },
    {
        "nome": "Gelatina diet",
        "porcao": "1 taça (100 g)",
        "calorias": "15"
    },
    {
        "nome": "Geléia",
        "porcao": "1 colher (sopa)",
        "calorias": "50"
    },
    {
        "nome": "Goiabada",
        "porcao": "1 colher (sopa)",
        "calorias": "40"
    },
    {
        "nome": "Mel",
        "porcao": "1 colher (sopa)",
        "calorias": "30"
    },
    {
        "nome": "Milk-shake de chocolate",
        "porcao": "1 copo (250 ml)",
        "calorias": "575"
    },
    {
        "nome": "Milk-shake de morango",
        "porcao": "1 copo (250 ml)",
        "calorias": "379"
    },
    {
        "nome": "M&M chocolate",
        "porcao": "1 pacote (30 g)",
        "calorias": "134"
    },
    {
        "nome": "Musse de maracujá ",
        "porcao": "1 taça (150 g)",
        "calorias": "304"
    },
    {
        "nome": "Musse de chocolate",
        "porcao": "1 taça (150 g)",
        "calorias": "333"
    },
    {
        "nome": "Panetone",
        "porcao": "1 fatia pequena (45 g)",
        "calorias": "122"
    },
    {
        "nome": "Sorvete à base de fruta ",
        "porcao": "1 picolé",
        "calorias": "60"
    },
    {
        "nome": "Sorvete cremoso",
        "porcao": "1 colher (sopa)",
        "calorias": "63"
    },
    {
        "nome": "Sorvete dietchocolate",
        "porcao": "1 colher (sopa)",
        "calorias": "44"
    },
    {
        "nome": "Sorvete diet frutas ",
        "porcao": "1 colher (sopa)",
        "calorias": "31"
    },
    {
        "nome": "Sundae ",
        "porcao": "1 pequeno (250 g)",
        "calorias": "265"
    },
    {
        "nome": "Suspiro ",
        "porcao": "1 unidade (10 g)",
        "calorias": "38"
    },
    {
        "nome": "Tortas doces",
        "porcao": "1 fatia pequena (70 g)",
        "calorias": "390"
    },
    {
        "nome": "Trufa de chocolate",
        "porcao": "1 unidade (30g)",
        "calorias": "121"
    },
    {
        "nome": "Acarajé ",
        "porcao": "1 unidade média",
        "calorias": "169"
    },
    {
        "nome": "Azeitona",
        "porcao": "1 unidade média",
        "calorias": "11"
    },
    {
        "nome": "Bolinho de bacalhau",
        "porcao": "1 unidade média",
        "calorias": "80"
    },
    {
        "nome": "Casquinha de siri",
        "porcao": "1 unidade média",
        "calorias": "380"
    },
    {
        "nome": "Coxinha de frango",
        "porcao": "1 unidade grande",
        "calorias": "400"
    },
    {
        "nome": "Croquete de carne",
        "porcao": "1 unidade pequena",
        "calorias": "87"
    },
    {
        "nome": "Croquete de carne",
        "porcao": "1 unidade grande",
        "calorias": "346"
    },
    {
        "nome": "Empadinha",
        "porcao": "1 unidade ",
        "calorias": "108"
    },
    {
        "nome": "Empanada de carne",
        "porcao": "1 unidade",
        "calorias": "234"
    },
    {
        "nome": "Esfiha de carne",
        "porcao": "1 unidade média ",
        "calorias": "206"
    },
    {
        "nome": "Esfiha de queijo",
        "porcao": "1 unidade média",
        "calorias": "238"
    },
    {
        "nome": "Folheado de presunto",
        "porcao": "1 unidade",
        "calorias": "370"
    },
    {
        "nome": "Pastel de carne",
        "porcao": "1 unidade grande",
        "calorias": "324"
    },
    {
        "nome": "Pastel de queijo",
        "porcao": "1 unidade grande",
        "calorias": "361"
    },
    {
        "nome": "Quibe",
        "porcao": "1 unidade grande grande",
        "calorias": "318"
    },
    {
        "nome": "Risole de carne ",
        "porcao": "1 unidade média",
        "calorias": "149"
    },
    {
        "nome": "Sushi califórnia",
        "porcao": "1 unidade",
        "calorias": "32"
    },
    {
        "nome": "Bauru",
        "porcao": "1 unidade ",
        "calorias": "410"
    },
    {
        "nome": "Big Mac",
        "porcao": "1 unidade",
        "calorias": "590"
    },
    {
        "nome": "Beirute completo",
        "porcao": "1 unidade ",
        "calorias": "490"
    },
    {
        "nome": "Beirute de peito de peru",
        "porcao": "1 unidade ",
        "calorias": "295"
    },
    {
        "nome": "Cachorro quente",
        "porcao": "1 unidade",
        "calorias": "330"
    },
    {
        "nome": "Cheeseburger McDonald's",
        "porcao": "1 unidade",
        "calorias": "358"
    },
    {
        "nome": "Hambúrguer",
        "porcao": "1 unidade",
        "calorias": "290"
    },
    {
        "nome": "Misto-quente",
        "porcao": "1 unidade",
        "calorias": "370"
    },
    {
        "nome": "Bobó de camarão",
        "porcao": "1 colher (sopa)",
        "calorias": "46"
    },
    {
        "nome": "Canja",
        "porcao": "1 concha",
        "calorias": "110"
    },
    {
        "nome": "Cuscuz à paulista",
        "porcao": "1 fatia média (100 g)",
        "calorias": "328"
    },
    {
        "nome": "Dobradinha",
        "porcao": "1 colher (sopa)",
        "calorias": "39"
    },
    {
        "nome": "Feijoada",
        "porcao": "1 concha",
        "calorias": "346"
    },
    {
        "nome": "Goulash",
        "porcao": "1 colher grande (90 g)",
        "calorias": "186"
    },
    {
        "nome": "Moqueca de camarão",
        "porcao": "1 concha",
        "calorias": "320"
    },
    {
        "nome": "Moqueca de peixe",
        "porcao": "1 concha",
        "calorias": "290"
    },
    {
        "nome": "Paella",
        "porcao": "1 colher grande (90 g)",
        "calorias": "180"
    },
    {
        "nome": "Pimentão assado recheado com carne moída",
        "porcao": "1 unidade (200 g)",
        "calorias": "298"
    },
    {
        "nome": "Risoto de frango ",
        "porcao": "1 colher (sopa)",
        "calorias": "63"
    },
    {
        "nome": "Risoto de funghi",
        "porcao": "1 colher (sopa)",
        "calorias": "78"
    },
    {
        "nome": "Salpicão de frango",
        "porcao": "1 colher (sopa)",
        "calorias": "47"
    },
    {
        "nome": "Suflê de espinafre",
        "porcao": "1 colher (sopa)",
        "calorias": "45"
    },
    {
        "nome": "Suflê de legumes",
        "porcao": "1 colher (sopa)",
        "calorias": "38"
    },
    {
        "nome": "Suflê de queijo",
        "porcao": "1 colher (sopa)",
        "calorias": "55"
    },
    {
        "nome": "Vatapá",
        "porcao": "1 colher grande (90 g)",
        "calorias": "320"
    },
    {
        "nome": "Yakissoba ",
        "porcao": "1 colher grande (75 g)",
        "calorias": "112"
    },
    {
        "nome": "Azeite e outros óleos",
        "porcao": "1 colher (chá) ",
        "calorias": "72"
    },
    {
        "nome": "Maionese ",
        "porcao": "1 colher (chá)",
        "calorias": "53"
    },
    {
        "nome": "Maionese light",
        "porcao": "1 colher (chá)",
        "calorias": "27"
    },
    {
        "nome": "Manteiga e margarina ",
        "porcao": "1 colher (chá)",
        "calorias": "60 "
    },
    {
        "nome": "Margarina light",
        "porcao": "1 colher (chá)",
        "calorias": "29"
    },
    {
        "nome": "Ketchup",
        "porcao": "1 colher (sopa)",
        "calorias": "22"
    },
    {
        "nome": "Molho ao curry ",
        "porcao": "1 colher (sopa)",
        "calorias": "31"
    },
    {
        "nome": "Molho branco",
        "porcao": "1 colher (sopa)",
        "calorias": "72"
    },
    {
        "nome": "Molho inglês ",
        "porcao": "1 colher (sopa)",
        "calorias": "11"
    },
    {
        "nome": "Molho de iogurte",
        "porcao": "1 colher (sopa)",
        "calorias": "29"
    },
    {
        "nome": "Molho madeira",
        "porcao": "1 colher (sopa)",
        "calorias": "7,5"
    },
    {
        "nome": "Molho de pimenta",
        "porcao": "1 colher (chá)",
        "calorias": "1,5"
    },
    {
        "nome": "Molho para salada italiano",
        "porcao": "1 colher (chá)",
        "calorias": "48"
    },
    {
        "nome": "Molho tártaro",
        "porcao": "1 colher (sopa)",
        "calorias": "75"
    },
    {
        "nome": "Molho de tomate refogado",
        "porcao": "4 colheres (sopa)",
        "calorias": "57"
    },
    {
        "nome": "Mostarda",
        "porcao": "1 colher (sopa)",
        "calorias": "11"
    },
    {
        "nome": "Shoyu",
        "porcao": "1 colher (sopa)",
        "calorias": "7"
    },
    {
        "nome": "Água-de-coco",
        "porcao": "1 copo (200 ml)",
        "calorias": "40"
    },
    {
        "nome": "Caipirinha",
        "porcao": "1 copo (100 ml)",
        "calorias": "260"
    },
    {
        "nome": "Cerveja",
        "porcao": "1 lata(350 ml)",
        "calorias": "147 "
    },
    {
        "nome": "Chá diet",
        "porcao": "1 copo (200 ml)",
        "calorias": "3"
    },
    {
        "nome": "Champanhe seco",
        "porcao": "1 taça (120)",
        "calorias": "85"
    },
    {
        "nome": "Chope",
        "porcao": "1 copo (300 ml)",
        "calorias": "126 "
    },
    {
        "nome": "Coquetel de frutas",
        "porcao": "1 copo (100 ml)",
        "calorias": "80"
    },
    {
        "nome": "Licor ",
        "porcao": "1 cálice (50 ml)",
        "calorias": "170"
    },
    {
        "nome": "Refrigerante diet ",
        "porcao": "1 copo (200 ml)",
        "calorias": "3"
    },
    {
        "nome": "Refrigerante normal",
        "porcao": "1 copo (200 ml)",
        "calorias": "115"
    },
    {
        "nome": "Prosecco",
        "porcao": "1 taça (120 ml)",
        "calorias": "85"
    },
    {
        "nome": "Suco de laranja ",
        "porcao": "1 copo (250 ml)",
        "calorias": "160 "
    },
    {
        "nome": "Uísque ou vodca ",
        "porcao": "1 dose (50 ml)",
        "calorias": "108"
    },
    {
        "nome": "Vinho branco seco",
        "porcao": "1 taça (120 ml)",
        "calorias": "90"
    },
    {
        "nome": "Vinho branco doce",
        "porcao": "1 taça (120)",
        "calorias": "170"
    },
    {
        "nome": "Vinho tinto seco",
        "porcao": "1 taça (120 ml)",
        "calorias": "110"
    },
    {
        "nome": "Vitamina de frutas com leite",
        "porcao": "1 copo (250 ml)",
        "calorias": "95"
    }
    //*/
]

// Dados da internet usados
/*
var produtos=new Array()
produtos[produtos.length]="FRUTAS|Abacate|1/2 pequeno (100 g)|180"
produtos[produtos.length]="FRUTAS|Abacaxi|1 fatia grande (100 g)|49"
produtos[produtos.length]="FRUTAS|Acerola|1 pequena (10 g)|2"
produtos[produtos.length]="FRUTAS|Ameixa fresca|1 grande (50 g)|27"
produtos[produtos.length]="FRUTAS|Ameixa seca|1 média (5 g)|11"
produtos[produtos.length]="FRUTAS|Amora|1 xícara|50"
produtos[produtos.length]="FRUTAS|Banana-maçã|1 média (65 g)|72"
produtos[produtos.length]="FRUTAS|Banana-nanica|1 média (70 g)|67"
produtos[produtos.length]="FRUTAS|Banana-ouro|1 pequena (30 g)|31"
produtos[produtos.length]="FRUTAS|Banana-prata |1 média (55 g)|54"
produtos[produtos.length]="FRUTAS|Cajá-manga|1 médio (48 g)|22"
produtos[produtos.length]="FRUTAS|Caju|1 médio (50 g)|23"
produtos[produtos.length]="FRUTAS|Caqui|1 médio (52 g)|36"
produtos[produtos.length]="FRUTAS|Carambola|1 média (105 g) |31"
produtos[produtos.length]="FRUTAS|Cereja|1 média (10 g)|7"
produtos[produtos.length]="FRUTAS|Damasco seco|1 médio (12 g)|26"
produtos[produtos.length]="FRUTAS|Figo|1 médio (70 g)|46"
produtos[produtos.length]="FRUTAS|Framboesa|1 xícara (100 g)|57"
produtos[produtos.length]="FRUTAS|Goiaba|1 média (95 g)|48"
produtos[produtos.length]="FRUTAS|Jabuticaba|4 unidades (20 g)|10"
produtos[produtos.length]="FRUTAS|Jaca|1 bago (12 g)|9"
produtos[produtos.length]="FRUTAS|Kiwi|1 médio (90 g)|45"
produtos[produtos.length]="FRUTAS|Laranja|1 média (130 g)|60"
produtos[produtos.length]="FRUTAS|Lichia|4 unidades (100 g)|65"
produtos[produtos.length]="FRUTAS|Lima-da-pérsia|1 média (95 g)|51"
produtos[produtos.length]="FRUTAS|Limão|1 médio (30 g)|9"
produtos[produtos.length]="FRUTAS|Maçã|1 média (140 g)|81"
produtos[produtos.length]="FRUTAS|Maçã verde|1 média (140 g)|54"
produtos[produtos.length]="FRUTAS|Mamão|1 fatia média (100 g)|36"
produtos[produtos.length]="FRUTAS|Mamão papaia|1/2 unidade (155 g)|56"
produtos[produtos.length]="FRUTAS|Manga|1/2 unidade (125 g)|82"
produtos[produtos.length]="FRUTAS|Maracujá|1 grande (90 g)|40"
produtos[produtos.length]="FRUTAS|Melancia|1 fatia média (200 g)|50"
produtos[produtos.length]="FRUTAS|Melão|1 fatia média (70 g)|19"
produtos[produtos.length]="FRUTAS|Morango|5 médios (50 g)|20"
produtos[produtos.length]="FRUTAS|Nectarina|1 grande (120 g)|76"
produtos[produtos.length]="FRUTAS|Passas|1 colher (sopa) (11 g)|30"
produtos[produtos.length]="FRUTAS|Pêra|1 média (110 g)|68"
produtos[produtos.length]="FRUTAS|Pêssego|1 pequeno (60 g)|29"
produtos[produtos.length]="FRUTAS|Salada de frutas|1/2 xícara|138"
produtos[produtos.length]="FRUTAS|Tangerina|1 média (100 g)|45"
produtos[produtos.length]="FRUTAS|Uva|1 média (5 g)|8"
produtos[produtos.length]="VERDURAS E LEGUMES|Abóbora|1 xícara|49"
produtos[produtos.length]="VERDURAS E LEGUMES|Abobrinha|1 xícara|24"
produtos[produtos.length]="VERDURAS E LEGUMES|Acelga |1 xícara|13"
produtos[produtos.length]="VERDURAS E LEGUMES|Agrião|1 xícara|6"
produtos[produtos.length]="VERDURAS E LEGUMES|Aipo (salsão)|1 xícara|20"
produtos[produtos.length]="VERDURAS E LEGUMES|Alcachofra|1 unidade (80 g)|61"
produtos[produtos.length]="VERDURAS E LEGUMES|Alface|1 folha|6"
produtos[produtos.length]="VERDURAS E LEGUMES|Almeirão|1 xícara|8"
produtos[produtos.length]="VERDURAS E LEGUMES|Berinjela|1 xícara|28"
produtos[produtos.length]="VERDURAS E LEGUMES|Bertalha|1 xícara|6"
produtos[produtos.length]="VERDURAS E LEGUMES|Beterraba|1 xícara|40"
produtos[produtos.length]="VERDURAS E LEGUMES|Brócolis|1 xícara|18"
produtos[produtos.length]="VERDURAS E LEGUMES|Broto de feijão|1 xícara|43"
produtos[produtos.length]="VERDURAS E LEGUMES|Cebola|1 xícara|30"
produtos[produtos.length]="VERDURAS E LEGUMES|Cenoura|1 xícara|31"
produtos[produtos.length]="VERDURAS E LEGUMES|Chicória|1 xícara|9"
produtos[produtos.length]="VERDURAS E LEGUMES|Chuchu|1 xícara|25"
produtos[produtos.length]="VERDURAS E LEGUMES|Cogumelo|1 xícara|29"
produtos[produtos.length]="VERDURAS E LEGUMES|Couve|1 xícara|14"
produtos[produtos.length]="VERDURAS E LEGUMES|Couve-de-bruxelas|1 xícara|46"
produtos[produtos.length]="VERDURAS E LEGUMES|Couve-flor|1 xícara|21"
produtos[produtos.length]="VERDURAS E LEGUMES|Endívia|1 xícara|14"
produtos[produtos.length]="VERDURAS E LEGUMES|Erva-doce (funcho)|1 xícara|20"
produtos[produtos.length]="VERDURAS E LEGUMES|Ervilha (vagem)|1 xícara|45"
produtos[produtos.length]="VERDURAS E LEGUMES|Erviha em conserva|1 xícara|110"
produtos[produtos.length]="VERDURAS E LEGUMES|Escarola|1 xícara|9"
produtos[produtos.length]="VERDURAS E LEGUMES|Espinafre|1 xícara|14"
produtos[produtos.length]="VERDURAS E LEGUMES|Jiló|1 xícara|57"
produtos[produtos.length]="VERDURAS E LEGUMES|Milho verde|1 xícara|130"
produtos[produtos.length]="VERDURAS E LEGUMES|Nabo|1 xícara|11"
produtos[produtos.length]="VERDURAS E LEGUMES|Palmito|1 xícara|38"
produtos[produtos.length]="VERDURAS E LEGUMES|Pepino|1 xícara|12"
produtos[produtos.length]="VERDURAS E LEGUMES|Picles em conserva|1 xícara|20"
produtos[produtos.length]="VERDURAS E LEGUMES|Pimentão|1 xícara|26"
produtos[produtos.length]="VERDURAS E LEGUMES|Rabanete|1 xícara|12"
produtos[produtos.length]="VERDURAS E LEGUMES|Repolho|1 xícara|13"
produtos[produtos.length]="VERDURAS E LEGUMES|Rúcula|1 xícara|10"
produtos[produtos.length]="VERDURAS E LEGUMES|Quiabo|1 xícara|36"
produtos[produtos.length]="VERDURAS E LEGUMES|Seleta de legumes|1 xícara|45"
produtos[produtos.length]="VERDURAS E LEGUMES|Tomate|1 unidade|26"
produtos[produtos.length]="VERDURAS E LEGUMES|Vagem|1 xícara|77"
produtos[produtos.length]="VERDURAS E LEGUMES|Babaganuche (pasta de berinjela)|1 colher (sopa)|74"
produtos[produtos.length]="VERDURAS E LEGUMES|Berinjela frita|1 colher (sopa)|55"
produtos[produtos.length]="VERDURAS E LEGUMES|Chucrute|1 xícara|33"
produtos[produtos.length]="VERDURAS E LEGUMES|Couve-flor à milanesa|1 colher (sopa)|38"
produtos[produtos.length]="VERDURAS E LEGUMES|Espinafre ao creme|1 colher (sopa)|34"
produtos[produtos.length]="VERDURAS E LEGUMES|Gaspacho|1 prato (300 ml)|120"
produtos[produtos.length]="VERDURAS E LEGUMES|Salada de legumes com maionese|1 colher (sopa)|25"
produtos[produtos.length]="VERDURAS E LEGUMES|Sopa de cebola|1 prato (300 ml)|134"
produtos[produtos.length]="VERDURAS E LEGUMES|Sopa de legumes|1 prato (300 ml)|231"
produtos[produtos.length]="VERDURAS E LEGUMES|Sopa de tomate|1 prato (300 ml)|164"
produtos[produtos.length]="VERDURAS E LEGUMES|Tomate seco|1 unidade|45"
produtos[produtos.length]="VERDURAS E LEGUMES|Tabule|1 colher (sopa)|52"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Blanquete de peru|1 fatia fina (10 g)|13"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Chester assado|1 pedaço médio (60 g)|98"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Estrogonofe de frango|1 concha|338"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Filé de frango à milanesa|1 médio (100 g)|287"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Filé de frango grelhado|1 médio (100 g)|97"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Filé de frango frito|1 médio (100 g)|145"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Frango assado|coxa média (40 g)|49"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Frango assado|peito (100 g)|109"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Frango assado|sobrecoxa (65 g)|78"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Frango ensopado desfiado|1 colher (sopa)|26"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Frango xadrez|1 concha|70"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Hambúrguer de frango (sem o pão)|1 unidade (56 g)|130"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Hambúrguer de peru (sem o pão)|1 unidade (90 g)|133"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Peito de frango defumado|1 fatia (30 g)|29"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Peito de peru defumado light|1 fatia (15 g)|15"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Peito de peru assado|1 fatia grande (100 g)|162"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Peru assado, carne escura|1 pedaço (100 g)|218"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Salsicha de frango ou chester|1 unidade (50 g)|106"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Salsicha de peru|1 unidade (50 g)|65"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Omelete|1 ovo|110"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Ovo de codorna|1 unidade|16"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Ovo de galinha cozido|1 médio|71"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Ovo frito|1 médio|105"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Ovo mexido|1 colher (sopa)|29"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Almôndega|1 unidade (50 g)|102"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Bife à milanesa|1 pequeno (100 g)|287"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Bife frito|1 médio (100 g)|248"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Bife na chapa|1 médio (100 g)|203"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Bife à parmigiana|1 pequeno (100 g)|369"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Bife rolê|1 pequeno (100 g)|224"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Carne assada|1 fatia média (100 g)|288"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Carne ensopada|1 colher (sopa) (50 g)|56"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Carne moída|4 colheres (sopa)(100 g)|213"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Carne-seca|1 pedaço médio (65 g)|279"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Carpaccio com molho de <br />limão, mostarda e alcaparras|1 prato (95 g)|90"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Costela de boi assada|1 pedaço médio (65 g)|181"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Churrasco (maminha, picanha)|(100 g)|250"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Estrogonofe de carne|1 concha (170 g)|294"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Fígado frito|1 bife médio (100 g)|216"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Fraldinha assada|1 fatia (100 g)|185"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Hambúrguer (sem o pão)|1 unidade (80 g)|160"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Rosbife|1 fatia fina (45 g)|72"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Bacon|1 fatia (15 g)|99"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Costela de porco|1 pedaço pequeno (23 g)|102"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Lingüiça calabresa frita|1 unidade (40 g)|120"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Lombo de porco assado|1 fatia (80 g)|242"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Mortadela|1 fatia fina (15 g)|41"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Porco agridoce|1 colher grande (80 g)|277"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Presunto cru |1 fatia (15 g)|30"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Presunto cozido|1 fatia (15 g)|25"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Tender assado|1 fatia média (50 g)|82"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Salame|1 fatia fina (2,5 g)|11"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Salsicha|1 unidade (50 g)|146"
produtos[produtos.length]="CARNES, FRIOS E OVOS|Salsichão|1 fatia (10 g)|45"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Atum em óleo|1 lata (160 g)|448"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Atum em água|1 lata (160 g)|184"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Bacalhau assado|1 posta (100 g)|110"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Camarão cozido|5 grandes(100 g)|82"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Camarão frito|10 médios (100 g)|310"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Estrogonofe de camarão|1 concha|338"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Filé de peixe grelhado|1 médio (120 g)|120"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Filé de peixe à milanesa <br>e molho de camarão|1 médio (100g)|383"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Kani kama|1 stick (16 g)|13"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Lagosta grelhada na manteiga|1 unidade (200 g)|308"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Lula cozida|1/2 concha (100 g)|93"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Lula frita|4 colheres (sopa) (100 g)|190"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Mariscos ao vinagrete|1 prato (sobremesa) |82"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Mexilhão cozido|8 grandes (100 g)|80"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Ostras|6 médias (100 g)|60"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Peixe à escabeche|1 filé médio (100 g)|183"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Peixe ensopado|1 concha (100 g)|130"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Pintado na brasa|1 pedaço médio (80 g)|134"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Polvo refogado|1 colher (sopa) (22 g)|18"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Salmão defumado|1 filé fino (50 g)|75"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Salmão cozido ou grelhado |1 filé (120 g)|240"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Sardinha em conserva (molho de tomate)|1 unidade (25 g)|45"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Sardinha (no azeite)|1 unidade (33 g)|98"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Sardinha frita|1 unidade (40 g)|91"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Sashimi (variado)|1 porção (100 g)|80"
produtos[produtos.length]="PEIXES E FRUTOS DO MAR|Truta assada ou cozida|1/2 unidade (120 g)|162"
produtos[produtos.length]="LEITE E IOGURTES|Coalhada|1 colher (sopa) (20 g)|52"
produtos[produtos.length]="LEITE E IOGURTES|Creme de leite fresco|1 colher (sopa)|52"
produtos[produtos.length]="LEITE E IOGURTES|Creme de leite light|1 colher (sopa)|26"
produtos[produtos.length]="LEITE E IOGURTES|Danoninho|1 unidade (45 g)|66"
produtos[produtos.length]="LEITE E IOGURTES|Iogurte desnatado|1 unidade (200 ml)|90"
produtos[produtos.length]="LEITE E IOGURTES|Iogurte natural|1 unidade (200 ml)|154"
produtos[produtos.length]="LEITE E IOGURTES|Leite condensado|1 colher (sopa)|49"
produtos[produtos.length]="LEITE E IOGURTES|Leite condensado light|1 colher (sopa)|39"
produtos[produtos.length]="LEITE E IOGURTES|Leite desnatado|1 copo (200 ml)|72"
produtos[produtos.length]="LEITE E IOGURTES|Leite integral|1 copo (200 ml)|126"
produtos[produtos.length]="LEITE E IOGURTES|Leite semidesnatado|1 copo (200 ml)|90"
produtos[produtos.length]="LEITE E IOGURTES|Yakult|1 unidade (80 g)|51"
produtos[produtos.length]="QUEIJOS|Brie|1 fatia média (22 g)|57"
produtos[produtos.length]="QUEIJOS|Camembert|1 fatia média (25 g)|68"
produtos[produtos.length]="QUEIJOS|Catupiry|1 colher (sopa)|75"
produtos[produtos.length]="QUEIJOS|Cheddar|1 fatia fina (15 g)|63"
produtos[produtos.length]="QUEIJOS|Cottageintegral|1 colher (sopa)|37"
produtos[produtos.length]="QUEIJOS|Cottage desnatado|1 colher (sopa)|30"
produtos[produtos.length]="QUEIJOS|Cream cheese|1 colher (sopa)|105"
produtos[produtos.length]="QUEIJOS|Cream cheese light|1 colher (sopa)|62"
produtos[produtos.length]="QUEIJOS|Emmental|1 fatia pequena (35 g)|140"
produtos[produtos.length]="QUEIJOS|Gorgonzola|1 fatia média (38 g)|164"
produtos[produtos.length]="QUEIJOS|Minas|1 fatia média (30 g)|73"
produtos[produtos.length]="QUEIJOS|Minas light|1 fatia média (30 g)|46"
produtos[produtos.length]="QUEIJOS|Mussarela|1 fatia fina (20 g)|65"
produtos[produtos.length]="QUEIJOS|Mussarela de búfala|1 unidade (45 g)|74"
produtos[produtos.length]="QUEIJOS|Parmesão ralado|1 colher (sopa)|27"
produtos[produtos.length]="QUEIJOS|Polenguinho|1 unidade (20 g)|50"
produtos[produtos.length]="QUEIJOS|Prato|1 fatia fina (15 g)|59"
produtos[produtos.length]="QUEIJOS|Prato light|1 fatia fina (15 g)|35"
produtos[produtos.length]="QUEIJOS|Provolone|1 fatia fina (15 g)|51"
produtos[produtos.length]="QUEIJOS|Requeijão|1 colher (sopa)|86"
produtos[produtos.length]="QUEIJOS|Requeijão light|1 colher (sopa)|57"
produtos[produtos.length]="QUEIJOS|Ricota|1 fatia média (30 g)|51"
produtos[produtos.length]="QUEIJOS|Ricota light|1 fatia média (30 g)|39"
produtos[produtos.length]="MASSAS E CIA.|Cannelloni de frango|1 unidade (50 g)|97"
produtos[produtos.length]="MASSAS E CIA.|Cannelloni de ricota|1 unidade (55 g)|135"
produtos[produtos.length]="MASSAS E CIA.|Cappellettide carne|1 xícara(100 g)|282"
produtos[produtos.length]="MASSAS E CIA.|Lasanha|1 colher sopa (50 g)|104"
produtos[produtos.length]="MASSAS E CIA.|Macarrão à bolonhesa|1/2 xícara(115 g)|142"
produtos[produtos.length]="MASSAS E CIA.|Macarrão cozido|1/2 xícara (100 g)|110"
produtos[produtos.length]="MASSAS E CIA.|Macarrão ao sugo|1/2 xícara (100 g)|102"
produtos[produtos.length]="MASSAS E CIA.|Macarrão com rúcula e queijo|1/2xícara (80 g)|262"
produtos[produtos.length]="MASSAS E CIA.|Nhoque ao sugo|1 colher sopa (30 g)|42"
produtos[produtos.length]="MASSAS E CIA.|Panqueca|1 unidade (50 g)|95"
produtos[produtos.length]="MASSAS E CIA.|Panqueca de carne|1 unidade (80 g)|228"
produtos[produtos.length]="MASSAS E CIA.|Pizza calabresa (sem mussarela)|1 fatia|239"
produtos[produtos.length]="MASSAS E CIA.|Pizza calabresa (com mussarela)|1 fatia|320"
produtos[produtos.length]="MASSAS E CIA.|Pizza de mussarela|1 fatia|278"
produtos[produtos.length]="MASSAS E CIA.|Pizza portuguesa|1 fatia|302"
produtos[produtos.length]="MASSAS E CIA.|Rolinho primavera|1 unidade (60 g)|95"
produtos[produtos.length]="MASSAS E CIA.|Quiche de queijo|1 fatia (100 g)|288"
produtos[produtos.length]="MASSAS E CIA.|Torta de camarão|1 fatia (100 g)|310"
produtos[produtos.length]="MASSAS E CIA.|Torta de frango|1 fatia (120 g)|282"
produtos[produtos.length]="MASSAS E CIA.|Torta de legumes|1 fatia (100 g)|241"
produtos[produtos.length]="MASSAS E CIA.|Torta de palmito|1 fatia (100 g)|260"
produtos[produtos.length]="MASSAS E CIA.|Torta de queijo|1 fatia (100 g)|320"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Arroz à grega|1 colher (sopa)|35"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Arroz branco cozido|1 colher (sopa)|41"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Arroz chop-suey|1 colher (sopa)|43"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Arroz-de-carreteiro|1 colher (sopa)|63"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Arroz integral cozido|1 colher (sopa)|54"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Aveia em flocos|1 colher (sopa)|26"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Baked potato com requeijão light|1 unidade|305"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Batata cozida|1 unidade média (90 g)|76"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Batata-doce cozida|1 fatia média (70 g)|72"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Batata frita|1 prato sobremesa (200 g)|545"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Batata sauté|1 colher (sopa)|38"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Cereal tipo All-Bran|1 colher (sopa)|23"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Corn Flakes|1 colher (sopa)|15"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Creme de milho|1 colher (sopa)|35"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Farinha de mandioca|1 colher (sopa)|57"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Farofa|1 colher (sopa)|71"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Feijão|1 colher (sopa)|12"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Granola|1 colher (sopa)|28"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Grão-de-bico|1 colher (sopa)|26"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Lentilha|1 colher (sopa)|19"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Mandioca frita|1 pedaço pequeno (50 g)|176"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Mandioca cozida|1 pedaço médio (90 g)|108"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Pipoca|1 saco pequeno (60 g)|240"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Polenta cozida|1 fatia (100 g)|172"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Polenta frita|1 quadrado (50 g)|184"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Purê de batata|1 colher (sopa)|56"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Salada de batata com maionese|1 colher (sopa)|53"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Salada de feijão-fradinho|1 colher (sopa)|51"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Sopa de ervilha|1 concha média (130 g)|169"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Sopa de feijão com macarrão|1 concha média (160 g)|211"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Tofu (queijo de soja)|1 fatia média(30 g)|60"
produtos[produtos.length]="GRÃOS, TUBÉRCULOS E CEREAIS|Tutu de feijão|1 colher (sopa) (30 g)|34"
produtos[produtos.length]="PÃES E BISCOITOS|Baguete (pequena)|1 unidade (55 g)|156"
produtos[produtos.length]="PÃES E BISCOITOS|Biscoito de fibras|1 unidade|36"
produtos[produtos.length]="PÃES E BISCOITOS|Biscoito doce|1 unidade|27"
produtos[produtos.length]="PÃES E BISCOITOS|Biscoito recheado|1 unidade|64"
produtos[produtos.length]="PÃES E BISCOITOS|Biscoito waffle|1 unidade|47"
produtos[produtos.length]="PÃES E BISCOITOS|Bisnaguinha|1 unidade (30 g)|59"
produtos[produtos.length]="PÃES E BISCOITOS|Ciabatta(pequena)|1 unidade (70 g)|160"
produtos[produtos.length]="PÃES E BISCOITOS|Cookie de chocolate|1 unidade (10 g)|48"
produtos[produtos.length]="PÃES E BISCOITOS|Cream cracker, água e sal|1 unidade (8 g)|32"
produtos[produtos.length]="PÃES E BISCOITOS|Croissant|1 unidade (40 g)|165"
produtos[produtos.length]="PÃES E BISCOITOS|Muffin|1 unidade (45 g)|173"
produtos[produtos.length]="PÃES E BISCOITOS|Pão de batata|1 unidade|165"
produtos[produtos.length]="PÃES E BISCOITOS|Pão de fôrma|1 fatia|68"
produtos[produtos.length]="PÃES E BISCOITOS|Pão francês|1 unidade|134"
produtos[produtos.length]="PÃES E BISCOITOS|Pão francês sem miolo|1 unidade|81"
produtos[produtos.length]="PÃES E BISCOITOS|Pão de glúten, centeio|1 fatia|72"
produtos[produtos.length]="PÃES E BISCOITOS|Pão light|1 fatia|52"
produtos[produtos.length]="PÃES E BISCOITOS|Pão sírio|1 unidade média|160"
produtos[produtos.length]="PÃES E BISCOITOS|Pão italiano|1 fatia média|85"
produtos[produtos.length]="PÃES E BISCOITOS|Pão de queijo|1 grande|173"
produtos[produtos.length]="PÃES E BISCOITOS|Stick|1 unidade (3 g)|4"
produtos[produtos.length]="PÃES E BISCOITOS|Torrada|1 unidade (12 g)|36"
produtos[produtos.length]="DOCES E SOBREMESAS|Açúcar|1 colher (sopa)|40"
produtos[produtos.length]="DOCES E SOBREMESAS|Bala|1 unidade (5 g)|20"
produtos[produtos.length]="DOCES E SOBREMESAS|Barra de cereais (de banana)|1 unidade (25 g)|90"
produtos[produtos.length]="DOCES E SOBREMESAS|Batom Garoto|1 unidade (16g)|66"
produtos[produtos.length]="DOCES E SOBREMESAS|Beijinho|1 unidade (30 g)|105"
produtos[produtos.length]="DOCES E SOBREMESAS|Bis|1 unidade (7,5 g)|39"
produtos[produtos.length]="DOCES E SOBREMESAS|Bolo comum|1 fatia (60 g)|215"
produtos[produtos.length]="DOCES E SOBREMESAS|Bolo diet|1 fatia (60 g)|129"
produtos[produtos.length]="DOCES E SOBREMESAS|Bombom Alpino|1 unidade (13g)|69"
produtos[produtos.length]="DOCES E SOBREMESAS|Bombom com cereja|1 unidade (21 g)|99"
produtos[produtos.length]="DOCES E SOBREMESAS|Bombom Serenata de Amor|1 unidade (20g)|88"
produtos[produtos.length]="DOCES E SOBREMESAS|Bombom Sonho de Valsa|1 unidade (21,5 g)|115"
produtos[produtos.length]="DOCES E SOBREMESAS|Brigadeiro|1 unidade (30 g)|121"
produtos[produtos.length]="DOCES E SOBREMESAS|Cereja em calda|1 colher (sobremesa)|39"
produtos[produtos.length]="DOCES E SOBREMESAS|Chiclete|1 unidade(4 g)|14"
produtos[produtos.length]="DOCES E SOBREMESAS|Chocolate|tablete de 30 g|150"
produtos[produtos.length]="DOCES E SOBREMESAS|Creme de papaia|1 taça (150 g)|260"
produtos[produtos.length]="DOCES E SOBREMESAS|Frozen iogurte|1 porção (200 g)|115"
produtos[produtos.length]="DOCES E SOBREMESAS|Frutas em calda|1/2 xícara (60 g)|110"
produtos[produtos.length]="DOCES E SOBREMESAS|Gelatina diet|1 taça (100 g)|15"
produtos[produtos.length]="DOCES E SOBREMESAS|Geléia|1 colher (sopa)|50"
produtos[produtos.length]="DOCES E SOBREMESAS|Goiabada|1 colher (sopa)|40"
produtos[produtos.length]="DOCES E SOBREMESAS|Mel|1 colher (sopa)|30"
produtos[produtos.length]="DOCES E SOBREMESAS|Milk-shake de chocolate|1 copo (250 ml)|575"
produtos[produtos.length]="DOCES E SOBREMESAS|Milk-shake de morango|1 copo (250 ml)|379"
produtos[produtos.length]="DOCES E SOBREMESAS|M&M chocolate|1 pacote (30 g)|134"
produtos[produtos.length]="DOCES E SOBREMESAS|Musse de maracujá |1 taça (150 g)|304"
produtos[produtos.length]="DOCES E SOBREMESAS|Musse de chocolate|1 taça (150 g)|333"
produtos[produtos.length]="DOCES E SOBREMESAS|Panetone|1 fatia pequena (45 g)|122"
produtos[produtos.length]="DOCES E SOBREMESAS|Sorvete à base de fruta |1 picolé|60"
produtos[produtos.length]="DOCES E SOBREMESAS|Sorvete cremoso|1 colher (sopa)|63"
produtos[produtos.length]="DOCES E SOBREMESAS|Sorvete dietchocolate|1 colher (sopa)|44"
produtos[produtos.length]="DOCES E SOBREMESAS|Sorvete diet frutas |1 colher (sopa)|31"
produtos[produtos.length]="DOCES E SOBREMESAS|Sundae |1 pequeno (250 g)|265"
produtos[produtos.length]="DOCES E SOBREMESAS|Suspiro |1 unidade (10 g)|38"
produtos[produtos.length]="DOCES E SOBREMESAS|Tortas doces|1 fatia pequena (70 g)|390"
produtos[produtos.length]="DOCES E SOBREMESAS|Trufa de chocolate|1 unidade (30g)|121"
produtos[produtos.length]="PETISCOS|Acarajé |1 unidade média|169"
produtos[produtos.length]="PETISCOS|Azeitona|1 unidade média|11"
produtos[produtos.length]="PETISCOS|Bolinho de bacalhau|1 unidade média|80"
produtos[produtos.length]="PETISCOS|Casquinha de siri|1 unidade média|380"
produtos[produtos.length]="PETISCOS|Coxinha de frango|1 unidade grande|400"
produtos[produtos.length]="PETISCOS|Croquete de carne|1 unidade pequena|87"
produtos[produtos.length]="PETISCOS|Croquete de carne|1 unidade grande|346"
produtos[produtos.length]="PETISCOS|Empadinha|1 unidade |108"
produtos[produtos.length]="PETISCOS|Empanada de carne|1 unidade|234"
produtos[produtos.length]="PETISCOS|Esfiha de carne|1 unidade média |206"
produtos[produtos.length]="PETISCOS|Esfiha de queijo|1 unidade média|238"
produtos[produtos.length]="PETISCOS|Folheado de presunto|1 unidade|370"
produtos[produtos.length]="PETISCOS|Pastel de carne|1 unidade grande|324"
produtos[produtos.length]="PETISCOS|Pastel de queijo|1 unidade grande|361"
produtos[produtos.length]="PETISCOS|Quibe|1 unidade grande grande|318"
produtos[produtos.length]="PETISCOS|Risole de carne |1 unidade média|149"
produtos[produtos.length]="PETISCOS|Sushi califórnia|1 unidade|32"
produtos[produtos.length]="SANDUÍCHES|Bauru|1 unidade |410"
produtos[produtos.length]="SANDUÍCHES|Big Mac|1 unidade|590"
produtos[produtos.length]="SANDUÍCHES|Beirute completo|1 unidade |490"
produtos[produtos.length]="SANDUÍCHES|Beirute de peito de peru|1 unidade |295"
produtos[produtos.length]="SANDUÍCHES|Cachorro quente|1 unidade|330"
produtos[produtos.length]="SANDUÍCHES|Cheeseburger McDonald\'s|1 unidade|358"
produtos[produtos.length]="SANDUÍCHES|Hambúrguer|1 unidade|290"
produtos[produtos.length]="SANDUÍCHES|Misto-quente|1 unidade|370"
produtos[produtos.length]="PRATOS VARIADOS|Bobó de camarão|1 colher (sopa)|46"
produtos[produtos.length]="PRATOS VARIADOS|Canja|1 concha|110"
produtos[produtos.length]="PRATOS VARIADOS|Cuscuz à paulista|1 fatia média (100 g)|328"
produtos[produtos.length]="PRATOS VARIADOS|Dobradinha|1 colher (sopa)|39"
produtos[produtos.length]="PRATOS VARIADOS|Feijoada|1 concha|346"
produtos[produtos.length]="PRATOS VARIADOS|Goulash|1 colher grande (90 g)|186"
produtos[produtos.length]="PRATOS VARIADOS|Moqueca de camarão|1 concha|320"
produtos[produtos.length]="PRATOS VARIADOS|Moqueca de peixe|1 concha|290"
produtos[produtos.length]="PRATOS VARIADOS|Paella|1 colher grande (90 g)|180"
produtos[produtos.length]="PRATOS VARIADOS|Pimentão assado recheado com carne moída|1 unidade (200 g)|298"
produtos[produtos.length]="PRATOS VARIADOS|Risoto de frango |1 colher (sopa)|63"
produtos[produtos.length]="PRATOS VARIADOS|Risoto de funghi|1 colher (sopa)|78"
produtos[produtos.length]="PRATOS VARIADOS|Salpicão de frango|1 colher (sopa)|47"
produtos[produtos.length]="PRATOS VARIADOS|Suflê de espinafre|1 colher (sopa)|45"
produtos[produtos.length]="PRATOS VARIADOS|Suflê de legumes|1 colher (sopa)|38"
produtos[produtos.length]="PRATOS VARIADOS|Suflê de queijo|1 colher (sopa)|55"
produtos[produtos.length]="PRATOS VARIADOS|Vatapá|1 colher grande (90 g)|320"
produtos[produtos.length]="PRATOS VARIADOS|Yakissoba |1 colher grande (75 g)|112"
produtos[produtos.length]="ÓLEOS E GORDURAS|Azeite e outros óleos|1 colher (chá) |72"
produtos[produtos.length]="ÓLEOS E GORDURAS|Maionese |1 colher (chá)|53"
produtos[produtos.length]="ÓLEOS E GORDURAS|Maionese light|1 colher (chá)|27"
produtos[produtos.length]="ÓLEOS E GORDURAS|Manteiga e margarina |1 colher (chá)|60 "
produtos[produtos.length]="ÓLEOS E GORDURAS|Margarina light|1 colher (chá)|29"
produtos[produtos.length]="MOLHOS E TEMPEROS|Ketchup|1 colher (sopa)|22"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho ao curry |1 colher (sopa)|31"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho branco|1 colher (sopa)|72"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho inglês |1 colher (sopa)|11"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho de iogurte|1 colher (sopa)|29"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho madeira|1 colher (sopa)|7,5"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho de pimenta|1 colher (chá)|1,5"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho para salada italiano|1 colher (chá)|48"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho tártaro|1 colher (sopa)|75"
produtos[produtos.length]="MOLHOS E TEMPEROS|Molho de tomate refogado|4 colheres (sopa)|57"
produtos[produtos.length]="MOLHOS E TEMPEROS|Mostarda|1 colher (sopa)|11"
produtos[produtos.length]="MOLHOS E TEMPEROS|Shoyu|1 colher (sopa)|7"
produtos[produtos.length]="BEBIDAS|Água-de-coco|1 copo (200 ml)|40"
produtos[produtos.length]="BEBIDAS|Caipirinha|1 copo (100 ml)|260"
produtos[produtos.length]="BEBIDAS|Cerveja|1 lata(350 ml)|147 "
produtos[produtos.length]="BEBIDAS|Chá diet|1 copo (200 ml)|3"
produtos[produtos.length]="BEBIDAS|Champanhe seco|1 taça (120)|85"
produtos[produtos.length]="BEBIDAS|Chope|1 copo (300 ml)|126 "
produtos[produtos.length]="BEBIDAS|Coquetel de frutas|1 copo (100 ml)|80"
produtos[produtos.length]="BEBIDAS|Licor |1 cálice (50 ml)|170"
produtos[produtos.length]="BEBIDAS|Refrigerante diet |1 copo (200 ml)|3"
produtos[produtos.length]="BEBIDAS|Refrigerante normal|1 copo (200 ml)|115"
produtos[produtos.length]="BEBIDAS|Prosecco|1 taça (120 ml)|85"
produtos[produtos.length]="BEBIDAS|Suco de laranja |1 copo (250 ml)|160 "
produtos[produtos.length]="BEBIDAS|Uísque ou vodca |1 dose (50 ml)|108"
produtos[produtos.length]="BEBIDAS|Vinho branco seco|1 taça (120 ml)|90"
produtos[produtos.length]="BEBIDAS|Vinho branco doce|1 taça (120)|170"
produtos[produtos.length]="BEBIDAS|Vinho tinto seco|1 taça (120 ml)|110"
produtos[produtos.length]="BEBIDAS|Vitamina de frutas com leite|1 copo (250 ml)|95"
*/