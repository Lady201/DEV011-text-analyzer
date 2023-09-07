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
    // Longitud media de las palabras.
    const words = text.split(/\s+/); // Dividir el texto en palabras
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    const average = words.length > 0 ? totalWordLength / words.length : 0;
    return average;
  },
  

  getNumberCount: (text) => {
    // Cantidad de números.
    const numbers = text.match(/\d+/g);
    if (numbers) {
      return numbers.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    const numbers = text.match(/[-+]?[0-9]*\.?[0-9]+/g); // Coincide con números enteros y decimales
    if (numbers) {
      const sum = numbers.reduce((acc, num) => parseFloat(acc) + parseFloat(num), 0);
      return sum;
    } else {
      return 0;
    }
  },
};
  


export default analyzer;

