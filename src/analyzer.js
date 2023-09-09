const analyzer = {
  getWordCount: (text) => {
    // Recuento de palabras.
    const words = text.trim().split(/\s+/);
    return words.length;
  },
  getCharacterCount: (text) => {
    // Recuento de caracteres.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    // Recuento de caracteres excluyendo espacios y signos de puntuación.
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, ''); // Eliminar espacios y puntuación
    return cleanedText.length;
  },


  getAverageWordLength: (text) => {
    const words = text.split(/\s+/);
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    const average = words.length > 0 ? totalWordLength / words.length : 0;
    return parseFloat(average.toFixed(2)); // Redondear a 2 decimales
  },
  
  

  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    return numbers ? numbers.length : 0;
  },
  
  
  
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
  
    if (!numbers || numbers.length === 0) {
      return 0; // No se encontraron números o no hay números válidos
    }
  
    let sum = 0;
    for (const num of numbers) {
      const parsedNum = parseFloat(num);
      if (!isNaN(parsedNum)) {
        sum += parsedNum;
      }
    }
  
    return parseFloat(sum); // Redondear a 1 decimal
  },
  
   
};
  


export default analyzer;

