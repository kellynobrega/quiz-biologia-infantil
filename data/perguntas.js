const banco = {
    ecologia: [
                { q: "Onde o papel deve dormir para ser reciclado? (Lata...)", ops: ["Vermelha", "Azul", "Verde", "Amarela"], c: 1, img: "https://postimg.cc" },
                { q: "Qual é a cor da lata da garrafinha de plástico?", ops: ["Amarela", "Azul", "Vermelha", "Verde"], c: 2, img: "https://postimg.cc" },
                { q: "O vidro quebrou! Qual lixeira ele usa?", ops: ["Verde", "Azul", "Vermelha", "Amarela"], c: 0, img: "https://postimg.cc" },
                { q: "A latinha de metal brilha em qual cor?", ops: ["Verde", "Vermelha", "Azul", "Amarela"], c: 3, img: "https://postimg.cc" },
                { q: "Ao escovar os dentes, a torneira deve:", ops: ["Dançar", "Ficar fechada", "Cantar", "Ficar aberta"], c: 1, img: "https://postimg.cc" },
                { q: "Onde o papel de bala deve morar?", ops: ["No bolso", "No rio", "Na lixeira", "No chão"], c: 2, img: "https://postimg.cc" },
                { q: "Casca de banana vira o quê?", ops: ["Plástico", "Adubo", "Vidro", "Pilhas"], c: 1, img: "https://postimg.cc" },
                { q: "O que a reciclagem faz com o lixo?", ops: ["Some", "Queima", "Faz novo", "Esconde"], c: 2, img: "https://postimg.cc" },
                { q: "As árvores fazem o quê de melhor?", ops: ["Fumaça", "Limpam o ar", "Barulho", "Secam"], c: 1, img: "https://postimg.cc" },
                { q: "Apagar a luz dá um abraço na...?", ops: ["Natureza", "Escuro", "Monstro", "Ninguém"], c: 0, img: "https://postimg.cc" }
            ],
            corpo: [
                { q: "Qual órgão bombeia o sangue?", ops: ["Pulmão", "Coração", "Estômago", "Cérebro"], c: 1, img: "https://postimg.cc" },
                { q: "Qual órgão usamos para pensar?", ops: ["Língua", "Cérebro", "Mão", "Pé"], c: 1, img: "https://postimg.cc" },
                { q: "Para respirar o ar puro usamos o?", ops: ["Rim", "Pulmão", "Estômago", "Dente"], c: 1, img: "https://postimg.cc" },
                { q: "Para onde a comida vai?", ops: ["Cérebro", "Pé", "Estômago", "Ouvido"], c: 2, img: "https://postimg.cc" },
                { q: "Quantos sentidos temos?", ops: ["2", "3", "5", "10"], c: 2, img: "https://postimg.cc" },
                { q: "Sentido para ver as cores?", ops: ["Tato", "Visão", "Olfato", "Paladar"], c: 1, img: "https://postimg.cc" },
                { q: "Sentido para ouvir pássaros?", ops: ["Visão", "Tato", "Audição", "Paladar"], c: 2, img: "https://postimg.cc" },
                { q: "Sentido para sentir o gosto?", ops: ["Paladar", "Olfato", "Visão", "Tato"], c: 0, img: "https://postimg.cc" },
                { q: "Sentido para cheirar flores?", ops: ["Tato", "Paladar", "Olfato", "Audição"], c: 2, img: "https://postimg.cc" },
                { q: "O que nos deixa em pé?", ops: ["Pele", "Cabelo", "Ossos", "Unhas"], c: 2, img: "https://postimg.cc" }
            ],
            natureza: [
                { q: "Plantas precisam de?", ops: ["Pizza", "Sol e Água", "Suco", "TV"], c: 1, img: "https://postimg.cc" },
                { q: "Qual a cor das folhas?", ops: ["Azul", "Vermelha", "Verde", "Rosa"], c: 2, img: "https://postimg.cc" },
                { q: "Fica embaixo da terra?", ops: ["Folha", "Flor", "Raiz", "Fruto"], c: 2, img: "https://postimg.cc" },
                { q: "O Sol é o quê?", ops: ["Planeta", "Estrela", "Lua", "Nuvem"], c: 1, img: "https://postimg.cc" },
                { q: "Cai das nuvens?", ops: ["Fogo", "Sol", "Chuva", "Vento"], c: 2, img: "https://postimg.cc" },
                { q: "Abelhas buscam o?", ops: ["Água", "Néctar", "Mel", "Terra"], c: 1, img: "https://postimg.cc" },
                { q: "Flores viram o quê?", ops: ["Folhas", "Frutos", "Galhos", "Pedras"], c: 1, img: "https://postimg.cc" },
                { q: "Dá maçãs vermelhas?", ops: ["Laranja", "Macieira", "Banana", "Pera"], c: 1, img: "https://postimg.cc" },
                { q: "Plantas nascem das?", ops: ["Pedras", "Sementes", "Nuvens", "Gelo"], c: 1, img: "https://postimg.cc" },
                { q: "Árvores nos dão?", ops: ["Gelo", "Sombra", "Fogo", "Chocolate"], c: 1, img: "https://postimg.cc" }
            ],
            seres: [
                { q: "Rei da Selva?", ops: ["Zebra", "Elefante", "Leão", "Macaco"], c: 2, img: "https://postimg.cc" },
                { q: "Nos dá o leite?", ops: ["Galinha", "Cobra", "Vaca", "Peixe"], c: 2, img: "https://postimg.cc" },
                { q: "Produz o mel?", ops: ["Formiga", "Abelha", "Aranha", "Mosca"], c: 1, img: "https://postimg.cc" },
                { q: "Vira borboleta?", ops: ["Grilo", "Lagarta", "Minhoca", "Aranha"], c: 1, img: "https://postimg.cc" },
                { q: "Pescoço comprido?", ops: ["Girafa", "Elefante", "Zebra", "Urso"], c: 0, img: "https://postimg.cc" },
                { q: "Onde o peixe mora?", ops: ["Terra", "Ar", "Água", "Fogo"], c: 2, img: "https://postimg.cc" },
                { q: "Põe ovos?", ops: ["Cachorro", "Galinha", "Gato", "Vaca"], c: 1, img: "https://postimg.cc" },
                { q: "O sapinho faz o quê?", ops: ["Voa", "Nada", "Pula", "Corre"], c: 2, img: "https://postimg.cc" },
                { q: "Tem penas coloridas?", ops: ["Peixe", "Cachorro", "Pássaro", "Cobra"], c: 2, img: "https://postimg.cc" },
                { q: "Urso Polar mora no?", ops: ["Deserto", "No gelo", "Floresta", "Mar"], c: 1, img: "https://postimg.cc" }
            ]
};
