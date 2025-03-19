// Words.js
const words = [
    // Tecnologia
    { word: "blockchain", hint: "Tecnologia de registro distribuído usada em criptomoedas" },
    { word: "algoritmo", hint: "Sequência de passos para resolver um problema" },
    { word: "criptografia", hint: "Técnica de proteger informações através de códigos" },
    { word: "firewall", hint: "Sistema de segurança que protege redes de computadores" },
    { word: "robótica", hint: "Área que estuda a criação e operação de robôs" },
  
    // Ciência
    { word: "fotossíntese", hint: "Processo pelo qual plantas convertem luz em energia" },
    { word: "mitocôndria", hint: "Organela responsável pela produção de energia nas células" },
    { word: "ecossistema", hint: "Comunidade de organismos interagindo com o meio ambiente" },
    { word: "cromossomo", hint: "Estrutura que contém o material genético nas células" },
    { word: "bactéria", hint: "Microrganismo unicelular presente em diversos ambientes" },
  
    // Geografia
    { word: "arquipélago", hint: "Conjunto de ilhas próximas umas das outras" },
    { word: "península", hint: "Extensão de terra cercada por água em três lados" },
    { word: "deserto", hint: "Região com pouca precipitação e vegetação escassa" },
    { word: "savana", hint: "Bioma tropical com gramíneas e árvores esparsas" },
    { word: "floresta", hint: "Grande extensão de terreno coberto por árvores" },
  
    // História
    { word: "pirâmide", hint: "Estrutura monumental do antigo Egito" },
    { word: "renascimento", hint: "Período de renovação cultural na Europa" },
    { word: "revolução", hint: "Mudança radical em uma sociedade ou sistema" },
    { word: "cruzada", hint: "Expedições religiosas medievais" },
    { word: "independência", hint: "Condição de um país que se governa sozinho" },
  
    // Arte e Literatura
    { word: "impressionismo", hint: "Movimento artístico focado em efeitos de luz" },
    { word: "soneto", hint: "Poema de 14 versos com estrutura específica" },
    { word: "surrealismo", hint: "Movimento artístico que explora o inconsciente" },
    { word: "escultura", hint: "Arte de criar formas tridimensionais" },
    { word: "metáfora", hint: "Figura de linguagem que compara conceitos" },
  
    // Matemática
    { word: "geometria", hint: "Ramo da matemática que estuda formas" },
    { word: "cálculo", hint: "Estudo de taxas de variação e acumulação" },
    { word: "fractal", hint: "Padrão geométrico que se repete em diferentes escalas" },
    { word: "logaritmo", hint: "Expoente ao qual uma base deve ser elevada" },
    { word: "probabilidade", hint: "Estudo matemático da chance de eventos" },
  
    // Astronomia
    { word: "nebulosa", hint: "Nuvem interestelar de poeira e gás" },
    { word: "supernova", hint: "Explosão estelar extremamente brilhante" },
    { word: "buraconegro", hint: "Região do espaço com gravidade intensa" },
    { word: "constelação", hint: "Padrão reconhecível de estrelas" },
    { word: "galáxia", hint: "Sistema de bilhões de estrelas, poeira e gás" },
  
    // Biologia
    { word: "evolução", hint: "Processo de mudança nas espécies ao longo do tempo" },
    { word: "biodiversidade", hint: "Variedade de vida em um ecossistema" },
    { word: "taxonomia", hint: "Ciência de classificação de organismos" },
    { word: "genética", hint: "Estudo da hereditariedade e variação" },
    { word: "ecologia", hint: "Ramo da biologia que estuda as relações entre seres vivos" },
  
    // Química
    { word: "molécula", hint: "Grupo de átomos ligados quimicamente" },
    { word: "catalisador", hint: "Substância que acelera reações químicas" },
    { word: "polímero", hint: "Macromolécula composta por unidades repetidas" },
    { word: "ácido", hint: "Substância com pH menor que 7" },
    { word: "elétron", hint: "Partícula subatômica com carga negativa" },
  
    // Cultura Geral
    { word: "olimpíadas", hint: "Evento esportivo internacional quadrienal" },
    { word: "democracia", hint: "Sistema de governo pelo povo" },
    { word: "biodiesel", hint: "Combustível renovável derivado de óleos vegetais" },
    { word: "sustentabilidade", hint: "Prática de uso responsável de recursos" },
    { word: "globalização", hint: "Interconexão internacional de mercados" }
  ];
  
  export const getRandomWord = (previousWord) => {
    const filtered = words.filter(w => w.word !== previousWord);
    return filtered[Math.floor(Math.random() * filtered.length)];
  };
  
  export default words;