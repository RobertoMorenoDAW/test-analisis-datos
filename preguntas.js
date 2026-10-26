// ========================================================================
// BASE DE DATOS DE PREGUNTAS: INTRODUCCIÓN AL ANÁLISIS DE DATOS (UNED)
// TEMA 1: CONCEPTOS BÁSICOS Y ORGANIZACIÓN DE DATOS (50 PREGUNTAS)
// ========================================================================

const BBDD_PREGUNTAS = [
    // --- BLOQUE 1: EJERCICIOS RESUELTOS (1.1 a 1.25) ---
    {
    "tema": "Unidad 2",
    "pregunta": "2.1. ¿Cuál de los siguientes es un índice de tendencia central?",
    "opciones": ["La varianza", "La media aritmética", "El rango intercuartílico"],
    "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.2. La media aritmética se define fundamentalmente como:",
      "opciones": ["El valor que más se repite en la muestra", "El centro de gravedad de la distribución de frecuencias", "El valor situado exactamente en el percentil 25"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.3. En el cálculo de la media para datos agrupados en intervalos, ¿qué representa Xi?",
      "opciones": ["La frecuencia absoluta del intervalo", "El límite inferior exacto", "El punto medio o marca de clase del intervalo"],
      "correcta": 2
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.4. Cuando los datos no están agrupados en intervalos, Xi representa:",
      "opciones": ["Los valores individuales o categorías que toma la variable", "El número de sujetos acumulados", "La amplitud del intervalo"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.5. Una propiedad fundamental de la media aritmética establece que la suma de las desviaciones de todos los valores respecto a su media es igual a:",
      "opciones": ["Uno", "Cero", "N (el tamaño muestral)"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.6. Si a todos los valores de una variable X se les suma una constante 'a' (Y = X + a), la media de la nueva variable Y es:",
      "opciones": ["La media de X multiplicada por a", "La media de X más la constante a", "Exactamente igual a la media de X"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.7. Si a todos los valores de una variable X se les multiplica por una constante 'b' (Y = b · X), la nueva media aritmética será:",
      "opciones": ["b multiplicada por la media de X", "La media de X dividida entre b", "Invariable"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.8. Ante una transformación lineal del tipo Y = b · X + a, la media de Y es:",
      "opciones": ["Media(Y) = b + a · Media(X)", "Media(Y) = b · Media(X) + a", "Media(Y) = Media(X)"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.9. La suma de los cuadrados de las desviaciones de las puntuaciones respecto a la media aritmética es:",
      "opciones": ["Máxima", "Mínima", "Cero"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.10. ¿Qué principal desventaja presenta la media aritmética frente a la mediana?",
      "opciones": ["No utiliza todos los datos de la distribución", "Es muy sensible a valores extremos o atípicos (outliers)", "No permite realizar transformaciones algebraicas"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.11. ¿Se puede calcular la media aritmética si la distribución tiene intervalos abiertos en los extremos?",
      "opciones": ["Sí, calculando la mediana de esos intervalos", "No, porque no se puede calcular el punto medio de un intervalo abierto", "Sí, asignándoles frecuencia cero"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.12. La mediana es aquel valor de la variable que deja por debajo de sí al:",
      "opciones": ["25% de los datos", "50% de los datos", "75% de los datos"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.13. Si disponemos de un número impar de datos ordenados (por ejemplo: 3, 5, 8, 9, 12), la mediana es:",
      "opciones": ["5", "8", "7,4"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.14. Si disponemos de un número par de datos ordenados (por ejemplo: 2, 4, 6, 8), la mediana se calcula como:",
      "opciones": ["El valor 4", "La semisuma de los dos valores centrales: (4 + 6) / 2 = 5", "El valor 6"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.15. ¿A qué percentil equivale exactamente la mediana?",
      "opciones": ["Percentil 25", "Percentil 50", "Percentil 100"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.16. ¿Con qué decil y cuartil coincide el percentil 50?",
      "opciones": ["D5 y Q2", "D2 y Q1", "D5 y Q3"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.17. Para localizar el intervalo crítico en el cálculo de la mediana con datos agrupados, se busca en las frecuencias acumuladas el valor que contiene a:",
      "opciones": ["n / 4", "n / 2", "3n / 4"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.18. En la fórmula de cálculo de la mediana e índices de posición, Li representa:",
      "opciones": ["El límite inferior exacto o real del intervalo crítico", "El límite superior aparente", "La frecuencia acumulada"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.19. En la fórmula de la mediana y percentiles, nd representa:",
      "opciones": ["El número total de sujetos", "La frecuencia acumulada por debajo del intervalo crítico", "La frecuencia absoluta del intervalo crítico"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.20. La moda de una distribución se define como:",
      "opciones": ["El promedio ponderado de los datos", "El valor o categoría con mayor frecuencia absoluta", "El valor central una vez ordenados los datos"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.21. Una distribución que presenta dos puntuaciones no consecutivas con la frecuencia más alta se denomina:",
      "opciones": ["Amodal", "Unimodal", "Bimodal"],
      "correcta": 2
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.22. Si en una distribución todas las puntuaciones tienen exactamente la misma frecuencia absoluta, la distribución es:",
      "opciones": ["Amodal (carece de moda)", "Unimodal", "Multimodal"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.23. Si los datos están agrupados en intervalos, la moda se aproxima mediante:",
      "opciones": ["La frecuencia acumulada del intervalo", "El punto medio o marca de clase del intervalo modal", "El límite inferior exacto"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.24. ¿Cuál es el único índice de tendencia central aplicable a variables medidas en escala nominal?",
      "opciones": ["La media", "La mediana", "La moda"],
      "correcta": 2
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.25. Para variables medidas en escala ordinal, el índice de tendencia central más idóneo es:",
      "opciones": ["La media aritmética", "La mediana", "La varianza"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.26. ¿Qué índice de tendencia central es más adecuado cuando la distribución es marcadamente asimétrica o contiene valores extremos atípicos?",
      "opciones": ["La media aritmética", "La mediana", "La media geométrica"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.27. En una distribución perfectamente simétrica y unimodal, la relación entre media, mediana y moda es:",
      "opciones": ["Media > Mediana > Moda", "Media = Mediana = Moda", "Moda > Mediana > Media"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.28. En una distribución con asimetría positiva (sesgada a la derecha), habitualmente se cumple que:",
      "opciones": ["Media > Mediana > Moda", "Moda > Mediana > Media", "Media = Mediana = Moda"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.29. En una distribución con asimetría negativa (sesgada a la izquierda), habitualmente se cumple que:",
      "opciones": ["Media > Mediana > Moda", "Moda > Mediana > Media", "Media < Mediana < Moda"],
      "correcta": 2
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.30. Los percentiles son valores que dividen la distribución de frecuencias en:",
      "opciones": ["4 partes iguales", "10 partes iguales", "100 partes iguales"],
      "correcta": 2
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.31. ¿Cuántos percentiles distintos se pueden calcular en una distribución continua?",
      "opciones": ["99", "100", "101"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.32. ¿Cuántos cuartiles dividen la distribución en 4 partes iguales?",
      "opciones": ["3 cuartiles", "4 cuartiles", "2 cuartiles"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.33. ¿Cuántos deciles dividen la distribución en 10 partes iguales?",
      "opciones": ["10 deciles", "9 deciles", "8 deciles"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.34. El primer cuartil (Q1) deja por debajo de sí al:",
      "opciones": ["10% de las observaciones", "25% de las observaciones", "50% de las observaciones"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.35. El tercer cuartil (Q3) equivale exactamente al percentil:",
      "opciones": ["P30", "P75", "P85"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.36. El decil 7 (D7) equivale al percentil:",
      "opciones": ["P7", "P70", "P75"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.37. ¿Es un percentil un porcentaje?",
      "opciones": ["Sí, son conceptos idénticos", "No, el percentil es un valor concreto de la escala de la variable", "Sí, siempre se expresa con el símbolo %"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.38. Si una persona obtiene una puntuación directa correspondiente al Percentil 80 (P80), esto significa que:",
      "opciones": ["Ha respondido correctamente al 80% del examen", "Supera al 80% de los sujetos de su grupo de referencia", "El 80% de los sujetos obtiene una puntuación superior a la suya"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.39. En la fórmula general para calcular el Percentil k: Pk = Li + I · ((k·n/100 - nd) / nc), ¿qué representa 'nc'?",
      "opciones": ["La frecuencia acumulada de la distribución", "La frecuencia absoluta del intervalo crítico", "El número total de sujetos"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.40. En la fórmula del Percentil k, 'I' representa:",
      "opciones": ["La amplitud del intervalo crítico", "El índice de asimetría", "El percentil buscado"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.41. Si en una muestra de 5 sujetos las notas son 4, 6, 6, 7 y 7, la media es:",
      "opciones": ["5,5", "6,0", "6,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.42. En la muestra de notas [4, 6, 6, 7, 7], la distribución es:",
      "opciones": ["Unimodal con moda 6", "Bimodal con modas 6 y 7", "Amodal"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.43. Si la media de un examen es 5 y el profesor decide sumar 1,5 puntos a cada alumno, la nueva media será:",
      "opciones": ["5,0", "6,5", "7,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.44. Si la media de un test es 20 y multiplicamos cada puntuación directa por 1,2, la nueva media es:",
      "opciones": ["20", "21,2", "24"],
      "correcta": 2
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.45. Dada la transformación Y = 3·X - 2, si la media de X es 10, ¿cuál es la media de Y?",
      "opciones": ["28", "30", "32"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.46. ¿Qué ocurre con la mediana si a todos los valores de la variable se les suma una constante 'c'?",
      "opciones": ["No se altera", "Queda sumada por la constante c", "Se multiplica por c"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.47. El concepto de 'puntuación diferencial' (x = X - Media) tiene como media siempre:",
      "opciones": ["Uno", "Cero", "La varianza"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.48. Para calcular la media ponderada de dos grupos combinados se requiere conocer:",
      "opciones": ["Solo la suma de las medias", "La media y el tamaño muestral (n) de cada grupo", "Únicamente el rango de cada grupo"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.49. Si el grupo 1 tiene n1 = 10 con media 5, y el grupo 2 tiene n2 = 10 con media 7, la media combinada es:",
      "opciones": ["5,5", "6,0", "6,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.50. Si el grupo 1 tiene n1 = 10 con media 4, y el grupo 2 tiene n2 = 30 con media 8, la media ponderada total es:",
      "opciones": ["6,0", "7,0", "7,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.51. Al calcular percentiles con pocos datos sin agrupar, la amplitud de cada intervalo (I) se asume formalmente como:",
      "opciones": ["0", "1", "0,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.52. Si el valor de la variable es 7 (número entero discreto), sus límites exactos son:",
      "opciones": ["6 y 8", "6,5 y 7,5", "6,9 y 7,1"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.53. En una distribución acumulada, el porcentaje de casos comprendido entre el percentil 25 y el percentil 75 es exactamente el:",
      "opciones": ["25%", "50%", "75%"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.54. El rango o recorrido intercuartílico se define como la distancia entre:",
      "opciones": ["Q3 y Q1", "Q4 y Q1", "Q3 y Q2"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.55. Los índices de posición como los percentiles requieren como mínimo una escala de medida:",
      "opciones": ["Nominal", "Ordinal", "De razón exclusivamente"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.56. Si un estudiante obtiene una puntuación correspondiente al Decil 3 (D3), el porcentaje de sujetos con puntuación superior a la suya es:",
      "opciones": ["30%", "70%", "3%"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.57. Para calcular la media a partir de frecuencias relativas (pi), se utiliza la expresión:",
      "opciones": ["Suma de (Xi / pi)", "Suma de (Xi · pi)", "Suma de (pi) / N"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.58. Si en una variable cualitativa nominal las frecuencias son: Opción A = 12, Opción B = 25, Opción C = 8, la moda es:",
      "opciones": ["25", "Opción B", "Opción A"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.59. El percentil que deja por encima de sí al 10% de los sujetos es el:",
      "opciones": ["P10", "P90", "P99"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.60. El cuartil que deja por encima de sí al 75% de las observaciones es:",
      "opciones": ["Q1", "Q2", "Q3"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.61. En el cálculo de la media, ¿se ven afectados los resultados si se multiplica cada puntuación por 0?",
      "opciones": ["La media resultante es 0", "La media no cambia", "Es una operación no permitida"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.62. Cuando calculamos percentiles a partir de un histograma, el área total de las barras representa:",
      "opciones": ["La media de la muestra", "El número total de sujetos o el 100% de los datos", "El recorrido intercuartílico"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.63. ¿Qué medida de tendencia central divide el histograma de frecuencias en dos áreas de igual superficie?",
      "opciones": ["La media", "La mediana", "La moda"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.64. La media aritmética es el punto de apoyo donde la suma de momentos o desviaciones:",
      "opciones": ["Se anula (centro de gravedad físico)", "Es máxima", "Es igual a la desviación típica"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.65. En una muestra con valores [1, 2, 3, 4, 100], la medida de tendencia central más representativa es:",
      "opciones": ["La media aritmética (22)", "La mediana (3)", "El rango"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.66. Si ordenamos los datos de mayor a menor en vez de menor a mayor, el cálculo de las frecuencias acumuladas para percentiles debe:",
      "opciones": ["Acumularse siempre desde los valores menores hacia los mayores", "Acumularse desde arriba sin importar el orden", "Multiplicarse por -1"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.67. El percentil de orden cero (P0) y el percentil cien (P100):",
      "opciones": ["Se calculan habitualmente con la fórmula estándar", "No se definen como percentiles formales ya que dividen 99 puntos", "Son equivalentes a la media"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.68. Para despejar el percentil (k) al que corresponde una puntuación conocida X, la fórmula utilizada es:",
      "opciones": ["k = (100 / n) · [nd + ((X - Li) · nc / I)]", "k = (n / 100) · [Li + nd]", "k = (X - Media) / Desviación"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.69. En una distribución con intervalos de diferente amplitud, la moda debe buscarse en el intervalo con mayor:",
      "opciones": ["Frecuencia absoluta simple", "Densidad de frecuencia (ni / I)", "Frecuencia acumulada"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.70. ¿Cuál de las siguientes afirmaciones sobre la mediana es VERDADERA?",
      "opciones": ["Utiliza en su cálculo el valor algebraico de todas las observaciones", "No se ve afectada si modificamos el valor del dato máximo extremo", "Solo se puede calcular para variables cualitativas nominales"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.71. Si en una muestra de 10 sujetos todos obtienen una puntuación de 8, la media y la varianza de las puntuaciones son respectivamente:",
      "opciones": ["8 y 8", "8 y 0", "0 y 8"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.72. Si multiplicamos cada valor por -1, la nueva media aritmética:",
      "opciones": ["Permanece positiva", "Cambia de signo respecto a la original", "Se vuelve cero"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.73. ¿En qué nivel de medida se encuentra autorizado el cálculo de la media aritmética?",
      "opciones": ["Nominal", "Ordinal", "Intervalo y de razón"],
      "correcta": 2
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.74. Al calcular la mediana para datos agrupados en intervalos, si n/2 coincide exactamente con la frecuencia acumulada del intervalo inferior, la mediana es:",
      "opciones": ["El punto medio del intervalo", "El límite exacto común entre ambos intervalos", "Cero"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.75. Si el Decil 5 de una distribución es 40, podemos afirmar con certeza que:",
      "opciones": ["La media es 40", "La mediana es 40", "La moda es 40"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.76. Si el Percentil 25 es 15 y el Percentil 75 es 35, el recorrido semi-intercuartílico ((Q3 - Q1)/2) vale:",
      "opciones": ["20", "10", "25"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.77. La mediana es un caso particular de percentil correspondiente a:",
      "opciones": ["k = 25", "k = 50", "k = 75"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.78. ¿Qué representa 'k · n / 100' en la fórmula de posición?",
      "opciones": ["El orden o número de caso acumulado correspondiente a dicho percentil", "El valor exacto de la variable", "La amplitud total"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.79. Si en una muestra de 200 sujetos queremos hallar el percentil 40, el valor acumulado de búsqueda (k·n/100) es:",
      "opciones": ["40", "80", "100"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.80. En una distribución unimodal simétrica con media = 50, ¿cuánto valen la mediana y la moda?",
      "opciones": ["Mediana = 50 y Moda = 50", "Mediana = 25 y Moda = 50", "No se puede saber sin las frecuencias"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.81. Si una distribución tiene una media de 30 y una mediana de 20, la forma de la distribución es predominantemente:",
      "opciones": ["Simétrica", "Asimétrica positiva", "Asimétrica negativa"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.82. Si una distribución tiene una media de 18 y una mediana de 24, la forma de la distribución tiende a ser:",
      "opciones": ["Asimétrica negativa", "Asimétrica positiva", "Simétrica perfecta"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.83. ¿Por qué se prefiere calcular la media con datos sin agrupar cuando es posible?",
      "opciones": ["Porque el punto medio del intervalo es una aproximación que introduce error", "Porque la fórmula sin agrupar es más compleja", "Porque con intervalos no se puede calcular la media"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.84. La suma de las frecuencias absolutas simples de una distribución (∑ ni) es igual a:",
      "opciones": ["Uno", "El tamaño total de la muestra (n)", "100"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.85. La suma de las frecuencias relativas simples de una distribución (∑ pi) es igual a:",
      "opciones": ["n", "1 (o 100 si son porcentajes)", "0"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.86. En una tabla de intervalos [10-19], [20-29], los límites exactos del primer intervalo son:",
      "opciones": ["10 y 19", "9,5 y 19,5", "10,5 y 18,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.87. Para el intervalo de límites exactos 9,5 a 19,5, la amplitud (I) es:",
      "opciones": ["9", "10", "19,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.88. Para el intervalo con límites exactos 9,5 y 19,5, el punto medio (Xi) es:",
      "opciones": ["14", "14,5", "15"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.89. Si conocemos las frecuencias acumuladas na, la frecuencia absoluta del intervalo k (nk) se obtiene mediante:",
      "opciones": ["na(k) + na(k-1)", "na(k) - na(k-1)", "na(k) / n"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.90. El percentil 90 deja por debajo de sí al:",
      "opciones": ["10% de los sujetos", "90% de los sujetos", "99% de los sujetos"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.91. ¿Qué percentil coincide con el decil 2 (D2)?",
      "opciones": ["Percentil 2", "Percentil 20", "Percentil 25"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.92. ¿Qué percentil coincide con el decil 8 (D8)?",
      "opciones": ["Percentil 8", "Percentil 80", "Percentil 88"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.93. Si una puntuación individual es idéntica a la media de su grupo, su puntuación diferencial es:",
      "opciones": ["1", "0", "Indeterminada"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.94. En una distribución trimodal existen:",
      "opciones": ["Tres modas distintas", "Tres valores consecutivos de baja frecuencia", "Una moda dividida entre tres"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.95. Si en una distribución de frecuencias agrupada en intervalos el intervalo con mayor frecuencia absoluta es [20 - 24] (límites exactos 19,5 - 24,5), la moda es:",
      "opciones": ["20", "22", "24,5"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.96. Si en una muestra se duplica cada puntuación y luego se resta 4, la nueva media se calcula como:",
      "opciones": ["Media anterior - 4", "2 · (Media anterior) - 4", "2 · (Media anterior)"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.97. Un percentil informa principalmente sobre:",
      "opciones": ["La dispersión absoluta de la muestra", "La posición relativa de un individuo respecto a su grupo de referencia", "La forma geométrica del sesgo"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.98. La propiedad que establece que ∑ (Xi - Media) = 0 se cumple:",
      "opciones": ["Solo en distribuciones simétricas", "En cualquier conjunto de datos numéricos cuantitativos", "Únicamente si no hay valores repetidos"],
      "correcta": 1
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.99. Al comparar dos sujetos de grupos diferentes, los índices de posición como los percentiles permiten:",
      "opciones": ["Comparar su rendimiento relativo independientemente de las unidades de medida originales", "Sumar directamente sus puntuaciones directas", "Calcular la covarianza entre grupos"],
      "correcta": 0
    },
    {
      "tema": "Unidad 2",
      "pregunta": "2.100. En un conjunto de datos donde la variable es el estado civil (soltero, casado, viudo, divorciado), la medida de tendencia central apropiada es:",
      "opciones": ["La media", "La mediana", "La moda"],
      "correcta": 2
    },
    
    {
        "tema": "Unidad 1",
        "pregunta": "1.1. El proceso por el cual se asignan números a objetos o características según determinadas reglas se denomina:",
        "opciones": [
            "muestreo",
            "estadística",
            "medición"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.2. Mediante la Estadística Descriptiva se organizan y resumen conjuntos de observaciones procedentes de:",
        "opciones": [
            "muestras exclusivamente",
            "muestras aleatorias exclusivamente",
            "muestras o poblaciones totales"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.3. La estadística inferencial:",
        "opciones": [
            "permite analizar descriptivamente la muestra bajo estudio",
            "no tiene en cuenta las leyes de probabilidad",
            "permite realizar generalizaciones a la población con una muestra"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.4. Un estadístico:",
        "opciones": [
            "se puede utilizar para estimar algún parámetro de la población",
            "adopta el mismo valor en cada muestra",
            "coincide con el parámetro cuando el muestreo es probabilístico"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.5. La variable Género, con las categorías Hombre y Mujer, está medida en una escala:",
        "opciones": [
            "de razón",
            "ordinal",
            "nominal"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.6. La variable X, puntuaciones en una prueba de fluidez verbal recogidas en la distribución (8-9: 20M/12V, 6-7: 16M/13V, 4-5: 10M/17V, 2-3: 8M/10V, 0-1: 6M/8V), es:",
        "opciones": [
            "dicotómica",
            "cualitativa",
            "cuantitativa"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.7. Los datos de fluidez verbal (X) agrupados en intervalos (8-9, 6-7, 4-5, 2-3, 0-1) para el grupo de mujeres pueden representarse adecuadamente mediante un:",
        "opciones": [
            "histograma",
            "diagrama de sectores",
            "diagrama de dispersión"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.8. La variable 'tipo de trastorno psicológico' puede adoptar los valores 'depresión' y 'trastorno de personalidad'. ¿Qué nivel de medida presenta?",
        "opciones": [
            "Nominal",
            "Ordinal",
            "De razón"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.9. La variable 'Poder adquisitivo' con categorías Bajo (1), Medio (2) y Alto (3) está medida en una escala:",
        "opciones": [
            "de razón",
            "ordinal",
            "nominal"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.10. En un gráfico de frecuencia absoluta acumulada (na) del poder adquisitivo con valores acumulados: Bajo(1)=10, Medio(2)=40 y Alto(3)=45, el número de familias con nivel alto es:",
        "opciones": [
            "5",
            "45",
            "95"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.11. Para que tenga sentido calcular las frecuencias acumuladas de una variable, ésta debe ser, como mínimo:",
        "opciones": [
            "nominal",
            "ordinal",
            "de intervalo"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.12. Al clasificar a los sujetos en grupo 'clínico' (enfermos) y 'no clínico' (sanos), la variable 'grupo' es:",
        "opciones": [
            "de intervalo",
            "nominal",
            "politómica"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.13. Si en un cuestionario de depresión aplicado a 300 personas del grupo clínico la proporción (pi) en el intervalo 4-8 es 0,11, la frecuencia absoluta (ni) de dicho intervalo es:",
        "opciones": [
            "33",
            "17",
            "11"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.14. El número de sujetos de una muestra que realizaron correctamente una tarea de discriminación en un experimento psicofísico es 80, lo que representa el 40% de la muestra. ¿Cuál es el número total de sujetos de la muestra?",
        "opciones": [
            "200",
            "320",
            "500"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.15. En una distribución acumulada de edad con límites exactos donde la frecuencia absoluta acumulada para 20,5 es 50 y para 23,5 es 100, el número de sujetos con edades comprendidas entre 20,5 y 23,5 es:",
        "opciones": [
            "22",
            "50",
            "100"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.16. Las puntuaciones de una distribución de frecuencias están agrupadas en 4 intervalos ordenados de menor a mayor, siendo los puntos medios de estos intervalos: 2, 5, 8 y 11. La amplitud de los intervalos:",
        "opciones": [
            "es 2",
            "es 3",
            "no se puede calcular"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.17. En un polígono de frecuencias de conductas obsesivas (X) con frecuencias absolutas: X=1: 10, X=2: 20, X=3: 70, X=4: 60, X=5: 30, X=6: 10, el número total de enfermos de la muestra es:",
        "opciones": [
            "70",
            "80",
            "200"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.18. Un gráfico que representa en el eje horizontal los valores de una variable cuantitativa discreta y en el eje vertical sus frecuencias uniendo los puntos con segmentos de línea recta es:",
        "opciones": [
            "un histograma",
            "un diagrama de dispersión",
            "un polígono de frecuencias"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.19. Si en una prueba de competencia lectora los alumnos más avanzados (bachillerato) obtienen mayoritariamente puntuaciones altas, concentrándose la curva a la derecha con una cola hacia los valores bajos, la distribución es:",
        "opciones": [
            "asimétrica positiva",
            "asimétrica negativa",
            "simétrica"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.20. En una escala de intervalo se han asignado a tres sujetos los valores X=0, X=3, y X=6. Con esta escala es correcto afirmar que:",
        "opciones": [
            "el tercer sujeto con X=6 tiene el doble de la variable medida que el segundo sujeto con X=3",
            "el primer sujeto presenta carencia absoluta de variable medida",
            "la diferencia entre X=0 y X=3 es la misma que entre X=3 y X=6 en la variable medida"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.21. En una distribución agrupada en intervalos cuyas clases son 16-21, 22-27, 28-33, 34-39, etc. (límites exactos 15,5-21,5; 21,5-27,5...), la amplitud de los intervalos es:",
        "opciones": [
            "5",
            "4",
            "6"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.22. La variable 'número de asignaturas matriculadas en la UNED' (que solo admite valores enteros aislados como 1, 2, 3...) es:",
        "opciones": [
            "de intervalo",
            "continua",
            "discreta"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.23. Dadas tres formas de agrupar datos: Distribución 1 (intervalos 1-2, 3-4, 5-6, 7-8, 9-10), Distribución 2 (0-2, 3-5, 6-8, 9-11) y Distribución 3 (valores sin agrupar 1, 2, 3, 4, 5, 6, 7 o más), ¿cuál está agrupada en intervalos de amplitud 2?",
        "opciones": [
            "La distribución 1",
            "La distribución 2",
            "La distribución 3"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.24. ¿Cuáles son los límites exactos del intervalo aparente 32,74 - 32,75 (unidad de medida = 0,01)?",
        "opciones": [
            "32,73 - 32,76",
            "32,735 - 32,755",
            "32,745 - 32,755"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.25. En un diagrama de sectores de trastornos psicológicos donde el 'Trastorno por Estrés Postraumático' ocupa el 45%, si participan 60 víctimas en el proyecto, ¿cuántos presentarían este trastorno?",
        "opciones": [
            "27",
            "45",
            "75"
        ],
        "correcta": 0
    },

    // --- BLOQUE 2: AMPLIACIÓN TEÓRICO-PRÁCTICA TEMA 1 (1.26 a 1.50) ---
    {
        "tema": "Unidad 1",
        "pregunta": "1.26. En la notación estadística habitual, los parámetros poblacionales se representan mediante:",
        "opciones": [
            "letras latinas mayúsculas (como X, S)",
            "letras griegas (como μ, σ)",
            "números subindexados exclusivamente"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.27. Si una característica observada en los elementos de una investigación presenta una única modalidad idéntica para todos los sujetos, se denomina:",
        "opciones": [
            "constante",
            "variable cualitativa dicotómica",
            "parámetro muestral"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.28. La variable 'Estado civil' (soltero, casado, divorciado, viudo) es una variable:",
        "opciones": [
            "cualitativa dicotómica",
            "cuasicuantitativa ordinal",
            "cualitativa politómica"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.29. En una escala de medida ordinal, los números asignados a las distintas categorías permiten establecer relaciones de:",
        "opciones": [
            "igualdad/desigualdad y orden (mayor que / menor que)",
            "igualdad de diferencias entre valores sucesivos",
            "razón o cociente entre valores absolutos"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.30. La diferencia fundamental entre una escala de intervalo y una escala de razón radica en que:",
        "opciones": [
            "la escala de razón carece de unidad de medida constante",
            "en la escala de razón el cero es absoluto (ausencia del rasgo) y en la de intervalo es relativo o arbitrario",
            "en la escala de intervalo se pueden calcular razones y cocientes entre valores"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.31. La temperatura medida en grados centígrados (ºC) pertenece a una escala:",
        "opciones": [
            "ordinal",
            "de intervalo",
            "de razón"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.32. El tiempo de reacción ante un estímulo sonoro (en milisegundos) está medido en una escala:",
        "opciones": [
            "de razón",
            "de intervalo",
            "ordinal"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.33. Si un sujeto A tarda 400 ms en responder y un sujeto B tarda 200 ms, es legítimo afirmar que 'A tarda el doble que B' porque la variable está medida en una escala:",
        "opciones": [
            "de intervalo",
            "ordinal",
            "de razón"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.34. Las puntuaciones directas obtenidas en un test psicométrico estandarizado de inteligencia o de ansiedad se consideran convencionalmente medidas en escala:",
        "opciones": [
            "de razón",
            "de intervalo",
            "nominal politómica"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.35. Una variable cuantitativa para la cual siempre es posible encontrar, en teoría, un valor intermedio entre dos valores dados cualesquiera es:",
        "opciones": [
            "discreta",
            "continua",
            "cuasicuantitativa"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.36. La variable 'número de errores cometidos por un participante en un laberinto' es una variable:",
        "opciones": [
            "cuantitativa continua",
            "cuantitativa discreta",
            "cualitativa politómica"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.37. La suma de todas las frecuencias relativas o proporciones (pi) de una distribución de frecuencias es siempre igual a:",
        "opciones": [
            "el tamaño muestral (n)",
            "100",
            "1"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.38. El porcentaje (Pi) correspondiente a una categoría de la variable se obtiene mediante la fórmula:",
        "opciones": [
            "Pi = pi * 100",
            "Pi = ni / 100",
            "Pi = na * 100"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.39. En una distribución con variables de escala nominal (como 'Tipo de bachillerato' o 'Color de ojos'), ¿por qué carece de sentido calcular frecuencias acumuladas?",
        "opciones": [
            "porque sus frecuencias relativas siempre suman 100",
            "porque las categorías no admiten un orden intrínseco o jerarquía fija",
            "porque en escalas nominales solo se pueden calcular frecuencias relativas pero no absolutas"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.40. Si los datos de una variable continua están dados en números enteros (unidad de medida U = 1), los límites exactos del intervalo aparente 10 - 14 son:",
        "opciones": [
            "9,5 a 14,5",
            "10,0 a 14,0",
            "9,95 a 14,05"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.41. Para el intervalo con límites aparentes 10 - 14, el punto medio o marca de clase (PM) es:",
        "opciones": [
            "11,5",
            "12",
            "12,5"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.42. Si una variable tiene puntuaciones con un decimal (U = 0,1) y un intervalo aparente es 4,5 - 5,4, su límite inferior exacto (LIE) y superior exacto (LSE) son:",
        "opciones": [
            "4,0 a 5,5",
            "4,45 a 5,45",
            "4,495 a 5,405"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.43. La amplitud de un intervalo (I) se calcula formalmente restando:",
        "opciones": [
            "el límite superior aparente menos el límite inferior aparente (LSA - LIA)",
            "el límite superior exacto menos el límite inferior exacto (LSE - LIE)",
            "la suma de los límites dividida entre dos"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.44. Un intervalo situado en los extremos que carece formalmente de límite inferior o de límite superior (por ejemplo, '65 años o más') se denomina:",
        "opciones": [
            "intervalo abierto",
            "intervalo ficticio",
            "intervalo nulo"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.45. Para representar gráficamente una variable cuantitativa continua con datos agrupados en intervalos de clase, el gráfico más adecuado es:",
        "opciones": [
            "el diagrama de barras separadas",
            "el diagrama de sectores",
            "el histograma"
        ],
        "correcta": 2
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.46. En un histograma, los rectángulos verticales se dibujan contiguos (sin espacios entre ellos) porque:",
        "opciones": [
            "la variable representada es cualitativa continua",
            "las bases de las barras se levantan sobre los límites exactos de los intervalos",
            "representa frecuencias acumuladas en lugar de frecuencias absolutas"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.47. Para estudiar conjuntamente la relación entre dos variables cuantitativas mediante una nube de puntos se utiliza:",
        "opciones": [
            "un diagrama de dispersión",
            "un histograma acumulativo conjunto",
            "un ciclograma"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.48. Una distribución de frecuencias donde las mayores concentraciones de datos se sitúan en las puntuaciones bajas de la variable y la cola se alarga hacia la derecha presenta:",
        "opciones": [
            "asimetría negativa",
            "asimetría positiva",
            "distribución mesocúrtica simétrica"
        ],
        "correcta": 1
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.49. Una distribución en la que la mayoría de los estudiantes obtienen notas muy altas en un examen fácil y la cola de frecuencias se alarga hacia los valores bajos (a la izquierda) tiene:",
        "opciones": [
            "asimetría negativa",
            "asimetría positiva",
            "simetría perfecta"
        ],
        "correcta": 0
    },
    {
        "tema": "Unidad 1",
        "pregunta": "1.50. Si una distribución de frecuencias es simétrica:",
        "opciones": [
            "las dos mitades de la curva respecto a su punto central son superponibles",
            "la variabilidad de los datos es obligatoriamente igual a cero",
            "todas las frecuencias de los intervalos tienen exactamente el mismo valor"
        ],
        "correcta": 0
    },
    {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.51. Un grupo de investigadores de la UNED estudia la comprensión lectora de los estudiantes de la Facultad de Psicología evaluando a 2000 estudiantes. ¿Cuál es la población objeto de estudio?",
    "opciones": [
      "Los 2000 estudiantes evaluados",
      "Los estudiantes de Psicología de la UNED",
      "Los estudiantes de la UNED en general"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.52. Las variables medidas en una escala nominal:",
    "opciones": [
      "solo admiten dos valores posibles",
      "admiten relaciones de orden",
      "admiten dos o más valores"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.53. En el marco del método científico y la estadística inferencial, a las propiedades numéricas descriptivas de una población se les denomina:",
    "opciones": [
      "estadísticos",
      "parámetros",
      "estimadores muestrales"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.54. Si en una investigación sobre la eficacia de un fármaco se mide el 'tiempo en milisegundos que tarda un sujeto en encontrar la salida de un laberinto', dicha variable actúa metodológicamente como:",
    "opciones": [
      "variable independiente",
      "variable dependiente",
      "variable extraña"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.55. En un diseño experimental donde se administran tres tipos de tratamientos ('Fármaco A', 'Fármaco B' y 'Fármaco C'), la variable 'tipo de fármaco' es:",
    "opciones": [
      "cualitativa politómica",
      "cuasicuantitativa ordinal",
      "cuantitativa discreta"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.56. ¿Cuáles de las siguientes escalas de medida cuentan con un valor cero en su estructura?",
    "opciones": [
      "solo la de intervalo",
      "solo la de razón",
      "tanto la de intervalo como la de razón"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.57. Si dos sujetos obtienen en una prueba de CI (medida en escala de intervalo) puntuaciones de 70 y 140 respectivamente, es correcto afirmar que:",
    "opciones": [
      "el segundo sujeto es el doble de inteligente que el primero",
      "el segundo sujeto supera al primero en 70 unidades de medida",
      "las dos afirmaciones anteriores son correctas"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.58. La variable 'Nivel de estudios finalizados' (Sin estudios, Básicos, Medios, Licenciatura, Doctorado) presenta una escala de medida:",
    "opciones": [
      "nominal",
      "ordinal",
      "de intervalo"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.59. Cuando se quiere representar gráficamente la distribución conjunta de dos variables cualitativas (o al menos una cualitativa) organizadas en una tabla de doble entrada, el gráfico adecuado es:",
    "opciones": [
      "el diagrama de barras conjunto",
      "el diagrama de dispersión",
      "el polígono de frecuencias simple"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.60. Para comparar gráficamente las puntuaciones en una variable entre dos grupos que tienen tamaños muestrales diferentes (por ejemplo, n1 = 300 y n2 = 200), se debe utilizar en el eje de ordenadas:",
    "opciones": [
      "las frecuencias absolutas (ni)",
      "las frecuencias absolutas acumuladas (na)",
      "las frecuencias relativas o proporciones (pi)"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.61. La rama de la estadística que se ocupa de los aspectos puramente formales y normativos del método matemático se denomina:",
    "opciones": [
      "estadística aplicada",
      "estadística teórica",
      "estadística inferencial"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.62. En la distribución de frecuencias de una variable continua agrupada en intervalos con números enteros (U = 1), ¿cuál es la amplitud del intervalo 17 - 20?",
    "opciones": [
      "3",
      "4",
      "3,5"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.63. Para una variable continua con datos en números enteros, los límites exactos correspondientes al intervalo 20 - 24 son:",
    "opciones": [
      "19,5 y 24,5",
      "20,0 y 24,0",
      "19,95 y 24,05"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.64. En una tabla de distribución con proporciones acumuladas (Pa), si el intervalo 13-15 tiene Pa = 0,24 y el intervalo anterior 10-12 tiene Pa = 0,10, la proporción de casos que se encuentran en el intervalo 13-15 es:",
    "opciones": [
      "0,34",
      "0,14",
      "0,24"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.65. En una muestra aleatoria representativa de estudiantes de Secundaria de una Comunidad Autónoma concreta, las conclusiones obtenidas:",
    "opciones": [
      "se pueden generalizar a todos los estudiantes de Secundaria de esa Comunidad Autónoma",
      "se pueden generalizar a toda la población española de Secundaria",
      "no se pueden generalizar a ninguna población"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.66. El diagrama de barras acumulativo es una modalidad gráfica que solo resulta adecuada para variables:",
    "opciones": [
      "nominales y ordinales",
      "ordinales y cuantitativas discretas",
      "cuantitativas continuas agrupadas en intervalos"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.67. La variable 'número de personas detenidas por delitos' o 'número de hijos por familia' está clasificada como:",
    "opciones": [
      "cuantitativa continua en escala de intervalo",
      "cuantitativa discreta en escala de razón",
      "cuasicuantitativa en escala ordinal"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.68. Si los puntos medios de cuatro intervalos consecutivos en una distribución agrupada son 10, 15, 20 y 25, la amplitud de los intervalos es igual a:",
    "opciones": [
      "4",
      "5",
      "10"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.69. Una variable dicotómica que asigna el código 1 a 'Tiene diagnóstico de depresión' y el código 2 a 'No tiene diagnóstico de depresión' pertenece a una escala:",
    "opciones": [
      "nominal",
      "ordinal",
      "de razón"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.70. En un polígono de frecuencias (o diagrama de líneas) de una variable cuantitativa continua agrupada en clases, los puntos del gráfico se sitúan a la altura de las frecuencias sobre:",
    "opciones": [
      "los límites inferiores aparentes",
      "los límites superiores exactos",
      "los puntos medios (o marcas de clase) de cada intervalo"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.71. En una muestra de N = 250 sujetos, las frecuencias relativas acumuladas de los tres primeros intervalos son pa1 = 0,12, pa2 = 0,36 y pa3 = 0,60. ¿Cuál es la frecuencia absoluta (n3) del tercer intervalo?",
    "opciones": [
      "24",
      "60",
      "90"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.72. En una tabla de distribución de frecuencias de 50 observaciones, la frecuencia absoluta acumulada del intervalo 20 - 29 es na = 38 y la del intervalo inmediatamente anterior (10 - 19) es na = 22. El porcentaje de casos (P) que caen dentro del intervalo 20 - 29 es:",
    "opciones": [
      "16%",
      "32%",
      "44%"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.73. Si una distribución de frecuencias en la que N = 120 presenta un intervalo aparente 15 - 19 con un porcentaje acumulado Pa = 75% y el intervalo anterior tiene Pa = 45%, la frecuencia absoluta (ni) de dicho intervalo 15 - 19 es:",
    "opciones": [
      "30",
      "36",
      "42"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.74. En una tabla de frecuencias agrupadas con datos de tiempos de reacción (U = 1 ms), un intervalo aparente es 240 - 279. Su amplitud exacta (I) y su marca de clase (PM) son, respectivamente:",
    "opciones": [
      "I = 39 y PM = 259,5",
      "I = 40 y PM = 259,5",
      "I = 40 y PM = 260"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.75. Se administra un test a 40 pacientes y las frecuencias absolutas por niveles de gravedad son: Leve (ni = 14), Moderado (ni = 18) y Grave (ni = 8). ¿Cuál es la proporción relativa acumulada (pa) de la categoría 'Moderado'?",
    "opciones": [
      "0,45",
      "0,80",
      "0,32"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.76. Si una variable continua está medida con una precisión de décimas (U = 0,1) y un intervalo de clase tiene los límites exactos 14,95 - 19,95, ¿cuál es su intervalo de límites aparentes o informados?",
    "opciones": [
      "14,9 - 19,9",
      "15,0 - 19,9",
      "15,0 - 20,0"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.77. En un histograma donde los intervalos tienen distinta amplitud, la altura del rectángulo vertical correspondiente a cada intervalo debe ser proporcional a:",
    "opciones": [
      "la frecuencia absoluta directa (ni)",
      "la densidad de frecuencia (ni / I)",
      "el punto medio del intervalo (PM)"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.78. En una investigación se clasifica el nivel de satisfacción laboral en tres grados (Bajo, Medio, Alto). Si la frecuencia absoluta acumulada en 'Bajo' es 15, en 'Medio' es 45 y el total de la muestra es N = 60, ¿cuántos trabajadores tienen nivel 'Alto'?",
    "opciones": [
      "15",
      "30",
      "45"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.79. En una tabla de distribución de frecuencias acumuladas, el número de sujetos que han obtenido una puntuación menor o igual que el límite exacto superior de un intervalo viene dado directamente por:",
    "opciones": [
      "su frecuencia absoluta simple (ni)",
      "su frecuencia absoluta acumulada (na)",
      "la semisuma de las frecuencias de la tabla"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.80. En un estudio psicofísico se mide el umbral de detección auditiva en decibelios (escala continua). Si un intervalo informado es 25 - 34 (unidad de medida U = 1 dB), el intervalo comprende exactamente un número de unidades enteras igual a:",
    "opciones": [
      "9",
      "10",
      "11"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.81. En un estudio sobre el estrés en el ámbito laboral, los participantes son clasificados en tres grupos según su sector: 'Sanidad', 'Educación' e 'Industria'. Esta variable está medida en una escala:",
    "opciones": [
      "ordinal",
      "nominal",
      "de razón"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.82. La proporción acumulada (pa) correspondiente al último intervalo o categoría superior de una distribución de frecuencias es siempre igual a:",
    "opciones": [
      "1,00",
      "100",
      "n (tamaño muestral)"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.83. ¿Cuál de las siguientes variables constituye un ejemplo de variable cuasicuantitativa u ordinal?",
    "opciones": [
      "Puesto obtenido en una carrera de velocidad (1º, 2º, 3º)",
      "Número de pulsaciones por minuto en reposo",
      "Nacionalidad de los participantes en un congreso"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.84. Si los límites exactos de un intervalo de clase son 19,5 y 29,5, la amplitud (I) de dicho intervalo es igual a:",
    "opciones": [
      "9",
      "10",
      "11"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.85. En una distribución de frecuencias con una muestra de 80 participantes, si un intervalo tiene una frecuencia absoluta ni = 16, su porcentaje correspondiente (Pi) es:",
    "opciones": [
      "16%",
      "20%",
      "25%"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.86. El tipo de representación gráfica más idóneo para reflejar las frecuencias acumuladas de una variable cuantitativa continua agrupada en intervalos es:",
    "opciones": [
      "el polígono de frecuencias acumuladas (ojiva)",
      "el diagrama de sectores circular",
      "el diagrama de dispersión"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.87. Para la variable 'nivel socioeconómico' codificada como Bajo = 1, Medio = 2 y Alto = 3, la asignación de números refleja relaciones de:",
    "opciones": [
      "orden y equivalencia de intervalos numéricos",
      "únicamente igualdad y orden jerárquico",
      "razón con cero absoluto"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.88. Si un investigador registra el número de hijos que tiene cada familia en una muestra de 50 hogares, la variable analizada es:",
    "opciones": [
      "cuantitativa discreta en escala de razón",
      "cuantitativa continua en escala de intervalo",
      "cualitativa politómica en escala ordinal"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.89. Si una variable continua presenta medidas redondeadas al número entero (U = 1) y el intervalo aparente es 50 - 59, su punto medio o marca de clase (PM) es:",
    "opciones": [
      "54",
      "54,5",
      "55"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.90. En un estudio sobre memoria de trabajo, la media obtenida en la muestra se simboliza como un estadístico mediante letras:",
    "opciones": [
      "latinas, como X̄",
      "griegas, como μ",
      "griegas, como σ"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.91. En una investigación se evalúa a una muestra aleatoria de 1600 ciudadanos españoles mayores de edad para conocer su opinión sobre el principal problema del país. La población objeto de estudio de esta investigación es:",
    "opciones": [
      "los 1600 ciudadanos encuestados",
      "la población española mayor de edad",
      "el censo total de la población europea"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.92. Si en una encuesta realizada a una muestra de 1600 ciudadanos el 52,5% opina que el desempleo es el principal problema del país, dicho porcentaje (52,5%) es el valor de:",
    "opciones": [
      "un parámetro",
      "un estadístico",
      "una variable continua"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.93. Las variables dicotómicas se caracterizan formalmente porque:",
    "opciones": [
      "solo admiten dos categorías o valores posibles",
      "admiten tres o más categorías ordenadas",
      "poseen siempre unidad de medida física constante"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.94. En una distribución de frecuencias agrupada en intervalos, los puntos medios (marcas de clase) consecutivos son 11, 14, 17, 20 y 23. La amplitud (I) de dichos intervalos es igual a:",
    "opciones": [
      "2",
      "3",
      "4"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.95. Para un intervalo de una variable continua (U = 1) cuyo punto medio es PM = 11 y su amplitud es I = 3, los límites exactos de dicho intervalo son:",
    "opciones": [
      "9,5 a 12,5",
      "10,0 a 12,0",
      "10,5 a 13,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.96. Si en una muestra de 150 participantes las frecuencias acumuladas de los tres primeros intervalos son na1 = 15, na2 = 36 y na3 = 87, la frecuencia relativa simple (pi) del tercer intervalo es:",
    "opciones": [
      "0,34",
      "0,58",
      "0,76"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.97. Si deseamos calcular los límites exactos para una puntuación observada de 18,56 registrada con dos cifras decimales (unidad de medida U = 0,01), dichos límites son:",
    "opciones": [
      "18,55 a 18,56",
      "18,555 a 18,565",
      "18,560 a 18,570"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.98. En una tarea psicofísica se cronometra el tiempo de reacción en milisegundos que tarda un sujeto en pulsar una tecla. Esta variable dependiente se encuentra en una escala de medida:",
    "opciones": [
      "ordinal",
      "de intervalo",
      "de razón"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.99. Para una distribución agrupada en intervalos donde una de las clases aparentes es 381 - 400 (con U = 1 ms), los límites exactos correspondientes son:",
    "opciones": [
      "380,5 a 400,5",
      "380,0 a 401,0",
      "381,5 a 400,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.100. En el intervalo informado 381 - 400 (con datos enteros, U = 1), el valor del punto medio o marca de clase (PM) es:",
    "opciones": [
      "390,0",
      "390,5",
      "391,0"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.101. En un experimento de laboratorio con animales, el tiempo que tarda una rata en alcanzar la salida de un laberinto actúa como:",
    "opciones": [
      "variable independiente",
      "variable dependiente",
      "variable de control"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.102. Si en una investigación clínica se comparan cuatro tipos distintos de fármacos antidepresivos administrados a los grupos, la variable 'tipo de fármaco' es:",
    "opciones": [
      "cualitativa politómica",
      "cuasicuantitativa ordinal",
      "cuantitativa discreta"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.103. En una investigación se recogen datos de una muestra sobre la variable 'lugar de nacimiento', registrando más de diez provincias españolas distintas. Esta variable se clasifica como:",
    "opciones": [
      "cualitativa dicotómica",
      "cualitativa politómica",
      "cuantitativa discreta"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.104. Al registrar en una muestra la variable 'número de personas detenidas por delitos fiscales' en distintos municipios, su escala de medida es:",
    "opciones": [
      "nominal",
      "de intervalo",
      "de razón"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.105. Si en un cuestionario una pregunta sobre presencia de acoso laboral solo admite las respuestas 'Sí' y 'No', la variable resultante es:",
    "opciones": [
      "politómica",
      "dicotómica",
      "de razón"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.106. Para comparar de manera gráfica y precisa dos grupos que tienen tamaños muestrales diferentes (por ejemplo, n1 = 60 y n2 = 180) en una misma variable, en el eje de ordenadas es preceptivo utilizar:",
    "opciones": [
      "frecuencias absolutas simples",
      "frecuencias relativas (o porcentajes)",
      "frecuencias absolutas acumuladas"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.107. Al representar simultáneamente la distribución de dos variables cualitativas (por ejemplo, nivel de estudios y género) para comparar ambos grupos, el gráfico adecuado es:",
    "opciones": [
      "un diagrama de dispersión",
      "un diagrama de barras conjunto (adosadas o agrupadas)",
      "un histograma contiguo"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.108. Si un estudio sobre rendimiento académico extrae una muestra aleatoria y representativa de estudiantes de Secundaria de una sola Comunidad Autónoma, sus conclusiones científicas:",
    "opciones": [
      "pueden generalizarse a la población de Secundaria de dicha Comunidad Autónoma",
      "pueden generalizarse a toda la población escolar europea",
      "no admiten ningún tipo de generalización estadística"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.109. ¿Cuál de las siguientes escalas de medida carece totalmente de un valor cero que represente ausencia total de la propiedad medida?",
    "opciones": [
      "la escala de razón",
      "la escala de intervalo",
      "la escala de frecuencias"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.110. En una escala de medida de razón, si un sujeto registra un valor de 0 en la variable 'número de ausencias al puesto de trabajo', dicho cero indica:",
    "opciones": [
      "un origen arbitrario fijado por convenio",
      "ausencia total o empírica de la propiedad evaluada",
      "que la variable debe reclasificarse como nominal"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.111. Si una distribución de frecuencias presenta su intervalo superior definido formalmente como '60 años o más', nos encontramos ante:",
    "opciones": [
      "un intervalo ficticio",
      "un intervalo abierto",
      "un error de tabulación"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.112. En un diagrama circular o de sectores, la amplitud en grados sexagesimales de un sector correspondiente a una categoría que agrupa al 25% de la muestra es igual a:",
    "opciones": [
      "25 grados",
      "90 grados",
      "180 grados"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.113. Si una categoría de una variable nominal reúne al 40% de los sujetos analizados en una muestra, ¿cuántos grados sexagesimales abarcará en un diagrama de sectores?",
    "opciones": [
      "40 grados",
      "120 grados",
      "144 grados"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.114. La suma de todas las frecuencias absolutas simples (Σ ni) de una distribución de frecuencias coincide exactamente con:",
    "opciones": [
      "el número total de intervalos",
      "el tamaño total de la muestra (n)",
      "la última frecuencia relativa de la serie"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.115. Si en una muestra de n = 200 observaciones un intervalo tiene una frecuencia relativa pi = 0,18, el número absoluto de observaciones (ni) en ese intervalo es:",
    "opciones": [
      "18",
      "36",
      "54"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.116. En una distribución ordenada con N = 80 sujetos, la frecuencia acumulada del tercer intervalo es na3 = 48. ¿Qué porcentaje de la muestra presenta puntuaciones iguales o inferiores al límite exacto superior de dicho intervalo?",
    "opciones": [
      "48%",
      "60%",
      "75%"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.117. Para una variable cualitativa medida en escala nominal (por ejemplo, 'Grupo sanguíneo': A, B, AB, 0), el índice descriptivo de tendencia central adecuado es:",
    "opciones": [
      "la media aritmética",
      "la moda",
      "la mediana"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.118. Para una variable cuantitativa continua agrupada en intervalos regulares de amplitud constante, el gráfico donde las áreas de los rectángulos son proporcionales a las frecuencias es:",
    "opciones": [
      "el histograma",
      "el ciclograma",
      "el diagrama de dispersión"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.119. La disciplina estadística que se encarga de recoger, clasificar, resumir y representar visualmente las puntuaciones de un grupo observado se define como:",
    "opciones": [
      "Estadística Descriptiva",
      "Estadística Inferencial",
      "Contraste de Hipótesis"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.120. La Estadística Inferencial se fundamenta obligatoriamente en:",
    "opciones": [
      "el cálculo de probabilidades para extrapolar resultados muestrales a la población",
      "la tabulación no numérica de variables cualitativas exclusivamente",
      "la certeza matemática libre de todo margen de error"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.121. La media calculada a partir de las puntuaciones de todos los individuos que componen una población completa es:",
    "opciones": [
      "un estadístico muestral",
      "un parámetro poblacional",
      "un porcentaje acumulado"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.122. En una investigación se desea conocer el peso corporal (en kilogramos) de los neonatos ingresados en un hospital. La variable 'peso' es:",
    "opciones": [
      "cuantitativa continua",
      "cuantitativa discreta",
      "cualitativa ordinal"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.123. Una variable como el 'número de cigarrillos consumidos al día por una persona fumadora' se clasifica formalmente como:",
    "opciones": [
      "cuantitativa discreta",
      "cuantitativa continua",
      "cuasicuantitativa"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.124. Si en una escala de medida los sujetos solo pueden ordenarse como 'primero', 'segundo' o 'tercero', pero desconocemos la distancia real entre ellos, la escala es:",
    "opciones": [
      "nominal",
      "ordinal",
      "de razón"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.125. Si los límites aparentes de un intervalo son 20 - 24 y la unidad de medida es el número entero (U = 1), la amplitud del intervalo (I) es:",
    "opciones": [
      "4",
      "5",
      "6"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.126. Para el intervalo aparente 20 - 24 (con datos enteros, U = 1), el límite inferior exacto (LIE) y el límite superior exacto (LSE) son:",
    "opciones": [
      "19,5 y 24,5",
      "20,0 y 24,0",
      "19,0 y 25,0"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.127. Para una serie de intervalos consecutivos donde I = 5 y el primer intervalo tiene límites exactos 4,5 - 9,5, los límites exactos del siguiente intervalo son:",
    "opciones": [
      "9,5 a 14,5",
      "10,0 a 15,0",
      "10,5 a 15,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.128. En una distribución donde la media es arrastrada hacia valores bajos por la existencia de puntuaciones extremas inferiores, cumpliéndose Media < Mediana ≤ Moda, se observa:",
    "opciones": [
      "asimetría negativa",
      "asimetría positiva",
      "simetría perfecta"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.129. Cuando la cola de la curva de frecuencias se prolonga hacia las puntuaciones altas de la derecha y la Media es mayor que la Mediana, la distribución presenta:",
    "opciones": [
      "asimetría positiva",
      "asimetría negativa",
      "curva mesocúrtica simétrica"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.130. Si en una investigación sobre memoria operativa se administra una prueba psicométrica estandarizada, la puntuación obtenida en el test se sitúa convencionalmente en escala:",
    "opciones": [
      "de intervalo",
      "de razón",
      "nominal"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.131. El proceso sistemático que consiste en asignar símbolos o números a características de personas o entidades siguiendo pautas normativas precisas se denomina:",
    "opciones": [
      "medición",
      "estimación",
      "inferencia"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.132. Si una propiedad de los sujetos bajo estudio permanece fija y no adopta modalidades distintas a lo largo de toda la investigación, constituye:",
    "opciones": [
      "una constante",
      "una variable ordinal",
      "un estimador insesgado"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.133. La proporción relativa (pi) asociada a una modalidad de una variable siempre satisface la condición matemática:",
    "opciones": [
      "estar comprendida obligatoriamente en el rango entre 0 y 1",
      "ser un número entero estrictamente mayor que 1",
      "ser igual a la suma acumulada de los porcentajes"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.134. En una tabla de distribución de frecuencias para variables agrupadas, la marca de clase o punto medio (PM) se calcula mediante:",
    "opciones": [
      "(LIE + LSE) / 2",
      "(LSE - LIE) * 2",
      "LSE - LIE"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.135. En una variable con datos dados al centésimo (U = 0,01), para el valor observado X = 5,42 sus límites exactos son:",
    "opciones": [
      "5,415 a 5,425",
      "5,410 a 5,430",
      "5,400 a 5,450"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.136. Si un intervalo aparente está delimitado como 40 - 49 (U = 1), el número total de unidades enteras que contiene dicho intervalo es:",
    "opciones": [
      "9",
      "10",
      "11"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.137. ¿Cuál de los siguientes gráficos resulta totalmente inadecuado para representar datos de una variable cualitativa nominal sin orden?",
    "opciones": [
      "un histograma con barras continuas adosadas en límites reales",
      "un diagrama de barras separadas",
      "un diagrama de sectores (ciclograma)"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.138. En una distribución unimodal simétrica en forma de campana, las medidas de tendencia central presentan la siguiente relación teórica:",
    "opciones": [
      "Media ≈ Mediana ≈ Moda",
      "Media < Mediana < Moda",
      "Moda < Mediana < Media"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.139. Si en una investigación sobre eficacia terapéutica se mide el número de sesiones a las que asiste cada paciente hasta obtener el alta médica, dicha variable es:",
    "opciones": [
      "cuantitativa discreta en escala de razón",
      "cuantitativa continua en escala de intervalo",
      "cualitativa politómica en escala ordinal"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.140. Cuando se asignan códigos numéricos 1 = Primaria, 2 = Secundaria y 3 = Universidad para indicar el nivel formativo de los participantes, los números reflejan:",
    "opciones": [
      "únicamente una relación de jerarquía u orden entre categorías",
      "igualdad estricta de distancias cuantitativas entre niveles",
      "una proporción matemática donde el valor 2 representa el doble del 1"
    ],
    "correcta": 0
  }


];