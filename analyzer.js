const analyzer = {
  getWordCount: (text) => {
    // Esta función toma un parámetro text, que es una cadena de texto, y calcula el número de palabras en el texto. Divide el texto en palabras utilizando expresiones regulares y luego cuenta la cantidad de palabras no vacías.
    const words = text.trim().split(/\s+/);
    let count = 0;

    for (let i = 0; i < words.length; i++) {
      if (words[i] !== "") {
        count++;
      }
    }
    return count;
  },

  getCharacterCount: (text) => {
    // Calcula el número total de caracteres en el texto, incluyendo espacios y signos de puntuación.
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    // Calcula el número de caracteres en el texto, excluyendo espacios y signos de puntuación. Convierte el texto a minúsculas y elimina todos los caracteres que no son letras o números.
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, ''); // Eliminar espacios y puntuación
    return cleanedText.length;
  },


  getAverageWordLength: (text) => {
    //  Esta función calcula la longitud media de las palabras en el texto. Divide el texto en palabras, suma las longitudes de todas las palabras y calcula el promedio. Redondea el promedio a dos decimales.
    const words = text.split(/\s+/);
    const totalWordLength = words.reduce((acc, word) => acc + word.length, 0);
    const average = words.length > 0 ? totalWordLength / words.length : 0;
    return parseFloat(average.toFixed(2)); // Redondear a 2 decimales
  },
  
  
  getNumberCount: (text) => {
    // Esta función cuenta la cantidad de números en el texto utilizando una expresión regular. Devuelve el número de coincidencias encontradas.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    return numbers ? numbers.length : 0;
  },

  
  getNumberSum: (text) => {
    // Esta función suma todos los números encontrados en el texto. Utiliza una expresión regular para encontrar números, los convierte a números de punto flotante y los suma. Devuelve la suma total de los números, redondeada a un decimal.
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

