// ========================================================================
// BASE DE DATOS DE PREGUNTAS: INTRODUCCIÓN AL ANÁLISIS DE DATOS (UNED)
// TEMA 1: CONCEPTOS BÁSICOS Y ORGANIZACIÓN DE DATOS (50 PREGUNTAS)
// ========================================================================

const BBDD_PREGUNTAS = [
    // --- BLOQUE 1: EJERCICIOS RESUELTOS (1.1 a 1.25) ---
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
    "pregunta": "1.100. En el intervalo informado 381 - 400 (con datos enteros, U = 1)[cite: 15], el valor del punto medio o marca de clase (PM) es[cite: 15]:",
    "opciones": [
      "390,0",
      "390,5",
      "391,0"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.101. En un experimento de laboratorio con animales, el tiempo que tarda una rata en alcanzar la salida de un laberinto actúa como[cite: 11]:",
    "opciones": [
      "variable independiente",
      "variable dependiente",
      "variable de control"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.102. Si en una investigación clínica se comparan cuatro tipos distintos de fármacos antidepresivos administrados a los grupos[cite: 11], la variable 'tipo de fármaco' es[cite: 11]:",
    "opciones": [
      "cualitativa politómica",
      "cuasicuantitativa ordinal",
      "cuantitativa discreta"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.103. En una investigación se recogen datos de una muestra sobre la variable 'lugar de nacimiento', registrando más de diez provincias españolas distintas[cite: 6]. Esta variable se clasifica como[cite: 6]:",
    "opciones": [
      "cualitativa dicotómica",
      "cualitativa politómica",
      "cuantitativa discreta"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.104. Al registrar en una muestra la variable 'número de personas detenidas por delitos fiscales' en distintos municipios[cite: 6], su escala de medida es[cite: 6]:",
    "opciones": [
      "nominal",
      "de intervalo",
      "de razón"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.105. Si en un cuestionario una pregunta sobre presencia de acoso laboral solo admite las respuestas 'Sí' y 'No'[cite: 6], la variable resultante es[cite: 6]:",
    "opciones": [
      "politómica",
      "dicotómica",
      "de razón"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.106. Para comparar de manera gráfica y precisa dos grupos que tienen tamaños muestrales diferentes (por ejemplo, n1 = 60 y n2 = 180) en una misma variable[cite: 16], en el eje de ordenadas es preceptivo utilizar[cite: 16]:",
    "opciones": [
      "frecuencias absolutas simples",
      "frecuencias relativas (o porcentajes)",
      "frecuencias absolutas acumuladas"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.107. Al representar simultáneamente la distribución de dos variables cualitativas (por ejemplo, nivel de estudios y género) para comparar ambos grupos[cite: 4, 13], el gráfico adecuado es[cite: 4, 13]:",
    "opciones": [
      "un diagrama de dispersión",
      "un diagrama de barras conjunto (adosadas o agrupadas)",
      "un histograma contiguo"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.108. Si un estudio sobre rendimiento académico extrae una muestra aleatoria y representativa de estudiantes de Secundaria de una sola Comunidad Autónoma[cite: 4, 13], sus conclusiones científicas[cite: 4, 13]:",
    "opciones": [
      "pueden generalizarse a la población de Secundaria de dicha Comunidad Autónoma",
      "pueden generalizarse a toda la población escolar europea",
      "no admiten ningún tipo de generalización estadística"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.109. ¿Cuál de las siguientes escalas de medida carece totalmente de un valor cero que represente ausencia total de la propiedad medida[cite: 1, 2, 4]?",
    "opciones": [
      "la escala de razón",
      "la escala de intervalo",
      "la escala de frecuencias"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.110. En una escala de medida de razón, si un sujeto registra un valor de 0 en la variable 'número de ausencias al puesto de trabajo', dicho cero indica[cite: 2, 3]:",
    "opciones": [
      "un origen arbitrario fijado por convenio",
      "ausencia total o empírica de la propiedad evaluada",
      "que la variable debe reclasificarse como nominal"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.111. Si una distribución de frecuencias presenta su intervalo superior definido formalmente como '60 años o más', nos encontramos ante[cite: 2, 11]:",
    "opciones": [
      "un intervalo ficticio",
      "un intervalo abierto",
      "un error de tabulación"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.112. En un diagrama circular o de sectores, la amplitud en grados sexagesimales de un sector correspondiente a una categoría que agrupa al 25% de la muestra es igual a[cite: 2]:",
    "opciones": [
      "25 grados",
      "90 grados",
      "180 grados"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.113. Si una categoría de una variable nominal reúne al 40% de los sujetos analizados en una muestra, ¿cuántos grados sexagesimales abarcará en un diagrama de sectores[cite: 2]?",
    "opciones": [
      "40 grados",
      "120 grados",
      "144 grados"
    ],
    "correcta": 2
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.114. La suma de todas las frecuencias absolutas simples (Σ ni) de una distribución de frecuencias coincide exactamente con[cite: 1, 2]:",
    "opciones": [
      "el número total de intervalos",
      "el tamaño total de la muestra (n)",
      "la última frecuencia relativa de la serie"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.115. Si en una muestra de n = 200 observaciones un intervalo tiene una frecuencia relativa pi = 0,18, el número absoluto de observaciones (ni) en ese intervalo es[cite: 2]:",
    "opciones": [
      "18",
      "36",
      "54"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.116. En una distribución ordenada con N = 80 sujetos, la frecuencia acumulada del tercer intervalo es na3 = 48. ¿Qué porcentaje de la muestra presenta puntuaciones iguales o inferiores al límite exacto superior de dicho intervalo[cite: 2]?",
    "opciones": [
      "48%",
      "60%",
      "75%"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.117. Para una variable cualitativa medida en escala nominal (por ejemplo, 'Grupo sanguíneo': A, B, AB, 0), el índice descriptivo de tendencia central adecuado es[cite: 1, 6]:",
    "opciones": [
      "la media aritmética",
      "la moda",
      "la mediana"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.118. Para una variable cuantitativa continua agrupada en intervalos regulares de amplitud constante, el gráfico donde las áreas de los rectángulos son proporcionales a las frecuencias es[cite: 1, 2]:",
    "opciones": [
      "el histograma",
      "el ciclograma",
      "el diagrama de dispersión"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.119. La disciplina estadística que se encarga de recoger, clasificar, resumir y representar visualmente las puntuaciones de un grupo observado se define como[cite: 2, 3]:",
    "opciones": [
      "Estadística Descriptiva",
      "Estadística Inferencial",
      "Contraste de Hipótesis"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.120. La Estadística Inferencial se fundamenta obligatoriamente en[cite: 2, 3]:",
    "opciones": [
      "el cálculo de probabilidades para extrapolar resultados muestrales a la población",
      "la tabulación no numérica de variables cualitativas exclusivamente",
      "la certeza matemática libre de todo margen de error"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.121. La media calculada a partir de las puntuaciones de todos los individuos que componen una población completa es[cite: 2, 3]:",
    "opciones": [
      "un estadístico muestral",
      "un parámetro poblacional",
      "un porcentaje acumulado"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.122. En una investigación se desea conocer el peso corporal (en kilogramos) de los neonatos ingresados en un hospital. La variable 'peso' es[cite: 2, 3]:",
    "opciones": [
      "cuantitativa continua",
      "cuantitativa discreta",
      "cualitativa ordinal"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.123. Una variable como el 'número de cigarrillos consumidos al día por una persona fumadora' se clasifica formalmente como[cite: 2, 3]:",
    "opciones": [
      "cuantitativa discreta",
      "cuantitativa continua",
      "cuasicuantitativa"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.124. Si en una escala de medida los sujetos solo pueden ordenarse como 'primero', 'segundo' o 'tercero', pero desconocemos la distancia real entre ellos, la escala es[cite: 2, 3]:",
    "opciones": [
      "nominal",
      "ordinal",
      "de razón"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.125. Si los límites aparentes de un intervalo son 20 - 24 y la unidad de medida es el número entero (U = 1), la amplitud del intervalo (I) es[cite: 2, 3]:",
    "opciones": [
      "4",
      "5",
      "6"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.126. Para el intervalo aparente 20 - 24 (con datos enteros, U = 1), el límite inferior exacto (LIE) y el límite superior exacto (LSE) son[cite: 2, 3]:",
    "opciones": [
      "19,5 y 24,5",
      "20,0 y 24,0",
      "19,0 y 25,0"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.127. Para una serie de intervalos consecutivos donde I = 5 y el primer intervalo tiene límites exactos 4,5 - 9,5, los límites exactos del siguiente intervalo son[cite: 2, 3]:",
    "opciones": [
      "9,5 a 14,5",
      "10,0 a 15,0",
      "10,5 a 15,5"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.128. En una distribución donde la media es arrastrada hacia valores bajos por la existencia de puntuaciones extremas inferiores, cumpliéndose Media < Mediana ≤ Moda, se observa[cite: 2, 3]:",
    "opciones": [
      "asimetría negativa",
      "asimetría positiva",
      "simetría perfecta"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.129. Cuando la cola de la curva de frecuencias se prolonga hacia las puntuaciones altas de la derecha y la Media es mayor que la Mediana, la distribución presenta[cite: 2, 3]:",
    "opciones": [
      "asimetría positiva",
      "asimetría negativa",
      "curva mesocúrtica simétrica"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.130. Si en una investigación sobre memoria operativa se administra una prueba psicométrica estandarizada, la puntuación obtenida en el test se sitúa convencionalmente en escala[cite: 2, 3]:",
    "opciones": [
      "de intervalo",
      "de razón",
      "nominal"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.131. El proceso sistemático que consiste en asignar símbolos o números a características de personas o entidades siguiendo pautas normativas precisas se denomina[cite: 2, 3]:",
    "opciones": [
      "medición",
      "estimación",
      "inferencia"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.132. Si una propiedad de los sujetos bajo estudio permanece fija y no adopta modalidades distintas a lo largo de toda la investigación, constituye[cite: 2, 3]:",
    "opciones": [
      "una constante",
      "una variable ordinal",
      "un estimador insesgado"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.133. La proporción relativa (pi) asociada a una modalidad de una variable siempre satisface la condición matemática[cite: 2, 3]:",
    "opciones": [
      "estar comprendida obligatoriamente en el rango entre 0 y 1",
      "ser un número entero estrictamente mayor que 1",
      "ser igual a la suma acumulada de los porcentajes"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.134. En una tabla de distribución de frecuencias para variables agrupadas, la marca de clase o punto medio (PM) se calcula mediante[cite: 2, 3]:",
    "opciones": [
      "(LIE + LSE) / 2",
      "(LSE - LIE) * 2",
      "LSE - LIE"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.135. En una variable con datos dados al centésimo (U = 0,01), para el valor observado X = 5,42 sus límites exactos son[cite: 2, 15]:",
    "opciones": [
      "5,415 a 5,425",
      "5,410 a 5,430",
      "5,400 a 5,450"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.136. Si un intervalo aparente está delimitado como 40 - 49 (U = 1), el número total de unidades enteras que contiene dicho intervalo es[cite: 2, 3]:",
    "opciones": [
      "9",
      "10",
      "11"
    ],
    "correcta": 1
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.137. ¿Cuál de los siguientes gráficos resulta totalmente inadecuado para representar datos de una variable cualitativa nominal sin orden[cite: 2, 3]?",
    "opciones": [
      "un histograma con barras continuas adosadas en límites reales",
      "un diagrama de barras separadas",
      "un diagrama de sectores (ciclograma)"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.138. En una distribución unimodal simétrica en forma de campana, las medidas de tendencia central presentan la siguiente relación teórica[cite: 2, 3]:",
    "opciones": [
      "Media ≈ Mediana ≈ Moda",
      "Media < Mediana < Moda",
      "Moda < Mediana < Media"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.139. Si en una investigación sobre eficacia terapéutica se mide el número de sesiones a las que asiste cada paciente hasta obtener el alta médica, dicha variable es[cite: 2, 3]:",
    "opciones": [
      "cuantitativa discreta en escala de razón",
      "cuantitativa continua en escala de intervalo",
      "cualitativa politómica en escala ordinal"
    ],
    "correcta": 0
  },
  {
    "tema": "Tema 1 Ampliación",
    "pregunta": "1.140. Cuando se asignan códigos numéricos 1 = Primaria, 2 = Secundaria y 3 = Universidad para indicar el nivel formativo de los participantes[cite: 4, 13], los números reflejan[cite: 4, 13]:",
    "opciones": [
      "únicamente una relación de jerarquía u orden entre categorías",
      "igualdad estricta de distancias cuantitativas entre niveles",
      "una proporción matemática donde el valor 2 representa el doble del 1"
    ],
    "correcta": 0
  }


];