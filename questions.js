const questionsData = {
  "Deportes": [
    { question: "¿Quién ganó el premio al Jugador del Partido en la final de la Copa del Mundo 2014?", options: ["Sergio Agüero", "Lionel Messi", "Mario Götze", "Bastian Schweinsteiger"], correct: 2 },
    { question: "Después de perder a un jugador clave en el primer partido, ¿qué equipo llegó a las semifinales de la Eurocopa 2020?", options: ["Dinamarca", "España", "Gales", "Inglaterra"], correct: 0 },
    // { question: "¿Qué exinternacional bielorruso jugó en el Arsenal entre 2005 y 2008?", options: ["Alexander Hleb", "Maksim Romaschenko", "Valyantsin Byalkevich", "Yuri Zhenov"], correct: 0 },
    // { question: "¿Quién es el máximo goleador actual de la UEFA Champions League?", options: ["Alan Shearer", "Thierry Henry", "Cristiano Ronaldo", "Robert Lewandowski"], correct: 0 },
    { question: "¿A qué equipo venció el Oporto en la final de la Champions League de 2004?", options: ["Deportivo de La Coruña", "Bayern de Múnich", "Barcelona", "Mónaco"], correct: 3},
    { question: "¿Quién es el máximo goleador de la historia de la primer división argentina?", options: ["Martin Palermo", "Angel Labruna", "Arsenio Erico", "Francisco Varillo"], correct: 1 },
    { question: "¿Dónde se jugó el mundial 1938?", options: ["Italia", "Francia", "Alemania", "Inglaterra"], correct: 1 },
    { question: "¿En qué año obtuvo Argentina su primera medalla de oro olímpica?", options: ["1924", "1948", "1952", "1960"], correct: 0 }
  ],
  "Cultura & Mundi": [
    // { question: "¿Cuál es la ciudad más antigua de Europa?", options: ["Londres", "Roma", "Matera", "Atenas"], correct: 3 },]
    { question: "¿Cuál es el país más grande de África?", options: ["Congo", "Libia", "Argelia", "Sudáfrica"], correct: 2 },
    { question: "¿Cuántos océanos hay en el planeta tierra?", options: ["4", "5", "6", "7"], correct: 1 },
    { question: "¿Qué país no está en espera para unirse a la unión europea?", options: ["Macedonia del norte", "Suiza", "Turquía", "Georgia"], correct: 1 },
    { question: "¿Cuál es la capital de Nigeria?", options: ["Abuja", "Lagos", "Kano", "Nairobi"], correct: 0 },
    { question: "¿Cuál es el río más largo del mundo?", options: ["Nilo", "Amazonas","Misisipi", "Yangtsé"], correct: 1 },
    { question: "¿En qué continente se encuentra el desierto del Sahara?", options: ["Asia", "África", "Oceanía", "América"], correct: 1 },
    { question: "¿Cuál es la capital de Australia?", options: ["Sídney", "Canberra", "Melbourne", "Brisbane"], correct: 1 },
    // { question: "¿Qué país tiene la mayor población del mundo?", options: ["Estados Unidos", "India", "China", "Brasil"], correct: 2 },
    { question: "¿En qué océano se encuentra la isla de Madagascar?", options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"], correct: 1 },
    { question: "¿Qué país tiene la mayor reserva de agua dulce del mundo?", options: ["Canadá", "Brasil", "Rusia", "Estados Unidos"], correct: 1 },  
    // { question: "¿Cuál es la provincia argentina con más superficie de glaciares?", options: ["Mendoza", "Santa Cruz", "Tierra del Fuego", "Chubut"], correct: 1 },
    { question: "¿Quién escribió la novela 'Sobre héroes y tumbas'?", options: ["Julio Cortázar", "Adolfo Bioy Casares", "Ernesto Sabato", "Ricardo Piglia"], correct: 2 },
    { question: "¿Qué país fue sede del primer Mundial de fútbol femenino?", options: ["Suecia", "China", "Estados Unidos", "Alemania"], correct: 1 },
    { question: "¿Cuál es el nombre oficial de la moneda utilizada actualmente en Japón?", options: ["Yen", "Won", "Renminbi", "Baht"], correct: 0 },
    { question: "¿En qué ciudad argentina se encuentra el Museo Nacional de Bellas Artes?", options: ["Rosario", "Buenos Aires", "Córdoba", "Salta"], correct: 1 },
    { question: "¿Cuál es la montaña más alta FUERA de Asia?", options: ["Everest", "Denali", "Kilimanjaro", "Aconcagua"], correct: 3 },
    { question: "¿En qué año se formó oficialmente la ONU?", options: ["1942", "1945", "1951", "1960"], correct: 1 },
    { question: "¿Cuál es el escritor argentino que ganó el Premio Nobel de Literatura?", options: ["Jorge Luis Borges", "Manuel Puig", "Ningún argentino ha ganado el Nobel de Literatura", "Victoria Ocampo"], correct: 2 }
  ],
  "Ciencias": [
    { question: "¿Cuál es el planeta más grande del sistema solar?", options: ["Marte", "Saturno", "Júpiter", "Venus"], correct: 2 },
    { question: "¿Cuántos elementos químicos tiene la tabla periódica actualmente?", options: ["92", "118", "108", "102"], correct: 1 },
    { question: "¿Qué científico formuló la teoría de la relatividad?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"], correct: 1 },
    { question: "¿Cómo se llama el proceso por el cual las plantas producen su propio alimento usando la luz solar?", options: ["Respiración", "Fotosíntesis", "Fermentación", "Transpiración"], correct: 1 },
    { question: "¿Cuál es el órgano más grande del cuerpo humano?", options: ["El hígado", "El corazón", "La piel", "El cerebro"], correct: 2 },
    { question: "¿Qué partícula subatómica tiene carga negativa?", options: ["Protón", "Electrón", "Neutrón", "Positrón"], correct: 1 },
    { question: "¿Cuál es la fórmula química de la sal?", options: ["CO₂", "Na₂Cl4", "H₂O", "NaCl"], correct: 3 },
    { question: "¿Qué gas es esencial para la respiración humana?", options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Helio"], correct: 1 },
    { question: "¿Cuál es la unidad de medida de la intensidad de corriente eléctrica?", options: ["Voltio", "Amperio", "Ohmio", "Watt"], correct: 1 },
    { question: "¿Qué científico es conocido como el padre de la genética?", options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "James Watson"], correct: 1 },
    // { question: "¿Qué órgano permite la visión en los seres humanos?", options: ["El oído", "El ojo", "La nariz", "La piel"], correct: 1 },
    { question: "¿Qué mineral es necesario para el buen funcionamiento de la tiroides?", options: ["Calcio", "Yodo", "Hierro", "Fósforo"], correct: 1 },
    { question: "¿En qué estado de la materia se encuentra el aire?", options: ["Líquido", "Sólido", "Gaseoso", "Plasma"], correct: 2 },
    { question: "¿Cómo se llama el satélite natural de la Tierra?", options: ["Marte", "Sol", "Luna", "Venus"], correct: 2 },
    { question: "¿Qué instrumento se utiliza para medir la temperatura?", options: ["Barómetro", "Termómetro", "Higrómetro", "Anemómetro"], correct: 1 }
  ],
   "TAX 1": [
  { question: "Which are the forms related to \"ECI\" and \"FDAP\" reporting?", options: ["8804/05s & 1042/1042s", "1065 & 1120", "8082 & 8865", "926 & 1042"], correct: 0 },
  { question: "The federal corporate tax rate is:", options: ["15%", "21%", "Corporations don't pay taxes", "35%"], correct: 1 },
  { question: "What is the current limitation on use of NOLs for U.S. corporations?", options: ["100% offset", "80% offset", "No deduction", "Only in year incurred"], correct: 1 },
  { question: "What apportionment formula are states increasingly adopting?", options: ["Equally weighted three factor", "Single sales factor", "Triple weighted sales factor"], correct: 1 },
  { question: "What does code 20AE stand for in a K-1?", options: [ "Excess Taxable Income", "Earnings Before Interest", "Excess Business Interest Income"], correct: 0 },
  // { question: "When working on a Foreign partnership with PFICs, how are you reporting?", options: ["Part VII K-3 & 8621", "Only 8621", "Only Part VII K-3"], correct: 2 },
  { question: "My Entity is foreign and has PFICs, do I need to complete form 8621?", options: ["Yes", "No"], correct: 1 },
  { question: "Which form would not be completed by a partnership?", options: ["8621", "8804", "926", "1042"], correct: 2 },
  { question: "What is considered a reportable partner for M-3 purposes?", options: ["Entity filing Sch. M-3 with ≥50% ownership", "All partners", "Only foreign partners", "All domestic partners"], correct: 0 },
  { question: "How are capital losses treated under IRC §1211?", options: ["Deducted vs ordinary income", "Fully deductible", "Deductible only to extent of capital gains", "Not deductible"], correct: 2 }
     ],
  "TAX 2": [
    { 
        "question": "If your partnership had a STCG or LTCG sale at their level, which form alongside Schedule D has to be included in a 1065 form?", 
        "options": [ "8916", "8453", "8949", "8621"], 
        "correct": 2
    },
    { 
        "question": "When do we need to fill Schedule B-1 in a 1065 form?", 
        "options": ["When a partner owns more than 50% of the partnership", "When the partnership owns more than 50% of an Underlying"], 
        "correct": 0 
    },
    { 
        "question": "When do we need to fill questions 3A or 3B of the Schedule B in a 1065 form?", 
        "options": [ "When a partner owns more than 50% of the partnership", "When the partnership owns more than 50% of an Underlying"], 
        "correct": 1
    },
    { 
        "question": "If I miss filling an extension for a partnership, when do I have to fill the return?", 
        "options": ["March 15", "April 15", "February 15", "January 1"], 
        "correct": 0
    },
    { 
        "question": "How many months is the time extension if we fill an extension of either form 1065 or 1120?", 
        "options": [ "3 months", "4 months", "6 months","2 weeks"], 
        "correct": 2 
    },
    { 
        "question": "What does NOL stand for?", 
        "options": [ "None or Less", "Net Operating Loss", "Not on long", "Not Operation lore"], 
        "correct": 1 
    },
    { 
        "question": "What is the involuntary condition to fill Schedule M3 Part II and III?", 
        "options": [ "Total Assets >10M", "Average Assets >50M", "Average Assets >10M", "Total Assets >50M"], 
        "correct": 3
    }
]
};










