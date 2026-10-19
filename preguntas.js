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
    }
];