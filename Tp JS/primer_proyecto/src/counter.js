// Exporta la función setupCounter para usarla en otros archivos
export function setupCounter(element) {
    let counter = 0 // Inicializa el contador en 0
  
    // Función para actualizar el contador y mostrarlo en el elemento
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `count is ${counter}` // Muestra el contador en el HTML
    }
  
    // Aumenta el contador al hacer clic en el elemento
    element.addEventListener('click', () => setCounter(counter + 1))
  
    setCounter(0) // Muestra el valor inicial
  }
  