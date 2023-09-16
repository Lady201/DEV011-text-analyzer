import analyzer from "./analyzer.js";

const textInput = document.querySelector('[name="user-input"]');
const clearButton = document.getElementById("reset-button");
const metricsList = document.querySelectorAll("[data-testid]");

//textInput.addEventListener("input", updateMetrics);
clearButton.addEventListener("click", clearText,)
textInput.addEventListener("keyup", updateMetrics);

function updateMetrics() {
  const text = textInput.value;

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

function updateMetricValue(metricTestId, value) {
  const metricElement = Array.from(metricsList).find(
    (element) => element.getAttribute("data-testid") === metricTestId
  );

  if (metricElement) {
    metricElement.textContent = `${
      metricElement.textContent.split(":")[0]
    }: ${value}`;
  }
}

function clearText() {
  textInput.value = "";
  for (let index = 0; index < metricsList.length; index++) {
    const metricElement = metricsList[index];
    metricElement.textContent = `${metricElement.textContent.split(":")[0]}: 0`;
  }

}

updateMetrics();
