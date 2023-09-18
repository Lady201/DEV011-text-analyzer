import analyzer from "./analyzer.js"; // Importa un módulo llamado analyzer desde un archivo llamado "analyzer.js". Este módulo contiene las funciones que se utilizarán para analizar el texto.

const textInput = document.querySelector('[name="user-input"]'); // Selecciona el elemento de entrada de texto (textarea) del documento HTML que tiene el atributo name igual a "user-input" y lo almacena en la variable textInput.
const clearButton = document.getElementById("reset-button"); // Selecciona el botón con el ID "reset-button" y lo almacena en la variable clearButton.
const metricsList = document.querySelectorAll("[data-testid]"); // Selecciona todos los elementos del documento HTML que tienen un atributo data-testid y los almacena en la variable metricsList. Estos elementos son donde se mostrarán las métricas.

textInput.addEventListener("input", updateMetrics); // Agrega un evento "input" al elemento de entrada de texto. Cuando el usuario escribe en el campo de entrada, se llama a la función updateMetrics.
clearButton.addEventListener("click", clearText); // Agrega un evento "click" al botón "Limpiar". Cuando el usuario hace clic en el botón, se llama a la función clearText.
textInput.addEventListener("keyup", function () {
  // Agrega un evento "keyup" al elemento de entrada de texto, pero la función de manejo de eventos está vacía, por lo que no realiza ninguna acción.
});

// Función que actualiza todas las métricas en función del texto ingresado
// Define una función llamada updateMetrics que realiza todas las operaciones de análisis del texto ingresado. Actualiza las métricas como el recuento de palabras, caracteres, números, la longitud media de las palabras, y muestra estos valores en los elementos HTML correspondientes.
function updateMetrics() {
  const text = textInput.value; // Obtiene el valor del elemento de entrada de texto

  // Recuento de palabras
  const wordCount = analyzer.getWordCount(text);
  updateMetricValue("word-count", wordCount);

  // Recuento de caracteres
  const charCount = analyzer.getCharacterCount(text);
  updateMetricValue("character-count", charCount);

  // Recuento de caracteres (sin espacios ni puntuación)
  const charCountNoSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  updateMetricValue("character-no-spaces-count", charCountNoSpaces);

  // Longitud media de las palabras
  const avgWordLength = analyzer.getAverageWordLength(text);
  updateMetricValue("word-length-average", avgWordLength);

  // Recuento de números y suma total
  const numbers = analyzer.getNumberCount(text);
  updateMetricValue("number-count", numbers);

  const sumOfNumbers = analyzer.getNumberSum(text);
  updateMetricValue("number-sum", sumOfNumbers);
}

// Función que actualiza el valor de una métrica en la página web
function updateMetricValue(metricTestId, value) {
  // Encuentra el elemento HTML correspondiente a la métrica
  const metricElement = Array.from(metricsList).find(
    (element) => element.getAttribute("data-testid") === metricTestId
  );

  // Si se encuentra el elemento, actualiza su contenido con el valor calculado
  if (metricElement) {
    metricElement.textContent = `${
      metricElement.textContent.split(":")[0]
    }: ${value}`;
  }
}

// Función que borra el contenido del elemento de entrada de texto y restablece todas las métricas a cero
function clearText() {
  textInput.value = ""; // Borra el texto en el elemento de entrada de texto
  // Restablece todas las métricas a cero
  metricsList.forEach((metricElement) => {
    metricElement.textContent = `${metricElement.textContent.split(":")[0]}: 0`;
  });
}

// Llama a 'updateMetrics' inicialmente para calcular y mostrar las métricas iniciales
updateMetrics();
