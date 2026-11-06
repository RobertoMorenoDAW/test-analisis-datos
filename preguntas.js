// ========================================================================
// BASE DE DATOS DE PREGUNTAS: INTRODUCCIÓN AL ANÁLISIS DE DATOS (UNED)
// TEMA 1: CONCEPTOS BÁSICOS Y ORGANIZACIÓN DE DATOS (50 PREGUNTAS)
// ========================================================================

const BBDD_PREGUNTAS = [
    // --- BLOQUE 1: EJERCICIOS RESUELTOS (1.1 a 1.25) ---
    {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.1. Dadas las puntuaciones directas: 2, 4, 6, 8 y 10, ¿cuál es el valor de la media aritmética?",
    "opciones": ["5,0", "6,0", "6,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.2. En la muestra anterior [2, 4, 6, 8, 10], la suma de las desviaciones de todas las puntuaciones respecto a su media aritmética es:",
    "opciones": ["0", "10", "30"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.3. Si una variable X tiene una media de 14 y se aplica la transformación lineal Y = 2X + 5, la media de la nueva variable Y es:",
    "opciones": ["28", "33", "19"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.4. Si la media en un test de razonamiento es 20 y a cada sujeto se le aplica la transformación Y = 0,5X - 3, la nueva media obtenida es:",
    "opciones": ["7", "10", "17"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.5. Un grupo de 20 estudiantes tiene una nota media de 6, y otro grupo de 30 estudiantes tiene una nota media de 8. La media aritmética ponderada de la muestra total combinada es:",
    "opciones": ["7,0", "7,2", "7,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.6. Se tienen tres subgrupos: n1 = 10 con media = 5; n2 = 20 con media = 4; n3 = 10 con media = 7. ¿Cuál es la media del conjunto total?",
    "opciones": ["5,0", "5,33", "5,5"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.7. En una tabla de frecuencias con datos sin agrupar se registran las parejas (Xi; ni): (2; 3), (5; 4) y (8; 3). La media aritmética es:",
    "opciones": ["4,5", "5,0", "5,2"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.8. Disponemos de las frecuencias relativas simples pi: para X=10, p=0,2; para X=20, p=0,5; y para X=30, p=0,3. La media aritmética es:",
    "opciones": ["20", "21", "22"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.9. Si una distribución de frecuencias solo muestra la columna de frecuencias absolutas acumuladas (na), ¿qué paso previo es imprescindible para calcular la media?",
    "opciones": ["Dividir na entre n", "Obtener las frecuencias absolutas simples (ni) restando cada acumulada de la anterior", "Calcular directamente la semisuma de los extremos"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.10. Si las frecuencias acumuladas en cuatro intervalos son: na1 = 12, na2 = 28, na3 = 45 y na4 = 50, la frecuencia absoluta simple del tercer intervalo (n3) es:",
    "opciones": ["17", "28", "45"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.11. Para un intervalo de edad delimitado por los valores aparentes 25 - 29, ¿cuál es su punto medio (Xi) para el cálculo de la media?",
    "opciones": ["26,5", "27,0", "27,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.12. Para el intervalo 10 - 14, cuyos límites exactos son 9,5 y 14,5, su punto medio coincide con:",
    "opciones": ["(10 + 14) / 2 = 12", "(9,5 + 14,5) / 2 = 12", "Ambas fórmulas arrojan exactamente el mismo resultado"],
    "correcta": 2
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.13. Si se resta una constante c a todas las observaciones de una muestra con media 15, la nueva media aritmética es:",
    "opciones": ["15 - c", "15 / c", "15"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.14. Si la suma de las puntuaciones de 25 sujetos es 175, la media aritmética de esa muestra es:",
    "opciones": ["6", "7", "8"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.15. ¿Qué propiedad geométrica o física define a la media aritmética?",
    "opciones": ["Divide el polígono de frecuencias en dos áreas exactamente iguales", "Es el centro de gravedad donde la suma de momentos o desviaciones se anula", "Representa la máxima ordenada del histograma"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.16. Dada la muestra [1, 2, 3, 4, 5], la suma de los cuadrados de las desviaciones respecto a la media (3) es: (1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2 = 10. Si calculamos dicha suma respecto a cualquier otro valor (por ejemplo 2), el resultado obtenido será:",
    "opciones": ["Menor que 10", "Exactamente 10", "Mayor que 10, pues respecto a la media la suma de cuadrados es mínima"],
    "correcta": 2
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.17. Si multiplicamos todos los valores de una variable por la constante 0, la media aritmética resultante será:",
    "opciones": ["0", "Indeterminada", "La misma que antes"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.18. Si sumamos 3 puntos a 5 sujetos y restamos 3 puntos a los otros 5 sujetos de una muestra de 10 alumnos, la media aritmética global:",
    "opciones": ["Aumenta en 3", "Permanece inalterada", "Disminuye en 3"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.19. ¿Es posible calcular la media aritmética si el primer intervalo de una tabla es 'Menor de 18 años' y el último es 'Mayor de 65 años'?",
    "opciones": ["Sí, sustituyendo los intervalos abiertos por la moda", "No, porque no es posible determinar la marca de clase o punto medio de intervalos abiertos", "Sí, siempre que conozcamos el número total de sujetos"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.20. Si la media de un test es 50 y la puntuación de un sujeto es 58, su puntuación diferencial (x = X - Media) es:",
    "opciones": ["+8", "-8", "1,16"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.21. Para los valores no agrupados: 12, 15, 11, 19, 14, 18, 20, ¿cuál es la mediana?",
    "opciones": ["14", "15", "16"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.22. En una muestra con un número par de observaciones: 4, 7, 9, 12, 16, 20, la mediana es:",
    "opciones": ["9", "10,5", "12"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.23. Si tenemos los datos: 2, 3, 3, 4, 5, 8, 9, 10, ¿cuál es la mediana?",
    "opciones": ["4,0", "4,5", "5,0"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.24. Para calcular la mediana con datos agrupados en intervalos en una muestra de n = 60 sujetos, el valor de búsqueda para localizar el intervalo crítico es:",
    "opciones": ["15", "30", "45"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.25. En una tabla ordenada de menor a mayor, con n = 40 y frecuencias acumuladas: na1 = 8, na2 = 18, na3 = 31, na4 = 40, ¿en qué intervalo se encuentra la mediana (n/2 = 20)?",
    "opciones": ["En el segundo intervalo", "En el tercer intervalo, por ser el primero con na mayor o igual a 20", "En el cuarto intervalo"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.26. Se tiene una muestra de n = 50 sujetos. El intervalo crítico de la mediana tiene límites exactos [19,5 - 24,5], frecuencia absoluta nc = 10 y frecuencia acumulada inferior nd = 20. Sabiendo que I = 5, la mediana es:",
    "opciones": ["21,5", "22,0", "22,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.27. Un intervalo crítico para la mediana presenta: Li = 10,5, n = 80, nd = 32, nc = 16 e I = 3. ¿Cuál es el valor exacto de la mediana?",
    "opciones": ["11,5", "12,0", "12,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.28. Si al calcular la mediana con datos agrupados n/2 coincide exactamente con la frecuencia acumulada del intervalo inferior (n/2 - nd = 0), la fórmula indica que la mediana es:",
    "opciones": ["El punto medio del intervalo crítico", "Exactamente el límite inferior exacto (Li) del intervalo crítico", "0"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.29. En una tabla con un intervalo abierto superior 'X ≥ 50', ¿se puede calcular la mediana si n = 80 y la frecuencia acumulada del intervalo anterior a este es na = 55?",
    "opciones": ["No, nunca se puede calcular si hay algún intervalo abierto en la tabla", "Sí, porque el intervalo crítico (n/2 = 40) cae en un intervalo cerrado y no en el abierto", "Sí, asignando amplitud 10 al intervalo abierto"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.30. En una tabla donde el intervalo abierto superior es 'X ≥ 68' con na = 60, y el intervalo anterior tiene na = 25 sobre un total de n = 60. ¿Se puede calcular la mediana?",
    "opciones": ["Sí, da exactamente 68", "No, porque n/2 = 30 cae dentro del intervalo abierto y se desconoce su amplitud (I)", "Sí, tomando como amplitud la del intervalo precedente"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.31. ¿Por qué en el numerador de la fórmula de la mediana y de los percentiles (n/2 - nd) nunca puede resultar un número negativo si el procedimiento es correcto?",
    "opciones": ["Porque nd es la frecuencia acumulada hasta el intervalo anterior y siempre es menor o igual al valor acumulado de búsqueda", "Porque la fórmula incluye un valor absoluto implícito", "Porque nd siempre vale cero"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.32. Si a todas las puntuaciones de una distribución cuya mediana es 24 se les resta 4 puntos, la nueva mediana será:",
    "opciones": ["20", "24", "28"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.33. Si todas las puntuaciones de una distribución con mediana 15 se multiplican por 3, la nueva mediana es:",
    "opciones": ["15", "30", "45"],
    "correcta": 2
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.34. En la distribución de tiempos de reacción: 180, 190, 200, 210, 950 ms, ¿cuál es el valor de la mediana?",
    "opciones": ["200 ms", "346 ms", "210 ms"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.35. En la muestra anterior [180, 190, 200, 210, 950 ms], si el valor extremo 950 se sustituye por 1.500 ms, ¿qué le ocurre a la mediana?",
    "opciones": ["Aumenta considerablemente", "Permanece exactamente en 200 ms", "Disminuye"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.36. ¿Qué estadístico de tendencia central representa el percentil 50 (P50)?",
    "opciones": ["La media", "La mediana", "La moda"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.37. ¿Cuál es el punto de corte que divide un polígono o histograma de frecuencias en dos partes de superficie idéntica?",
    "opciones": ["La mediana", "La media", "La moda"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.38. Si la mediana de una variable ordinal toma el valor 'Notable', ¿podemos calcular válidamente la media aritmética?",
    "opciones": ["Sí, asignando un 8 numérico a Notable", "No, porque la media no está definida para escalas ordinales", "Sí, si la muestra es grande"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.39. En una muestra de 10 datos, 5 sujetos obtienen un 3 y 5 sujetos obtienen un 7. La mediana es:",
    "opciones": ["3", "5", "7"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.40. Si en la fórmula de la mediana los datos son: Li = 4,5; n = 30; nd = 12; nc = 6; I = 2, el valor de la mediana es:",
    "opciones": ["5,0", "5,5", "6,0"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.41. Para calcular el percentil 25 (P25) en una muestra de n = 80 casos, el valor acumulado inicial de búsqueda (k · n / 100) es:",
    "opciones": ["20", "25", "40"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.42. En una muestra de n = 120 sujetos, el valor acumulado de búsqueda para hallar el percentil 75 (P75) es:",
    "opciones": ["75", "90", "100"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.43. Si una persona obtiene una puntuación directa correspondiente al Percentil 65 en un test de aptitud espacial, podemos concluir que:",
    "opciones": ["Ha fallado el 65% de los ítems", "Deja por debajo de su puntuación al 65% de los sujetos de su grupo", "Deja por encima de sí al 65% de los sujetos"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.44. En una distribución con n = 100, para calcular el P30 el intervalo crítico tiene Li = 20,5, nd = 22, nc = 16 e I = 4. ¿Cuál es el percentil 30?",
    "opciones": ["21,5", "22,5", "23,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.45. En una distribución continua con n = 200, ¿cuántos casos se sitúan teóricamente entre el percentil 20 y el percentil 70?",
    "opciones": ["50 casos", "100 casos", "140 casos"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.46. El primer cuartil (Q1) equivale siempre exactamente al:",
    "opciones": ["Percentil 10", "Percentil 25", "Percentil 50"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.47. El tercer cuartil (Q3) deja por encima de sí al:",
    "opciones": ["25% de los casos", "75% de los casos", "50% de los casos"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.48. El cuarto decil (D4) equivale formalmente al:",
    "opciones": ["Percentil 4", "Percentil 40", "Cuartil 2"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.49. Si el decil 8 (D8) de una prueba de memoria es 38 puntos, el porcentaje de participantes que superan los 38 puntos es:",
    "opciones": ["80%", "20%", "8%"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.50. Si nos dan una puntuación directa X = 20 y queremos saber a qué percentil k corresponde, ¿qué fórmula debemos aplicar?",
    "opciones": ["La fórmula directa de Pk sustituyendo k por 20", "La fórmula donde k está despejada: k = (100 / n) · [nd + ((X - Li) · nc / I)]", "La media dividida entre la varianza multiplicada por 100"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.51. En un intervalo [16 - 20] con límites exactos [15,5 - 20,5], I = 5, nc = 4, nd = 33 y n = 40. Para la puntuación X = 20, el término (X - Li)·nc / I vale (4,5 · 4)/5 = 3,6. Sumando nd (33) obtenemos 36,6. Dividiendo entre n (40) y multiplicando por 100 da 91,5. Siguiendo la regla de redondeo oficial de la UNED, a X = 20 le corresponde el percentil:",
    "opciones": ["P91", "P92", "P91,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.52. Según el criterio de redondeo para percentiles en los manuales de la UNED, si el valor de k resulta 74,4, el percentil asignado es:",
    "opciones": ["P74", "P75", "P74,5"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.53. Si una puntuación coincide exactamente con el límite exacto superior de un intervalo y el límite exacto inferior del siguiente:",
    "opciones": ["No se puede calcular su percentil", "Se puede utilizar cualquiera de los dos intervalos como intervalo crítico y el resultado es idéntico", "Es obligatorio descartar la observación"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.54. Para calcular percentiles con pocos datos sin agrupar (por ejemplo: 2, 3, 4, 5, 6, 7, 9 con n = 7), ¿qué amplitud (I) se asume para cada valor entero?",
    "opciones": ["0", "1", "0,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.55. Si para el valor entero 6 sus límites exactos son 5,5 y 6,5, la amplitud es:",
    "opciones": ["6,5 - 5,5 = 1", "6,5 + 5,5 = 12", "0,5"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.56. En una distribución con n = 150 y frecuencias acumuladas para los intervalos [1-2]: 10, [3-4]: 40, [5-6]: 90, [7-8]: 130, [9-10]: 150. Para el Percentil 30, k·n/100 = 45. El intervalo crítico es:",
    "opciones": ["[3 - 4]", "[5 - 6]", "[7 - 8]"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.57. Continuando con el ejercicio anterior: con Li = 4,5; k·n/100 = 45; nd = 40; nc = 50 e I = 2. El cálculo arroja P30 = 4,5 + [(45 - 40)/50] · 2. ¿Cuál es el valor del P30?",
    "opciones": ["4,6", "4,7", "5,1"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.58. Si en una muestra de n = 50 el percentil 40 tiene un valor de búsqueda kn/100 = 20, con Li = 9,5, nd = 15, nc = 10 e I = 3, el P40 vale:",
    "opciones": ["10,5", "11,0", "11,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.59. El rango intercuartílico (RQ = Q3 - Q1) en una distribución con Q1 = 18 y Q3 = 42 es igual a:",
    "opciones": ["12", "24", "60"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.60. Para la distribución anterior (Q1 = 18, Q3 = 42), la desviación cuartílica o rango semi-intercuartílico ((Q3 - Q1)/2) es:",
    "opciones": ["12", "24", "30"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.61. En la muestra de respuestas: 'Rojo', 'Azul', 'Rojo', 'Verde', 'Rojo', 'Azul', la moda es:",
    "opciones": ["Azul", "Rojo", "Verde"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.62. En la serie de puntuaciones: 2, 3, 5, 6, 8, 9, ¿cuál es la moda?",
    "opciones": ["5,5", "No existe moda (distribución amodal)", "2"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.63. En la serie de datos: 3, 3, 4, 5, 6, 6, 7, 8, las modas son:",
    "opciones": ["Solo el 3", "3 y 6 (distribución bimodal)", "No tiene moda"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.64. Si una distribución está agrupada en intervalos de igual amplitud y las frecuencias son: [10-14]: 4; [15-19]: 15; [20-24]: 8; [25-29]: 3, ¿cuál es la moda aproximada?",
    "opciones": ["15 (el límite inferior)", "17 (el punto medio del intervalo modal)", "19 (el límite superior)"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.65. En la distribución de frecuencias [1-5]: 6; [6-10]: 14; [11-15]: 14; [16-20]: 5, los dos intervalos modales son adyacentes ([6-10] y [11-15]). En este caso, la moda se calcula como:",
    "opciones": ["El punto medio global entre ambos o el límite común (10,5)", "No tiene moda", "14"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.66. Si los intervalos de una tabla tienen diferente amplitud, el intervalo modal no es necesariamente el de mayor frecuencia absoluta, sino el de mayor:",
    "opciones": ["Frecuencia relativa acumulada", "Densidad de frecuencia (ni / I)", "Punto medio"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.67. El intervalo A tiene ni = 20 y amplitud I = 5 (densidad = 4). El intervalo B tiene ni = 15 y amplitud I = 2 (densidad = 7,5). ¿En qué intervalo se sitúa la moda?",
    "opciones": ["En el intervalo A por tener mayor ni", "En el intervalo B por presentar mayor densidad de frecuencia", "En ambos simultáneamente"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.68. ¿Cuál es el único índice de tendencia central que se puede calcular en variables con nivel de medida nominal?",
    "opciones": ["La media", "La mediana", "La moda"],
    "correcta": 2
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.69. En una distribución asimétrica positiva (con cola hacia la derecha), el orden característico de las medidas suele ser:",
    "opciones": ["Media > Mediana > Moda", "Moda > Mediana > Media", "Mediana > Media > Moda"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.70. En una distribución asimétrica negativa (con cola hacia la izquierda), el orden característico de las medidas suele ser:",
    "opciones": ["Media < Mediana < Moda", "Media > Mediana > Moda", "Moda < Mediana < Media"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.71. En una distribución unimodal y perfectamente simétrica se verifica que:",
    "opciones": ["Media = Mediana = Moda", "Media > Mediana > Moda", "Media < Mediana < Moda"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.72. Si en un informe estadístico se indica que Media = 45 y Mediana = 32, ¿qué forma de distribución cabe esperar razonablemente?",
    "opciones": ["Asimetría positiva", "Asimetría negativa", "Distribución normal simétrica"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.73. Si en un examen muy difícil la mayoría de los alumnos obtiene puntuaciones muy bajas y solo unos pocos obtienen notas altas, la distribución presentará:",
    "opciones": ["Asimetría positiva", "Asimetría negativa", "Simetría perfecta"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.74. En un examen extraordinariamente sencillo donde casi todos los estudiantes obtienen calificaciones altas, la distribución presentará:",
    "opciones": ["Asimetría negativa", "Asimetría positiva", "Forma bimodal sin sesgo"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.75. Si una distribución salarial en una empresa tiene Media = 3.500 € y Mediana = 1.400 €, ¿cuál es el índice más adecuado para reflejar el salario típico?",
    "opciones": ["La media aritmética", "La mediana, al no verse afectada por los sueldos atípicos de la directiva", "El percentil 90"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.76. ¿Cuál de los siguientes índices es más sensible a valores extremos o 'outliers'?",
    "opciones": ["La mediana", "La media aritmética", "La moda"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.77. Si a todas las puntuaciones de un conjunto se les suma la constante 10, ¿qué ocurre con la moda?",
    "opciones": ["Permanece igual", "Aumenta en 10", "Se multiplica por 10"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.78. Si a todas las puntuaciones se las multiplica por 4, la nueva moda será:",
    "opciones": ["La moda original dividida entre 4", "4 veces la moda original", "La moda original"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.79. Una variable cuantitativa discreta toma los valores 1, 2, 3 con frecuencias 10, 20, 10. La media, mediana y moda son respectivamente:",
    "opciones": ["Media = 2, Mediana = 2, Moda = 2", "Media = 2, Mediana = 20, Moda = 2", "Media = 1,5, Mediana = 2, Moda = 3"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.80. ¿Se puede calcular la moda en una distribución con intervalos abiertos en los extremos?",
    "opciones": ["No, en ningún caso", "Sí, siempre que el intervalo modal no coincida con el intervalo abierto", "Solo si la variable es nominal"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.81. Dadas las frecuencias acumuladas na: [0-9]: 5; [10-19]: 15; [20-29]: 30; [30-39]: 40. ¿Cuál es la frecuencia absoluta (ni) del intervalo [20-29]?",
    "opciones": ["15", "30", "45"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.82. Con los datos de la pregunta anterior, ¿cuál es el tamaño muestral total (n)?",
    "opciones": ["30", "40", "90"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.83. Con los datos de la pregunta 2.81 (n = 40), ¿en qué intervalo cae la mediana (n/2 = 20)?",
    "opciones": ["[10 - 19]", "[20 - 29]", "[30 - 39]"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.84. Continuando con el cálculo de la mediana para el intervalo [20 - 29] (límites exactos 19,5 - 29,5; I = 10; nd = 15; nc = 15): Md = 19,5 + [(20 - 15)/15] · 10 = 19,5 + 3,33. La mediana es:",
    "opciones": ["22,83", "23,33", "24,50"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.85. En esa misma muestra de n = 40, para calcular el primer cuartil Q1 (k = 25), el caso acumulado de búsqueda (k·n/100) es:",
    "opciones": ["10", "15", "25"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.86. Como el caso acumulado de búsqueda para Q1 es 10, y las acumuladas son na1=5 y na2=15, ¿en qué intervalo se encuentra Q1?",
    "opciones": ["[0 - 9]", "[10 - 19]", "[20 - 29]"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.87. Para el intervalo [10 - 19] de Q1 (Li = 9,5; I = 10; nd = 5; nc = 10; kn/100 = 10), el valor de Q1 es 9,5 + [(10 - 5)/10] · 10 = 9,5 + 5. ¿Cuál es el resultado?",
    "opciones": ["14,5", "15,0", "15,5"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.88. Con esa misma distribución, para hallar el tercer cuartil Q3 (k = 75, n = 40), el caso de búsqueda es kn/100 = 30. Dado que na del intervalo [20-29] es exactamente 30, el valor de Q3 coincide con:",
    "opciones": ["El punto medio del intervalo", "El límite exacto superior del intervalo: 29,5", "35,0"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.89. Con los valores obtenidos: Q1 = 14,5 y Q3 = 29,5, el recorrido intercuartílico (Q3 - Q1) es:",
    "opciones": ["14,5", "15,0", "15,5"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.90. La desviación cuartílica para esos datos ((Q3 - Q1) / 2) es:",
    "opciones": ["7,5", "15,0", "22,0"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.91. En un estudio, las puntuaciones son: 4, 4, 4, 8, 8, 8. La media aritmética es:",
    "opciones": ["4", "6", "8"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.92. En la muestra anterior [4, 4, 4, 8, 8, 8], la distribución es:",
    "opciones": ["Unimodal con moda 6", "Bimodal con modas 4 y 8", "Amodal"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.93. En esa misma muestra [4, 4, 4, 8, 8, 8], la mediana es:",
    "opciones": ["4", "6", "8"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.94. Si una distribución acumulada se construye de arriba hacia abajo (orden descendente de X), ¿desde dónde deben acumularse las frecuencias para calcular correctamente los percentiles?",
    "opciones": ["Desde el valor más alto hacia el más bajo", "Siempre desde el valor más bajo de X hasta el más alto", "Da exactamente igual"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.95. Si a una variable con media 100 se le resta 100 a cada puntuación y luego el resultado se divide entre 10, la nueva media aritmética es:",
    "opciones": ["0", "1", "10"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.96. ¿Cuál es la media aritmética de una distribución compuesta exclusivamente por puntuaciones diferenciales (x = X - Media)?",
    "opciones": ["0", "1", "La varianza"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.97. En un test de 50 preguntas, la nota media es 25. Si cada acierto vale 2 puntos y se otorgan 5 puntos adicionales a todos los alumnos (Y = 2X + 5), la nueva media es:",
    "opciones": ["50", "55", "60"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.98. Si dos sujetos pertenecen a grupos distintos y ambos obtienen una puntuación que se ubica en el Percentil 85 de su respectivo grupo, podemos afirmar que:",
    "opciones": ["Ambos tienen la misma puntuación directa", "Ambos ocupan exactamente la misma posición relativa dentro de sus respectivos grupos", "El sujeto del grupo con mayor media acertó más preguntas"],
    "correcta": 1
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.99. Si el recorrido intercuartílico contiene al 50% central de los datos, ¿qué porcentaje de datos queda por fuera de dicho intervalo?",
    "opciones": ["El 25% por debajo y el 25% por encima (50% en total)", "El 50% por debajo", "Ninguno"],
    "correcta": 0
  },
  {
    "tema": "Unidad 2 - repaso",
    "pregunta": "2.100. En una muestra de n = 50 sujetos con media = 30, si sumamos una puntuación atípica extrema de 200 (n = 51), la nueva media:",
    "opciones": ["Permanece prácticamente inalterada", "Pasa a ser (50 · 30 + 200) / 51 = 1.700 / 51 = 33,33", "Baja a 25"],
    "correcta": 1
  }
    ,{
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué relación existe conceptualmente entre los términos 'dispersión' y 'variabilidad' en el análisis de datos?",
    "opciones": [
      "Son términos formalmente equivalentes y pueden emplearse indistintamente",
      "La dispersión solo se aplica a variables cualitativas y la variabilidad a cuantitativas",
      "La variabilidad mide la posición central y la dispersión mide el apuntamiento"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un conjunto de observaciones presenta una dispersión igual a cero, significa que:",
    "opciones": [
      "La media de la variable es igual a cero",
      "Todas las observaciones tienen exactamente el mismo valor",
      "La distribución tiene asimetría positiva extrema"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuál de los siguientes estadísticos es una medida de variabilidad relativa y carece de unidades de medida?",
    "opciones": [
      "La desviación típica",
      "La varianza",
      "El coeficiente de variación"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Una distribución con baja variabilidad se caracteriza por ser:",
    "opciones": [
      "Homogénea, con valores muy concentrados en torno al centro",
      "Heterogénea, con valores muy distantes entre sí",
      "Bimodal y platicúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Cuando una muestra es muy heterogénea y la dispersión es muy elevada, la media aritmética:",
    "opciones": [
      "Pasa a coincidir necesariamente con la moda",
      "Pierde representatividad como resumen de la tendencia central",
      "Se hace numéricamente igual a cero"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuáles de las siguientes medidas de variabilidad se calculan a partir de distancias respecto a una medida de tendencia central?",
    "opciones": [
      "La varianza y la desviación típica",
      "La amplitud total y la amplitud intercuartil",
      "El rango y el percentil 90"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuáles de las siguientes medidas de dispersión NO se apoyan en una medida de tendencia central para su formulación?",
    "opciones": [
      "La desviación media y la varianza",
      "La amplitud total y la amplitud intercuartil",
      "La cuasivarianza y el coeficiente de variación"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una escala de intervalos de valores enteros donde el intervalo inferior es 70-72 y el superior es 79-81, la amplitud total calculada mediante límites exactos es:",
    "opciones": [
      "81 - 70 = 11",
      "81,5 - 69,5 = 12",
      "81,5 - 70,5 = 11"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dadas las observaciones no agrupadas: 122, 130, 124, 123, 135, la amplitud total o rango vale:",
    "opciones": [
      "13",
      "14",
      "135"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en una investigación sobre tiempo de respuesta los límites exactos van de 10,5 a 45,5 ms, la amplitud total es:",
    "opciones": [
      "35 ms",
      "35,5 ms",
      "36 ms"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La principal desventaja del rango o amplitud total es que:",
    "opciones": [
      "Es muy sensible a los dos valores extremos y no informa sobre la estructura interna de los datos",
      "Requiere conocer obligatoriamente la mediana",
      "Siempre toma valores inferiores a la desviación típica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La amplitud intercuartil (AI) se obtiene restando:",
    "opciones": [
      "P75 - P25 (es decir, Q3 - Q1)",
      "P90 - P10",
      "Media - Mediana"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué proporción o porcentaje central de observaciones queda comprendido en el intervalo intercuartílico?",
    "opciones": [
      "El 25% de los datos",
      "El 50% de los datos",
      "El 75% de los datos"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un test de razonamiento abstracto Q1 = 4 y Q3 = 7, la amplitud intercuartil vale:",
    "opciones": [
      "11",
      "3",
      "5,5"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una distribución presenta valores acumulados con pa(19-24) = 0,25 y pa(31-36) = 0,75, tomando los límites superiores exactos 24,5 y 36,5, la amplitud intercuartil es:",
    "opciones": [
      "36,5 - 24,5 = 12",
      "36 - 19 = 17",
      "31 - 24 = 7"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Por qué la amplitud intercuartil es preferible al rango tradicional en distribuciones con sesgo o valores atípicos?",
    "opciones": [
      "Porque elimina el 25% inferior y el 25% superior, siendo resistente a valores extremos",
      "Porque siempre resulta idéntica a la desviación típica",
      "Porque permite calcularse en variables nominales"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La suma simple de todas las diferencias de las puntuaciones respecto a la media aritmética, Σ (Xi - Media), siempre es igual a:",
    "opciones": [
      "0",
      "1",
      "n · Media"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Para evitar que la suma de desviaciones se anule por compensación de signos positivos y negativos, la desviación media (DM):",
    "opciones": [
      "Toma el valor absoluto de cada una de las diferencias antes de promediarlas",
      "Multiplica las desviaciones por n",
      "Resta la mediana en lugar de la media"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dadas las puntuaciones directas: 122, 130, 124, 123 y 135 (media = 126,8), la desviación media es:",
    "opciones": [
      "4,56",
      "22,8",
      "0"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si las puntuaciones de un sujeto son 4 y 8 (media = 6), ¿cuánto vale la desviación media?",
    "opciones": [
      "0",
      "2",
      "4"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Por qué en la estadística aplicada actual se utiliza preferentemente la varianza en lugar de la desviación media?",
    "opciones": [
      "Porque la función cuadrática tiene propiedades matemáticas y operativas mucho más tratables que el valor absoluto",
      "Porque la desviación media solo admite números enteros",
      "Porque la varianza siempre es un número menor que la desviación media"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La definición formal de la varianza muestral (S_X^2) es:",
    "opciones": [
      "El promedio de las desviaciones absolutas respecto a la mediana",
      "El promedio de los cuadrados de las desviaciones de las puntuaciones respecto a la media",
      "La raíz cuadrada de las puntuaciones directas elevadas al cuadrado"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La fórmula abreviada de cálculo de la varianza para datos sin agrupar es:",
    "opciones": [
      "S_X^2 = (Σ Xi^2 / n) - (Media)^2",
      "S_X^2 = (Σ Xi / n)^2 - Media^2",
      "S_X^2 = Σ (Xi - Media) / n"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dadas las 5 puntuaciones: 5, 13, 4, 15, 3. La media es 8 y Σ Xi^2 = 444. ¿Cuál es su varianza?",
    "opciones": [
      "24,8",
      "88,8",
      "4,98"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Con los mismos datos (5, 13, 4, 15, 3 cuya varianza es 24,8), la desviación típica muestral es:",
    "opciones": [
      "4,98",
      "6,15",
      "2,23"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Para las notas: 5,7; 8,4; 6,0; 6,1; 8,6. Sabiendo que Σ Yi = 34,8 (media = 6,96) y Σ Yi^2 = 250,22, la varianza es:",
    "opciones": [
      "1,60",
      "2,44",
      "1,26"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué valor adquiere la desviación típica si todos los sujetos obtienen la misma nota de 7 en una evaluación?",
    "opciones": [
      "0",
      "7",
      "1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Puede la desviación típica o la varianza adoptar un valor estrictamente negativo?",
    "opciones": [
      "Sí, cuando todas las puntuaciones son negativas",
      "Sí, si la asimetría de la curva es negativa",
      "No, nunca pueden ser negativas; su valor mínimo posible es cero"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la varianza de un conjunto de tiempos de reacción es 571,21 ms^2, la desviación típica es aproximadamente:",
    "opciones": [
      "23,9 ms",
      "285,6 ms",
      "15,2 ms"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la desviación típica de una variable psicológica es 4,17, su varianza vale:",
    "opciones": [
      "17,39",
      "2,04",
      "8,34"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Por qué es tan empleada la desviación típica en informes diagnósticos y clínicos?",
    "opciones": [
      "Porque restituye la métrica original de la variable al aplicar la raíz cuadrada",
      "Porque no se ve afectada por ninguna transformación lineal",
      "Porque siempre oscila entre 0 y 1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una distribución agrupada en intervalos con frecuencias absolutas ni, la fórmula de la varianza es:",
    "opciones": [
      "S_X^2 = [Σ ni · (Xi - Media)^2] / n",
      "S_X^2 = [Σ ni · Xi] / n - Media",
      "S_X^2 = [Σ (Xi - Media)^2] / Σ ni^2"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La fórmula de cálculo abreviada de la varianza con frecuencias absolutas ni es:",
    "opciones": [
      "S_X^2 = [(Σ ni · Xi^2) / n] - (Media)^2",
      "S_X^2 = [(Σ ni · Xi) / n]^2 - Media",
      "S_X^2 = [Σ ni · Xi^2 - Media] / n"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si los datos vienen dados en frecuencias relativas (pi), la fórmula de la varianza equivale a:",
    "opciones": [
      "S_X^2 = Σ pi · Xi^2 - (Media)^2",
      "S_X^2 = (Σ pi · Xi)^2 - Media^2",
      "S_X^2 = [Σ pi · Xi^2] / n"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una muestra de 100 estudiantes, Σ ni·Xi^2 = 12.132.725 y la media es 347,5. La varianza es:",
    "opciones": [
      "571",
      "23,9",
      "1.518,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "A partir de la varianza anterior (S_X^2 = 571), la desviación típica del tiempo de reacción es:",
    "opciones": [
      "23,9",
      "57,1",
      "12,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una distribución de 100 niños donde Σ ni·Xi^2 = 559.465 y la media es 74,75 cm, la varianza es:",
    "opciones": [
      "7,09",
      "2,66",
      "18,45"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Tomando la varianza de la estatura de los 100 niños (S_X^2 = 7,09), su desviación típica es:",
    "opciones": [
      "2,66",
      "3,55",
      "5,03"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Al calcular la varianza de datos en intervalos mediante la calculadora, el valor Xi que se introduce representa:",
    "opciones": [
      "El punto medio o marca de clase de cada intervalo",
      "El límite superior exacto exclusivamente",
      "La amplitud del intervalo dividida por la frecuencia"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un estudiante introduce frecuencias acumuladas (na) directamente en la función estadística de la calculadora:",
    "opciones": [
      "Obtendrá un resultado incorrecto, porque deben introducirse frecuencias absolutas (ni) o relativas (pi)",
      "El cálculo será idéntico y correcto",
      "La calculadora se bloqueará por desbordamiento"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si a todas las puntuaciones Xi de una distribución se les suma una constante a (cambio de origen, Y = X + a):",
    "opciones": [
      "La varianza no se modifica: S_Y^2 = S_X^2",
      "La varianza aumenta en a unidades: S_Y^2 = S_X^2 + a",
      "La varianza se eleva al cuadrado: S_Y^2 = (S_X^2)^2"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si a cada una de las puntuaciones de un test con S_X = 4 se le suman 10 puntos de bonificación, la nueva desviación típica S_Y será:",
    "opciones": [
      "4",
      "14",
      "40"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si a todas las puntuaciones de una distribución con varianza S_X^2 = 9 se les resta una constante k = 4, la nueva varianza es:",
    "opciones": [
      "9",
      "5",
      "1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si todas las puntuaciones de una variable X se multiplican por una constante b (cambio de escala, Y = b·X), la nueva varianza es:",
    "opciones": [
      "S_Y^2 = b^2 · S_X^2",
      "S_Y^2 = b · S_X^2",
      "S_Y^2 = S_X^2 / b"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si todas las puntuaciones de una variable con S_X = 5 se multiplican por b = 3, la nueva desviación típica es:",
    "opciones": [
      "15",
      "45",
      "75"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si multiplicamos todas las puntuaciones de una variable con S_X = 3 por la constante negativa b = -4, la nueva desviación típica es:",
    "opciones": [
      "12, porque se multiplica por el valor absoluto |-4|",
      "-12",
      "48"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dada la transformación lineal Y = 3X + 7, si la varianza de X es S_X^2 = 4, ¿cuál es la varianza de Y?",
    "opciones": [
      "36",
      "19",
      "43"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dada la transformación lineal Y = -2X + 15, si la desviación típica de X es S_X = 4, ¿cuál es la desviación típica de Y?",
    "opciones": [
      "8",
      "-8",
      "23"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una variable X tiene media = 20 y varianza = 16, y definimos Y = 0,5·X - 2, la desviación típica de Y es:",
    "opciones": [
      "2",
      "4",
      "8"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La cuasivarianza muestral (s^2) se define como:",
    "opciones": [
      "[Σ (Xi - Media)^2] / (n - 1)",
      "[Σ (Xi - Media)^2] / n",
      "[Σ (Xi - Media)^2] / (n + 1)"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Por qué motivo fundamental se introduce la cuasivarianza en el programa de análisis de datos?",
    "opciones": [
      "Porque la varianza muestral divide entre n y subestima el parámetro poblacional, mientras que la cuasivarianza es un estimador insesgado",
      "Porque permite calcular la dispersión en variables cualitativas",
      "Porque es obligatoria para calcular percentiles"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La fórmula de conversión para obtener la cuasivarianza a partir de la varianza muestral S_X^2 es:",
    "opciones": [
      "s^2 = S_X^2 · [n / (n - 1)]",
      "s^2 = S_X^2 · [(n - 1) / n]",
      "s^2 = S_X^2 / (n - 1)"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una muestra de 60 varones, la suma de cuadrados ponderada es Σ ni·(Xi - Media)^2 = 403,934. La cuasivarianza es:",
    "opciones": [
      "6,85",
      "6,73",
      "3,54"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en una muestra de n = 21 sujetos la varianza es S_X^2 = 20, la cuasivarianza vale:",
    "opciones": [
      "21",
      "19,05",
      "20"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En las calculadoras científicas estándar con modo estadístico, la tecla identificada habitualmente como σ_n (o xσn) calcula:",
    "opciones": [
      "La desviación típica muestral (dividida por n)",
      "La cuasidesviación típica (dividida por n - 1)",
      "La media aritmética ponderada"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En la calculadora científica, la tecla rotulada como s (o xσn-1) corresponde a:",
    "opciones": [
      "La cuasidesviación típica muestral",
      "La desviación típica dividida entre n",
      "El error típico de la moda"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Cuando el tamaño muestral n es extremadamente grande (por ejemplo, n = 50.000):",
    "opciones": [
      "La diferencia numérica entre la varianza y la cuasivarianza es prácticamente despreciable",
      "La cuasivarianza se vuelve exactamente el doble que la varianza",
      "La varianza deja de ser calculable"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "El coeficiente de variación (CV) se define formalmente como:",
    "opciones": [
      "(S_X / Media) · 100",
      "(Media / S_X) · 100",
      "(S_X^2 / Media) · 100"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuándo resulta imprescindible emplear el coeficiente de variación en lugar de la desviación típica?",
    "opciones": [
      "Al comparar la dispersión entre grupos con medias notablemente distintas o medidos en escalas diferentes",
      "Cuando la distribución es perfectamente normal y mesocúrtica",
      "Cuando todos los sujetos obtienen puntuaciones diferenciales nulas"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un grupo de varones tiene media = 30 y S_X = 8 (CV_X = 26,67%), y un grupo de mujeres tiene media = 15 y S_Y = 6 (CV_Y = 40%):",
    "opciones": [
      "El grupo de mujeres presenta mayor grado de dispersión relativa que el de varones",
      "El grupo de varones presenta mayor variabilidad relativa por tener mayor desviación típica",
      "Ambos grupos presentan la misma variabilidad"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una prueba de matemáticas la media es 41 con S_Y = 5 (CV = 12,20%), y en inteligencia la media es 108 con S_X = 6 (CV = 5,56%). ¿Dónde es mayor la dispersión relativa?",
    "opciones": [
      "En matemáticas",
      "En inteligencia",
      "Es idéntica en ambas materias"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si dos grupos evaluados en la misma variable tienen idéntica media aritmética:",
    "opciones": [
      "Basta con comparar directamente sus desviaciones típicas para saber cuál tiene mayor dispersión",
      "El coeficiente de variación no se puede calcular",
      "Obligatoriamente ambos grupos tienen el mismo apuntamiento"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la media de un test de memoria es 50 y la desviación típica es 10, ¿cuánto vale el coeficiente de variación?",
    "opciones": [
      "20%",
      "5%",
      "50%"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si a todas las puntuaciones de un grupo se les multiplica por una constante c = 4 (c > 0), el coeficiente de variación:",
    "opciones": [
      "Permanece inalterado, pues tanto la media como la desviación típica se multiplican por 4",
      "Se cuadruplica",
      "Se divide por 4"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "El concepto de asimetría hace referencia a:",
    "opciones": [
      "El grado en que los datos se distribuyen equilibradamente a ambos lados de los valores centrales",
      "La altura o agudeza máxima que alcanza la curva de frecuencias",
      "La distancia euclídea entre el primer decil y el noveno decil"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una distribución unimodal simétrica se cumple teóricamente que:",
    "opciones": [
      "Media = Mediana = Moda",
      "Media > Mediana > Moda",
      "Media < Mediana < Moda"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué caracteriza a una distribución con asimetría positiva o a la derecha?",
    "opciones": [
      "A valores bajos de la variable corresponden frecuencias altas y la cola se prolonga hacia las puntuaciones altas",
      "A valores altos de la variable corresponden frecuencias altas y la cola va a la izquierda",
      "Todas las frecuencias son perfectamente uniformes"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué orden de relación guardan los estadísticos en una distribución unimodal con asimetría positiva?",
    "opciones": [
      "Media > Mediana > Moda",
      "Moda > Mediana > Media",
      "Mediana > Media > Moda"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué caracteriza a una distribución con asimetría negativa o a la izquierda?",
    "opciones": [
      "Las mayores frecuencias se agrupan en las puntuaciones altas y la cola se alarga hacia los valores bajos",
      "Las mayores frecuencias se agrupan en las puntuaciones bajas",
      "La varianza es un número estrictamente negativo"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En una distribución unimodal con asimetría negativa, ¿cuál es la relación ordinal esperada?",
    "opciones": [
      "Media < Mediana < Moda",
      "Media > Mediana > Moda",
      "Media = Moda ≠ Mediana"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un examen es sumamente asequible y casi todos los alumnos obtienen sobresaliente, la distribución resultante es:",
    "opciones": [
      "Asimétrica negativa",
      "Asimétrica positiva",
      "Simétrica mesocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una prueba diagnóstica es muy compleja y la inmensa mayoría obtiene puntuaciones mínimas, la distribución es:",
    "opciones": [
      "Asimétrica positiva",
      "Asimétrica negativa",
      "Platicúrtica uniforme"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La fórmula del índice de asimetría de Pearson (Ap) es:",
    "opciones": [
      "Ap = (Media - Moda) / S_X",
      "Ap = (Moda - Media) / S_X",
      "Ap = (Media - Mediana) / S_X^2"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "El índice de asimetría de Pearson tiene como requisito de aplicación que la variable sea:",
    "opciones": [
      "Unimodal",
      "Bimodal o multimodal",
      "Exclusivamente cualitativa"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una distribución de notas tiene Media = 42, Moda = 42 y S_X = 5,86, el índice de asimetría de Pearson es:",
    "opciones": [
      "0",
      "1",
      "-1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un estudio de inteligencia la Media es 108, la Moda es 105 y la desviación típica es 6, el índice de Pearson es:",
    "opciones": [
      "+0,50",
      "-0,50",
      "+0,30"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una distribución bimodal presenta modas en X = 27,5 y X = 33,5, ¿puede calcularse el índice de asimetría de Pearson?",
    "opciones": [
      "No, porque al no ser unimodal no se puede aplicar la fórmula de Pearson",
      "Sí, calculando la media de ambas modas",
      "Sí, restando ambas modas en el numerador"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La fórmula del índice de asimetría de Fisher (A_F) con frecuencias absolutas se basa en:",
    "opciones": [
      "[Σ ni · (Xi - Media)^3] / (n · S_X^3)",
      "[Σ ni · (Xi - Media)^2] / (n · S_X^2)",
      "[Σ ni · (Xi - Media)^4] / (n · S_X^4) - 3"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Por qué el índice de Fisher eleva las desviaciones a la tercera potencia (al cubo)?",
    "opciones": [
      "Para conservar el signo de las diferencias y detectar hacia qué cola se concentran las desviaciones mayores",
      "Para eliminar los valores negativos como en la varianza",
      "Para equiparar las dimensiones con la media"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en una muestra simétrica Σ ni·(Xi - Media)^3 = 0, el índice de asimetría de Fisher vale:",
    "opciones": [
      "0",
      "1",
      "-3"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un análisis el índice de asimetría de Fisher resulta A_F = +0,43, se concluye que:",
    "opciones": [
      "La distribución tiene asimetría positiva",
      "La distribución tiene asimetría negativa",
      "La distribución es mesocúrtica perfecta"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si tras calcular la asimetría de Fisher se obtiene A_F = -0,30, la interpretación correcta es:",
    "opciones": [
      "Asimetría negativa (la cola se alarga hacia las puntuaciones bajas)",
      "Asimetría positiva",
      "Distribución con curtosis nula"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La curtosis o apuntamiento mide:",
    "opciones": [
      "La mayor o menor concentración de frecuencias en la zona central en comparación con la distribución normal",
      "La diferencia entre la puntuación máxima y mínima observada",
      "La distancia de la mediana al cuartil tercero"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Una distribución con un apuntamiento muy similar al de la distribución normal se denomina:",
    "opciones": [
      "Mesocúrtica",
      "Leptocúrtica",
      "Platicúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Una distribución muy apuntada, con frecuencias muy concentradas en torno al centro, es:",
    "opciones": [
      "Leptocúrtica",
      "Platicúrtica",
      "Mesocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Una distribución más aplanada o achatada que la distribución normal se define como:",
    "opciones": [
      "Platicúrtica",
      "Leptocúrtica",
      "Mesocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En la fórmula UNED de curtosis, Cr = [Σ ni·(Xi - Media)^4 / (n·S_X^4)] - 3, una distribución mesocúrtica arroja un Cr de:",
    "opciones": [
      "0",
      "3",
      "-3"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un ejercicio resuelto ofrece un índice de curtosis Cr = -0,68, la distribución debe clasificarse como:",
    "opciones": [
      "Platicúrtica",
      "Leptocúrtica",
      "Mesocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un informe señala que Cr = -0,17, se indica frecuentemente que:",
    "opciones": [
      "Es ligeramente platicúrtica pero su apuntamiento es muy próximo al de la normal por estar cerca de 0",
      "Es fuertemente leptocúrtica",
      "Tiene asimetría negativa acusada"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Por qué se resta 3 en la formulación clásica del coeficiente de curtosis?",
    "opciones": [
      "Para tomar como punto de referencia 0 a la distribución normal, cuyo cociente de orden 4 vale exactamente 3",
      "Porque existen tres cuartiles en la distribución",
      "Para corregir los grados de libertad muestrales"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "El diagrama de caja y bigotes (boxplot) es especialmente apropiado para variables de nivel de medida:",
    "opciones": [
      "Cuantitativo (escala de intervalo o de razón)",
      "Cualitativo nominal exclusivamente",
      "Cualitativo dicotómico"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué estadísticos delimitan exactamente los extremos de la caja central en un boxplot?",
    "opciones": [
      "El primer cuartil Q1 (borde inferior) y el tercer cuartil Q3 (borde superior)",
      "El valor mínimo y el valor máximo de la muestra",
      "La media menos una desviación típica y la media más una desviación típica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La línea transversal dibujada en el interior de la caja de un boxplot representa siempre:",
    "opciones": [
      "La mediana (segundo cuartil, Q2)",
      "La media aritmética",
      "La moda de la variable"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La anchura o altura de la caja del boxplot equivale matemáticamente a:",
    "opciones": [
      "La amplitud intercuartil (Q3 - Q1)",
      "La amplitud total (Xmáx - Xmín)",
      "La cuasivarianza muestral"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuál es la fórmula para determinar el límite superior (LS) en la detección de valores atípicos en un diagrama de caja?",
    "opciones": [
      "LS = Q3 + 1,5 · AI",
      "LS = Q3 + 3 · AI",
      "LS = Media + 1,5 · S_X"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuál es la fórmula para determinar el límite inferior (LI) en un diagrama de caja?",
    "opciones": [
      "LI = Q1 - 1,5 · AI",
      "LI = Q1 - 3 · AI",
      "LI = Media - 1,5 · S_X"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en flexibilidad psicológica Q1 = 4 y Q3 = 7 (AI = 3), el límite superior del boxplot es:",
    "opciones": [
      "7 + 1,5 · 3 = 11,5",
      "7 + 3 = 10",
      "7 + 1,5 · 4 = 13"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Con los mismos datos (Q1 = 4, Q3 = 7, AI = 3), el límite inferior del boxplot vale:",
    "opciones": [
      "4 - 1,5 · 3 = -0,5",
      "4 - 3 = 1",
      "4 - 1,5 = 2,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un sujeto presenta una puntuación X = 13 en la variable anterior (donde LS = 11,5), dicho valor:",
    "opciones": [
      "Es considerado formalmente un valor atípico",
      "Forma parte habitual del bigote superior",
      "Obliga a recalcular el cuartil 3"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En un diagrama de caja se considera valor atípico extremo (en lugar de leve o moderado) si queda situado más allá de:",
    "opciones": [
      "3 veces la amplitud intercuartil respecto a los cuartiles",
      "1,5 veces la amplitud intercuartil respecto a los cuartiles",
      "2 desviaciones típicas respecto a la mediana"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un boxplot ambos bigotes tienen igual longitud y no hay atípicos o estos se reparten equitativamente a ambos lados, la distribución es:",
    "opciones": [
      "Simétrica",
      "Asimétrica positiva",
      "Platicúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un boxplot el bigote superior es mucho más largo que el inferior y la mediana está pegada a Q1, la distribución tiene:",
    "opciones": [
      "Asimetría positiva",
      "Asimetría negativa",
      "Simetría bilateral"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la mediana está próxima a Q3 y el bigote inferior se estira considerablemente hacia abajo, la distribución es:",
    "opciones": [
      "Asimétrica negativa",
      "Asimétrica positiva",
      "Normal estandarizada"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Una puntuación diferencial (xi) representa matemáticamente:",
    "opciones": [
      "La distancia de la puntuación directa a la media: xi = Xi - Media",
      "El cociente entre la puntuación directa y la desviación típica",
      "La resta entre la puntuación directa y el valor mínimo"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuál es siempre el valor de la media aritmética de las puntuaciones diferenciales de cualquier muestra?",
    "opciones": [
      "0",
      "1",
      "La media original dividida entre dos"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué valor tiene la varianza de las puntuaciones diferenciales respecto a la varianza de las puntuaciones directas?",
    "opciones": [
      "Es exactamente igual a la varianza de las directas, pues restar la media no altera la dispersión",
      "Es siempre igual a 1",
      "Es igual a 0"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La fórmula general de la puntuación típica (zi) o estandarizada es:",
    "opciones": [
      "zi = (Xi - Media) / S_X",
      "zi = (Xi - Media) / S_X^2",
      "zi = (Xi - S_X) / Media"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Cuáles son la media y la desviación típica universales de cualquier variable expresada en puntuaciones típicas z?",
    "opciones": [
      "Media = 0 y Desviación típica = 1",
      "Media = 1 y Desviación típica = 0",
      "Media = 50 y Desviación típica = 10"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un adolescente obtiene una puntuación directa X = 100 en un test con Media = 120 y S_X = 10, su puntuación z es:",
    "opciones": [
      "-2,0 (está dos desviaciones típicas por debajo de la media)",
      "-1,0",
      "+2,0"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un vendedor tiene una puntuación en fluidez verbal X = 20 y la media grupal es 38 con S_X > 0, su puntuación típica z necesariamente es:",
    "opciones": [
      "Negativa",
      "Positiva",
      "Cero"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dadas las puntuaciones de agudeza visual de 7 personas: 20, 6, 9, 6, 12, 8, 16 (Media = 11, S_X = 4,93), la puntuación z de la segunda persona (X = 6) es:",
    "opciones": [
      "-1,01",
      "-0,41",
      "-5,00"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En un test de hábitos de estudio con 5 sujetos (X = 2, 8, 12, 3, 1), Media = 5,2 y S_X = 4,17. La puntuación típica del alumno D (X = 3) es:",
    "opciones": [
      "-0,53",
      "+0,53",
      "-1,20"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la puntuación típica de un sujeto es z = 2, la media es 10 y la varianza es 9 (S_X = 3), ¿cuál es su puntuación diferencial?",
    "opciones": [
      "x = z · S_X = 2 · 3 = 6",
      "x = 16",
      "x = 0"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Con los datos de la pregunta anterior (z = 2, Media = 10, S_X = 3), ¿cuál es la puntuación directa X del sujeto?",
    "opciones": [
      "X = Media + x = 10 + 6 = 16",
      "X = 12",
      "X = 23"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Para qué sirve transformar variables a puntuaciones típicas z?",
    "opciones": [
      "Para comparar la posición relativa de sujetos en pruebas o escalas que tienen diferentes medias y desviaciones típicas",
      "Para convertir cualquier distribución asimétrica en una distribución simétrica",
      "Para eliminar los valores decimales de las puntuaciones"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una persona obtiene z = +1,5 en extraversión y z = +0,8 en rendimiento académico, podemos afirmar que:",
    "opciones": [
      "Ocupa una posición relativa más elevada respecto a su grupo en extraversión que en rendimiento",
      "Ha obtenido mayor número de respuestas correctas en extraversión",
      "El rendimiento académico no tiene dispersión"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué ocurre con la forma de la distribución original de puntuaciones directas cuando se transforma a puntuaciones típicas z?",
    "opciones": [
      "Conserva exactamente la misma forma y asimetría que la distribución original (la tipificación lineal no normaliza la forma)",
      "Se convierte obligatoriamente en una distribución normal",
      "Pasa a ser platicúrtica y simétrica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una distribución de puntuaciones tiene Media = 11,5 y Desviación típica = 6,91, ¿cuál es el coeficiente de variación?",
    "opciones": [
      "60,09%",
      "16,64%",
      "47,75%"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un grupo 1 tiene CV = 60,09% y un grupo 2 tiene CV = 82,50% en ansiedad ante los exámenes, ¿qué grupo presenta mayor heterogeneidad?",
    "opciones": [
      "El grupo 2",
      "El grupo 1",
      "Ambos grupos son igual de heterogéneos"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la varianza de una variable X es 16, ¿cuál es la varianza de la variable Y = -3X + 5?",
    "opciones": [
      "144",
      "-48",
      "53"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la desviación típica de una variable X es 2,5, ¿cuál es la desviación típica de Y = 4X - 12?",
    "opciones": [
      "10",
      "-2",
      "40"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un histograma la cola se extiende hacia la derecha (valores positivos) con un coeficiente de Fisher A_F = +1,2, las frecuencias más altas están en:",
    "opciones": [
      "Las puntuaciones bajas de la escala",
      "Las puntuaciones altas de la escala",
      "Exclusivamente en los valores extremos de ambas colas"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en una distribución simétrica unimodal la media es 50, ¿qué valores tomarán la mediana y la moda?",
    "opciones": [
      "Mediana = 50 y Moda = 50",
      "Mediana = 25 y Moda = 75",
      "Mediana = 0 y Moda = 1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si conocemos que la desviación típica es S_X = 2 y el índice de asimetría de Pearson es Ap = -1, siendo la media igual a 18, la moda vale:",
    "opciones": [
      "20",
      "16",
      "19"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en una distribución el cuartil 1 es 10, la mediana es 15 y el cuartil 3 es 20, la distancia de Q3 a la mediana es 5 y de la mediana a Q1 es 5. Esto refleja:",
    "opciones": [
      "Simetría en el rango intercuartílico",
      "Asimetría positiva",
      "Asimetría negativa"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un diagrama de caja Q1 = 10, Mediana = 12 y Q3 = 25, la distribución en el tramo central es:",
    "opciones": [
      "Asimétrica positiva, porque (Q3 - Mediana) = 13 es mucho mayor que (Mediana - Q1) = 2",
      "Asimétrica negativa",
      "Simétrica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué ocurre con la desviación típica si a todas las puntuaciones directas se las divide por una constante positiva c = 2?",
    "opciones": [
      "La desviación típica queda dividida por 2",
      "La desviación típica queda dividida por 4",
      "La desviación típica no cambia"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué ocurre con la varianza si a todas las puntuaciones directas se las divide por una constante positiva c = 2?",
    "opciones": [
      "La varianza queda dividida por 4 (c^2)",
      "La varianza queda dividida por 2",
      "La varianza permanece invariable"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la media de una variable es negativa o cero, el coeficiente de variación:",
    "opciones": [
      "Pierde su sentido interpretativo estándar o no se puede calcular por división por cero",
      "Sigue funcionando con total normalidad tomando el valor al cuadrado",
      "Siempre da 100%"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una distribución tiene una varianza S_X^2 = 25 y se crea una variable estandarizada z = (X - Media)/S_X, la varianza de z es:",
    "opciones": [
      "1",
      "25",
      "5"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En el estudio de las propiedades de la varianza, si Y = X + 50, se deduce que:",
    "opciones": [
      "La dispersión de Y es idéntica a la dispersión de X",
      "Y tiene mucha mayor dispersión que X",
      "La varianza de Y es 50 veces la varianza de X"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En un diagrama de dispersión o en el cálculo con frecuencias, si una categoría de la variable no tiene sujetos (ni = 0):",
    "opciones": [
      "No afecta a la suma puesto que ni·Xi^2 será cero",
      "Invalida por completo la fórmula de la varianza",
      "Hace que la varianza resultante sea negativa"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dadas las puntuaciones directas: 2, 4, 6, 8, 10. La media es 6. La suma de cuadrados de las diferencias respecto a la media es:",
    "opciones": [
      "40",
      "20",
      "10"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Con los datos anteriores (2, 4, 6, 8, 10), la varianza muestral es:",
    "opciones": [
      "40 / 5 = 8",
      "40 / 4 = 10",
      "6"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Con los mismos datos (2, 4, 6, 8, 10), la cuasivarianza muestral es:",
    "opciones": [
      "40 / 4 = 10",
      "8",
      "12,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La raíz cuadrada de la cuasivarianza recibe el nombre de:",
    "opciones": [
      "Cuasidesviación típica",
      "Desviación media",
      "Error asimétrico cuadrático"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un sujeto se sitúa en z = 0, su puntuación directa es exactamente:",
    "opciones": [
      "Igual a la media aritmética de su grupo",
      "Igual a cero",
      "Igual a la desviación típica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una distribución unimodal tiene Media = 30 y Moda = 36, con S_X = 3, el índice de asimetría de Pearson es:",
    "opciones": [
      "-2,0",
      "+2,0",
      "-0,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un informe psicológico se indica que el coeficiente de curtosis de las puntuaciones en estrés es Cr = +2,85, la curva es:",
    "opciones": [
      "Leptocúrtica",
      "Platicúrtica",
      "Mesocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En un diagrama de caja, si una puntuación queda comprendida entre Q3 + 1,5·AI y Q3 + 3·AI, se clasifica como:",
    "opciones": [
      "Valor atípico moderado o leve",
      "Valor atípico extremo",
      "Valor típico dentro del bigote"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si la puntuación de un sujeto en un test con Media = 80 y S_X = 8 es X = 68, su puntuación típica es:",
    "opciones": [
      "-1,5",
      "+1,5",
      "-1,2"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un estudiante sabe que su puntuación típica en Neuropsicología es z = +1,0 y en Psicopatología es z = +1,8:",
    "opciones": [
      "Ha obtenido un mejor rendimiento relativo en Psicopatología respecto a su grupo de referencia",
      "Ha obtenido mejor rendimiento en Neuropsicología",
      "Ha obtenido la misma nota exacta en ambas pruebas"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Dada una distribución con Q1 = 15 y Q3 = 35 (AI = 20), ¿cuál es el límite superior para no ser considerado caso atípico?",
    "opciones": [
      "65",
      "55",
      "45"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Con los mismos datos (Q1 = 15, Q3 = 35, AI = 20), ¿cuál es el límite inferior para valores atípicos?",
    "opciones": [
      "-15",
      "-5",
      "0"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en una variable la suma de cuadrados de las puntuaciones es Σ Xi^2 = 1.000, n = 40 y la media es 4,45, la varianza es:",
    "opciones": [
      "5,20",
      "2,28",
      "25,00"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "A partir de la varianza S_X^2 = 5,20 calculada en la pregunta anterior, la desviación típica de la variable es:",
    "opciones": [
      "2,28",
      "1,85",
      "3,14"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en la misma distribución con S_X = 2,28 la suma de desviaciones al cubo ponderada es Σ ni·(Xi - Media)^3 = 201,69 para n = 40, el índice de Fisher es:",
    "opciones": [
      "+0,43",
      "+1,25",
      "-0,43"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "¿Qué ocurre si a cada puntuación de una distribución se le multiplica por -1 (inversión de escala, Y = -X)?",
    "opciones": [
      "La desviación típica sigue siendo positiva e idéntica a la original",
      "La desviación típica se convierte en negativa",
      "La varianza se convierte en negativa"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un examen de Psicología el profesor suma 1 punto a todos los alumnos por una pregunta errónea, el rango de notas:",
    "opciones": [
      "Permanece exactamente igual",
      "Aumenta en 1 punto",
      "Aumenta en el número de alumnos de la clase"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si el rango de una variable es 20 y multiplicamos todas las observaciones por 3, el nuevo rango será:",
    "opciones": [
      "60",
      "20",
      "180"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "En un estudio sobre asimetría, si la Media es menor que la Mediana y esta es menor que la Moda, la representación gráfica mostrará:",
    "opciones": [
      "Una cola alargada hacia el lado izquierdo del eje horizontal",
      "Una curva perfectamente simétrica",
      "Una cola alargada hacia el lado derecho del eje horizontal"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "El índice de curtosis estandarizado de una distribución normal teórica es:",
    "opciones": [
      "0",
      "1",
      "-1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si un psicólogo quiere comparar la variabilidad en tiempo de reacción (medido en milisegundos) con la variabilidad en errores cometidos (frecuencia simple):",
    "opciones": [
      "Debe recurrir al coeficiente de variación por ser una medida adimensional",
      "Debe comparar las dos varianzas directamente",
      "Debe restar ambas desviaciones típicas"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La fórmula de cálculo abreviada de la varianza S_X^2 = (Σ ni·Xi^2 / n) - Media^2 se recomienda frente a la fórmula directa porque:",
    "opciones": [
      "Reduce sensiblemente el número de operaciones intermedias y errores por redondeo",
      "Produce un valor numérico diferente y más exacto",
      "Permite prescindir de los puntos medios de los intervalos"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en una distribución con n = 50 sujetos la varianza es 9,8, la suma total de desviaciones al cuadrado Σ (Xi - Media)^2 es igual a:",
    "opciones": [
      "490",
      "98",
      "245"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si a todas las puntuaciones típicas z de un test se las multiplica por 10 y se les suma 50 (puntuaciones T), la nueva media y desviación típica serán:",
    "opciones": [
      "Media = 50 y Desviación típica = 10",
      "Media = 10 y Desviación típica = 50",
      "Media = 0 y Desviación típica = 1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si una puntuación directa X coincide con el percentil 50 de una distribución simétrica:",
    "opciones": [
      "Su puntuación típica z correspondiente es igual a 0",
      "Su puntuación típica z es igual a +1",
      "Su puntuación típica z es igual a -1"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "Si en un diagrama de caja el valor mínimo de la muestra es mayor que el límite inferior calculado (LI = Q1 - 1,5·AI):",
    "opciones": [
      "El bigote inferior se dibuja hasta el valor mínimo observado y no hay atípicos por debajo",
      "Se considera que toda la muestra es atípica inferior",
      "El límite inferior se desplaza a cero obligatoriamente"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3 - repaso",
    "pregunta": "La relación fundamental entre la varianza (S_X^2) y la desviación típica (S_X) es que:",
    "opciones": [
      "S_X es siempre la raíz cuadrada positiva de S_X^2",
      "S_X^2 es siempre la raíz cuadrada de S_X",
      "S_X se divide siempre entre el tamaño muestral n"
    ],
    "correcta": 0
  }
    ,{
    "tema": "Unidad 3",
    "pregunta": "El concepto de variabilidad o dispersión hace referencia a:",
    "opciones": [
      "El valor central hacia el que tienden a agruparse las observaciones",
      "El grado de semejanza o diferencia entre las puntuaciones de una distribución",
      "La frecuencia acumulada de los valores situados por debajo de la mediana"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si un grupo de datos presenta una baja variabilidad, podemos deducir que la muestra es:",
    "opciones": [
      "Homogénea",
      "Heterogénea",
      "Asimétrica positiva"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Cuál de los siguientes estadísticos de variabilidad NO se basa en distancias respecto a una medida de tendencia central?",
    "opciones": [
      "La varianza",
      "La amplitud total o rango",
      "La desviación típica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La amplitud total o rango (A_T) de una distribución se define formalmente como:",
    "opciones": [
      "La diferencia entre la puntuación máxima y la mínima observada",
      "La raíz cuadrada de la diferencia de los cuadrados extremos",
      "La distancia entre el percentil 75 y el percentil 25"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Dadas las siguientes puntuaciones: 2, 5, 7, 8, 14, ¿cuál es la amplitud total?",
    "opciones": [
      "14",
      "12",
      "7"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En una distribución de datos agrupados en intervalos donde el intervalo inferior es 10-14 y el superior es 40-44 (unidad de medida = 1), la amplitud total calculada con límites exactos es:",
    "opciones": [
      "44 - 10 = 34",
      "44,5 - 9,5 = 35",
      "44,5 - 10,5 = 34"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Cuál es la principal limitación que presenta la amplitud total como medida de variabilidad?",
    "opciones": [
      "Que depende exclusivamente de los dos valores extremos e ignora el resto de observaciones",
      "Que siempre produce un valor negativo en distribuciones asimétricas",
      "Que no puede calcularse en variables cuantitativas continuas"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La amplitud intercuartil (AI) se obtiene restando:",
    "opciones": [
      "El percentil 90 menos el percentil 10",
      "El cuartil tercero menos el cuartil primero (Q3 - Q1)",
      "El valor máximo menos la mediana"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Qué porcentaje central de las observaciones queda comprendido en la amplitud intercuartil?",
    "opciones": [
      "25%",
      "50%",
      "75%"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en una muestra el cuartil 1 vale 15 y el cuartil 3 vale 27, la amplitud intercuartil es:",
    "opciones": [
      "12",
      "21",
      "42"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La amplitud intercuartil es una medida de dispersión especialmente recomendada cuando:",
    "opciones": [
      "La distribución es perfectamente normal y no hay valores atípicos",
      "La media aritmética no es representativa debido a la presencia de valores extremos o asimetría",
      "La muestra tiene un tamaño superior a mil sujetos"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La varianza muestral (S_X^2) se define como:",
    "opciones": [
      "El promedio de las desviaciones de las puntuaciones respecto a la media",
      "El promedio de los cuadrados de las desviaciones de las puntuaciones respecto a la media",
      "La raíz cuadrada de la media de las puntuaciones"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Por qué se elevan al cuadrado las desviaciones (X_i - media) en el cálculo de la varianza?",
    "opciones": [
      "Para aumentar el valor de la variabilidad de forma arbitraria",
      "Porque la suma simple de las desviaciones respecto a la media siempre es igual a cero",
      "Para que el resultado coincida con la mediana"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Cuál de las siguientes expresiones representa la fórmula abreviada o de cálculo de la varianza?",
    "opciones": [
      "S_X^2 = (Σ X_i^2 / n) - (media)^2",
      "S_X^2 = (Σ X_i / n)^2 - media",
      "S_X^2 = Σ (X_i^2 - media) / n"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Dadas las puntuaciones directas: 3, 5, 7. Sabiendo que la media es 5, ¿cuál es la varianza?",
    "opciones": [
      "2,67",
      "4,00",
      "8,00"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Para la serie de datos: 4, 4, 4, 4, 4, el valor de la varianza es:",
    "opciones": [
      "4",
      "1",
      "0"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Puede la varianza de un conjunto de datos tomar un valor negativo?",
    "opciones": [
      "Sí, cuando todas las puntuaciones originales son negativas",
      "Sí, cuando la asimetría de la distribución es negativa",
      "No, la varianza siempre es mayor o igual a cero"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La desviación típica se calcula como:",
    "opciones": [
      "El cuadrado de la varianza",
      "La raíz cuadrada con signo positivo de la varianza",
      "El cociente entre la varianza y la media"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si la varianza de una muestra es igual a 16, la desviación típica es:",
    "opciones": [
      "256",
      "8",
      "4"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si la desviación típica de una variable es 2,5, el valor de su varianza es:",
    "opciones": [
      "5,00",
      "6,25",
      "1,58"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Cuál es la principal ventaja práctica de la desviación típica frente a la varianza?",
    "opciones": [
      "Que no utiliza la media en su formulación",
      "Que viene expresada en las mismas unidades de medida que la variable original",
      "Que siempre vale 1 en cualquier distribución"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si a todas las puntuaciones de una distribución se les suma una constante k = 5:",
    "opciones": [
      "La varianza aumenta en 5 unidades",
      "La varianza se multiplica por 25",
      "La varianza permanece invariable"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si a todas las puntuaciones de una distribución con varianza S_X^2 = 9 se les resta 3 puntos, la nueva varianza será:",
    "opciones": [
      "6",
      "9",
      "0"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si todas las puntuaciones de una variable X con varianza S_X^2 = 4 se multiplican por una constante c = 3, la nueva varianza de la variable Y = 3X es:",
    "opciones": [
      "12",
      "36",
      "24"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una variable X tiene una desviación típica S_X = 5 y se define Y = 2X + 10, la desviación típica de Y será:",
    "opciones": [
      "10",
      "20",
      "25"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si multiplicamos todas las observaciones por una constante negativa c = -3, la nueva desviación típica será:",
    "opciones": [
      "La desviación típica original multiplicada por -3",
      "La desviación típica original multiplicada por 3 (el valor absoluto de la constante)",
      "Cero, porque no existen desviaciones típicas negativas"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En una muestra de 50 alumnos sabemos que Σ X_i^2 = 5400 y que la media es 10. ¿Cuál es el valor de la varianza?",
    "opciones": [
      "8",
      "108",
      "18"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en una distribución Σ X_i^2 / n = 85 y la varianza es 16, la media de la distribución vale:",
    "opciones": [
      "69",
      "8,31",
      "5,20"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La cuasivarianza muestral se diferencia de la varianza en que en el denominador divide entre:",
    "opciones": [
      "n",
      "n - 1",
      "n + 1"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Qué propiedad estadística posee la cuasivarianza respecto a la varianza poblacional?",
    "opciones": [
      "Es un estimador insesgado",
      "Siempre es menor que la varianza muestral",
      "Es una medida relativa independiente de las unidades de medida"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La relación matemática entre la cuasivarianza (s^2) y la varianza muestral (S_X^2) viene dada por:",
    "opciones": [
      "s^2 = S_X^2 · [n / (n - 1)]",
      "s^2 = S_X^2 · [(n - 1) / n]",
      "s^2 = S_X^2 / n"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en una muestra de n = 10 sujetos la varianza muestral es 9, la cuasivarianza es:",
    "opciones": [
      "8,1",
      "10",
      "12"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "El coeficiente de variación (CV) se define formalmente como:",
    "opciones": [
      "(S_X / media) · 100",
      "(S_X^2 / media) · 100",
      "(media / S_X) · 100"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Cuál es la principal utilidad del coeficiente de variación?",
    "opciones": [
      "Calcular la mediana en distribuciones con intervalos abiertos",
      "Comparar la variabilidad relativa de dos grupos o variables con distintas medias o unidades de medida",
      "Determinar si la distribución es platicúrtica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En un test de memoria el Grupo 1 tiene media = 50 y S_X = 10. El Grupo 2 tiene media = 20 y S_X = 6. ¿Qué grupo presenta mayor variabilidad relativa?",
    "opciones": [
      "El Grupo 1, porque su desviación típica absoluta es mayor (10 frente a 6)",
      "El Grupo 2, porque su coeficiente de variación es del 30% frente al 20% del Grupo 1",
      "Ambos grupos presentan la misma dispersión relativa"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si dos grupos evaluados en la misma variable tienen idéntica media aritmética, para comparar su dispersión basta con:",
    "opciones": [
      "Comparar directamente sus desviaciones típicas",
      "Calcular obligatoriamente el índice de curtosis",
      "Determinar la moda de cada grupo"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si un grupo presenta media = 40 y desviación típica = 8, su coeficiente de variación es:",
    "opciones": [
      "5%",
      "20%",
      "32%"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si a todas las puntuaciones de un grupo se les multiplica por una constante positiva c = 2, el coeficiente de variación:",
    "opciones": [
      "Se duplica",
      "Se cuadruplica",
      "Permanece inalterado"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La desviación media (DM) de un conjunto de observaciones es:",
    "opciones": [
      "El promedio de las diferencias en valor absoluto de las puntuaciones respecto a la media",
      "La raíz cuadrada de la media aritmética",
      "La suma simple de las puntuaciones diferenciales"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Para las observaciones: 2, 4, 6 (media = 4), el valor de la desviación media es:",
    "opciones": [
      "0",
      "1,33",
      "2,00"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En una distribución unimodal simétrica se cumple que:",
    "opciones": [
      "Media > Mediana > Moda",
      "Media = Mediana = Moda",
      "Media < Mediana < Moda"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Una distribución presenta asimetría positiva cuando:",
    "opciones": [
      "Las frecuencias más altas se concentran en las puntuaciones bajas y la cola se alarga a la derecha",
      "Las frecuencias más altas se concentran en las puntuaciones altas y la cola se alarga a la izquierda",
      "Todos los valores presentan la misma frecuencia"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En una distribución con asimetría positiva se verifica típicamente que:",
    "opciones": [
      "Media < Moda",
      "Media = Moda",
      "Media > Moda"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en un examen sumamente difícil la inmensa mayoría de los estudiantes obtiene notas muy bajas y solo unos pocos logran sobresaliente, la distribución es:",
    "opciones": [
      "Asimétrica positiva",
      "Asimétrica negativa",
      "Mesocúrtica simétrica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si un examen es muy fácil y la mayoría de los alumnos obtiene puntuaciones muy altas, la distribución resultante presentará:",
    "opciones": [
      "Asimetría positiva",
      "Asimetría negativa",
      "Varianza negativa"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "El índice de asimetría de Pearson (A_p) se calcula mediante la fórmula:",
    "opciones": [
      "A_p = (Media - Moda) / S_X",
      "A_p = (Media - Mediana) · S_X",
      "A_p = (Moda - Media) / S_X^2"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una distribución unimodal tiene media = 25, moda = 20 y desviación típica = 5, el índice de asimetría de Pearson vale:",
    "opciones": [
      "-1,0",
      "+1,0",
      "+0,2"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si el índice de asimetría de Pearson es igual a -0,85, esto nos indica que la distribución es:",
    "opciones": [
      "Simétrica",
      "Asimétrica negativa",
      "Asimétrica positiva"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "El índice de asimetría de Fisher (A_F) se fundamenta en el promedio de las desviaciones respecto a la media elevadas:",
    "opciones": [
      "Al cuadrado",
      "Al cubo",
      "A la cuarta potencia"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si el índice de asimetría de Fisher resulta ser exactamente cero (A_F = 0), concluimos que la distribución es:",
    "opciones": [
      "Simétrica",
      "Platicúrtica",
      "Bimodal asimétrica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "El concepto de curtosis o apuntamiento evalúa:",
    "opciones": [
      "El desplazamiento horizontal de la distribución respecto al eje vertical",
      "La mayor o menor concentración de frecuencias en torno a la media en comparación con la distribución normal",
      "La amplitud total entre los valores mínimo y máximo"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Una distribución más apuntada o con mayor concentración de frecuencias en el centro que la curva normal se denomina:",
    "opciones": [
      "Mesocúrtica",
      "Platicúrtica",
      "Leptocúrtica"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Una distribución con forma aplanada y baja concentración central respecto a la curva normal es:",
    "opciones": [
      "Platicúrtica",
      "Leptocúrtica",
      "Mesocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si el coeficiente de curtosis estandarizado Cr = 0, la distribución es:",
    "opciones": [
      "Leptocúrtica",
      "Mesocúrtica",
      "Platicúrtica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Un valor de curtosis Cr = -1,45 indica una distribución:",
    "opciones": [
      "Leptocúrtica",
      "Platicúrtica",
      "Simétrica perfecta"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Un valor de curtosis Cr = +2,30 indica que la distribución es:",
    "opciones": [
      "Leptocúrtica",
      "Platicúrtica",
      "Mesocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En la fórmula de cálculo de la curtosis de la UNED, las desviaciones respecto a la media se elevan a:",
    "opciones": [
      "La segunda potencia",
      "La tercera potencia",
      "La cuarta potencia"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Por qué en la fórmula del coeficiente de curtosis se resta 3?",
    "opciones": [
      "Porque el momento central estandarizado de orden cuatro de la distribución normal es igual a 3",
      "Porque hay tres cuartiles en la distribución de frecuencias",
      "Porque corrige el sesgo en muestras de tamaño n < 30"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "El diagrama de caja y bigotes (boxplot) es especialmente útil para:",
    "opciones": [
      "Estudiar la forma, dispersión y detectar posibles valores atípicos en variables cuantitativas",
      "Representar variables cualitativas nominales dicotómicas",
      "Calcular directamente la moda sin ordenar los datos"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Qué valores delimitan los bordes inferior y superior de la caja central en un diagrama de caja?",
    "opciones": [
      "El valor mínimo y el valor máximo",
      "El primer cuartil (Q1) y el tercer cuartil (Q3)",
      "La media menos una desviación típica y la media más una desviación típica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Qué estadístico de tendencia central viene representado por la línea trazada en el interior de la caja?",
    "opciones": [
      "La media aritmética",
      "La moda",
      "La mediana (Q2)"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En un diagrama de caja, la longitud o altura de la caja equivale a:",
    "opciones": [
      "La amplitud total",
      "La amplitud intercuartil (AI)",
      "La desviación típica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La fórmula para calcular el límite superior para la detección de valores atípicos leves es:",
    "opciones": [
      "Q3 + 1,5 · AI",
      "Q3 + 3 · AI",
      "Mediana + 1,5 · S_X"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La fórmula para calcular el límite inferior para la detección de valores atípicos es:",
    "opciones": [
      "Q1 - 1,5 · AI",
      "Q1 - 3 · AI",
      "Media - 2 · S_X"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si Q1 = 10 y Q3 = 20 (AI = 10), ¿a partir de qué valor superior una puntuación se considera atípica?",
    "opciones": [
      "25",
      "35",
      "30"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si Q1 = 12 y Q3 = 18 (AI = 6), ¿por debajo de qué valor una puntuación se considerará atípica?",
    "opciones": [
      "3",
      "6",
      "9"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en un diagrama de caja el bigote superior es notablemente más largo que el inferior y la mediana está próxima a Q1, la distribución presenta:",
    "opciones": [
      "Asimetría positiva",
      "Asimetría negativa",
      "Simetría perfecta"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en un diagrama de caja el bigote inferior es mucho más largo que el superior y la mediana se sitúa próxima a Q3, la distribución tiene:",
    "opciones": [
      "Asimetría positiva",
      "Asimetría negativa",
      "Curtosis leptocúrtica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Una puntuación diferencial (x_i) se define como:",
    "opciones": [
      "x_i = X_i - Media",
      "x_i = X_i / S_X",
      "x_i = X_i - Mediana"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Cuánto vale siempre la media de las puntuaciones diferenciales de cualquier distribución?",
    "opciones": [
      "1",
      "0",
      "Depende de la desviación típica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La varianza de las puntuaciones diferenciales (x_i = X_i - Media) es:",
    "opciones": [
      "Igual a cero",
      "Igual a la varianza de las puntuaciones directas originales",
      "Igual a 1"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Una puntuación típica (z_i) se obtiene dividiendo la puntuación diferencial entre:",
    "opciones": [
      "La varianza",
      "La media",
      "La desviación típica"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Qué valores tienen siempre la media y la varianza de un conjunto de puntuaciones típicas z?",
    "opciones": [
      "Media = 0 y Varianza = 1",
      "Media = 1 y Varianza = 0",
      "Media = 50 y Varianza = 10"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si un alumno tiene una puntuación directa X = 70 en un test con media = 60 y S_X = 5, su puntuación típica z es:",
    "opciones": [
      "+1,0",
      "+2,0",
      "+0,5"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si un sujeto obtiene z = -1,5 en una prueba, significa que su puntuación directa se encuentra:",
    "opciones": [
      "1,5 desviaciones típicas por debajo de la media",
      "1,5 puntos por debajo de la media",
      "En el percentil 1,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Dadas las puntuaciones: 1, 2, 3, 4, 5. Su media es 3. ¿Cuánto vale la suma de cuadrados Σ (X_i - media)^2?",
    "opciones": [
      "10",
      "15",
      "2"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Con los datos: 1, 2, 3, 4, 5 (n = 5), la varianza muestral es:",
    "opciones": [
      "2,0",
      "2,5",
      "1,41"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Con los mismos datos (1, 2, 3, 4, 5), la desviación típica muestral es aproximadamente:",
    "opciones": [
      "2,00",
      "1,41",
      "1,58"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Con los mismos datos (1, 2, 3, 4, 5), la cuasivarianza muestral es:",
    "opciones": [
      "2,0",
      "2,5",
      "3,0"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una distribución de 100 sujetos presenta media = 30 y S_X = 6, y a cada puntuación se le multiplica por 2 y luego se le suma 5, ¿cuál es la nueva media y desviación típica?",
    "opciones": [
      "Media = 65 y S_Y = 12",
      "Media = 65 y S_Y = 17",
      "Media = 60 y S_Y = 12"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si la varianza de una muestra es S_X^2 = 25, la varianza de la variable transformada Y = -2X + 8 es:",
    "opciones": [
      "-50",
      "100",
      "58"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Qué ocurre con la desviación típica si a todas las puntuaciones se les multiplica por -4?",
    "opciones": [
      "Se multiplica por -4",
      "Se multiplica por 4",
      "Se multiplica por 16"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en una distribución de frecuencias en intervalos el intervalo 20-29 tiene frecuencia 0, la varianza:",
    "opciones": [
      "No se puede calcular",
      "Se calcula normalmente teniendo en cuenta únicamente las frecuencias observadas",
      "Es obligatoriamente igual a cero"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Dada la distribución de frecuencias relativas: p_1 = 0,5 para X_1 = 2; p_2 = 0,5 para X_2 = 6. La media es 4. Aplicando la fórmula de frecuencias relativas, la varianza es:",
    "opciones": [
      "4",
      "8",
      "2"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Al comparar dos distribuciones con distinta media y distintas unidades (ej. peso en kg y altura en cm), la única medida adecuada para comparar su dispersión es:",
    "opciones": [
      "La varianza",
      "La amplitud intercuartil",
      "El coeficiente de variación"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si el coeficiente de variación de un grupo A es 15% y el de un grupo B es 35%, podemos afirmar que:",
    "opciones": [
      "El grupo A es más heterogéneo que el grupo B",
      "El grupo B tiene una variabilidad relativa mayor que el grupo A",
      "La desviación típica de B es necesariamente mayor que la de A"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si la media de una variable es 0, ¿qué ocurre con el coeficiente de variación?",
    "opciones": [
      "Vale exactamente 0",
      "No está definido porque no se puede dividir por cero",
      "Es igual a la desviación típica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si todos los sujetos de una muestra obtienen la misma puntuación en un examen (ej. todos sacan un 7):",
    "opciones": [
      "La media es 7 y la varianza es 7",
      "La media es 7 y la varianza es 0",
      "No se puede calcular la varianza"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una distribución de notas presenta un índice de asimetría de Pearson de +0,60, podemos deducir que:",
    "opciones": [
      "La media es mayor que la moda",
      "La moda es mayor que la media",
      "La distribución es leptocúrtica"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una distribución tiene media = 12, moda = 15 y S_X = 3, su índice de asimetría de Pearson es:",
    "opciones": [
      "+1",
      "-1",
      "-3"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si conocemos que el percentil 25 es 20, la mediana es 30 y el percentil 75 es 40, la distribución en el tramo central es:",
    "opciones": [
      "Simétrica, porque (P75 - P50) = (P50 - P25) = 10",
      "Asimétrica positiva",
      "Asimétrica negativa"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si P25 = 10, P50 = 12 y P75 = 25, la caja del diagrama de bigotes muestra:",
    "opciones": [
      "Asimetría negativa, porque la mediana está cerca del límite superior",
      "Asimetría positiva, porque la distancia de la mediana al cuartil 3 (13) es mucho mayor que al cuartil 1 (2)",
      "Simetría perfecta"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "En un diagrama de caja, si un valor se sitúa a una distancia superior a 3 veces la amplitud intercuartil por encima de Q3, se clasifica como:",
    "opciones": [
      "Valor típico normal",
      "Valor atípico moderado o leve",
      "Valor atípico extremo"
    ],
    "correcta": 2
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La varianza calculada en una muestra de n sujetos tiende sistemáticamente a:",
    "opciones": [
      "Infraestimar la varianza poblacional (es un estimador sesgado)",
      "Sobreestimar la varianza poblacional",
      "Ser idéntica a la varianza de la población en cualquier caso"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Al pasar de varianza muestral a cuasivarianza multiplicando por n/(n-1), el valor resultante es siempre:",
    "opciones": [
      "Ligeramente menor que la varianza",
      "Ligeramente mayor que la varianza",
      "Exactamente el doble"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si el número de observaciones n tiende a infinito (n muy grande), el cociente n/(n-1):",
    "opciones": [
      "Tiende a 0",
      "Tiende a 1, haciendo que varianza y cuasivarianza sean prácticamente idénticas",
      "Tiende a infinito"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "¿Cuál de las siguientes afirmaciones sobre la varianza es FALSA?",
    "opciones": [
      "Se mide en las mismas unidades que la variable original",
      "Siempre toma valores mayores o iguales a cero",
      "Se ve afectada por transformaciones multiplicativas"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si la media de un test es 50 y la varianza es 25, ¿cuál es el coeficiente de variación?",
    "opciones": [
      "50%",
      "10%",
      "2%"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una distribución tiene Q1 = 18 y Q3 = 30, la amplitud intercuartil es:",
    "opciones": [
      "12",
      "24",
      "48"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Con Q1 = 18 y Q3 = 30 (AI = 12), ¿cuál es el límite superior para valores atípicos?",
    "opciones": [
      "42",
      "48",
      "36"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Con Q1 = 18 y Q3 = 30 (AI = 12), ¿cuál es el límite inferior para valores atípicos?",
    "opciones": [
      "0",
      "6",
      "-6"
    ],
    "correcta": 0
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una puntuación en el conjunto de datos anterior es 50, en el diagrama de caja se considerará:",
    "opciones": [
      "Una puntuación dentro del bigote normal",
      "Un valor atípico, por superar el límite superior de 48",
      "El nuevo cuartil 3"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si en una distribución el índice de curtosis es Cr = +0,02, se concluye que:",
    "opciones": [
      "Es marcadamente leptocúrtica",
      "Su apuntamiento es prácticamente idéntico al de la distribución normal (mesocúrtica)",
      "Es una distribución bimodal platicúrtica"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "Si una distribución simétrica tiene varianza S_X^2 = 9 y media = 20, el porcentaje de puntuaciones comprendidas entre 17 y 23 en una distribución normal es aproximadamente:",
    "opciones": [
      "50%",
      "68%",
      "95%"
    ],
    "correcta": 1
  },
  {
    "tema": "Unidad 3",
    "pregunta": "La suma Σ (X_i - media) para cualquier muestra de tamaño n es:",
    "opciones": [
      "Siempre igual a 0",
      "Igual a n · Media",
      "Igual a la varianza dividida entre n"
    ],
    "correcta": 0
  }
    ,
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