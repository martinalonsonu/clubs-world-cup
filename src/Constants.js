const twitterAccount = "deportuit_peru";    
const brand = 'Depor';
const urlBrand = "https://depor.com/";
const urlPortadaMarca = "https://especiales.depor.com/especiales/index.html";
const domainMarca = "https://especiales.depor.com/";
const domainAssets = 'https://d1ts5g4ys243sh.cloudfront.net/proyectos_especiales_general/depor/prod/';
const slugCommonAssets2 = 'elementos-comunes/';
const headers = {
    "Content-Type": "application/json"
};  

//Variables
const titleEspecial = 'Champions League 2022-23: calculadora, fixture, partidos, programación, calendario y más sobre la UEFA Liga de Campeones';
const socialShareText = `Champions League 2022-23: calculadora, fixture, partidos, programación, calendario y más sobre la UEFA Liga de Campeones | ${brand}`;
const slugEspecial = "champions-league-calendario-partidos-fixture-horarios-canales-fecha-programacion-uefa-liga-de-campeones-multimedia-nndd";
const urlEspecial = `${domainMarca}${slugEspecial}/index.html`;
const urlAssets = `${domainAssets}${slugEspecial}`;
const urlCommonAssets = `${domainAssets}${slugCommonAssets2}`;
const slugQualyfiedTeams = 'mundial-qatar-2022-copa-mundo-futbol-clasificacion-paises-clasificados-selecciones-grupos-cruces-fixture-multimedia-nndd';
const urlFlags = `${domainAssets}${slugQualyfiedTeams}/img/selecciones-portada-2/`;
const urlMagAssets = 'https://multimedia.mag.elcomercio.pe/calculadora-champions-league-2022-23';
const queryStrStart = '?';
const googleSheetKey = '1oXmWw8aMwv44V1wgAp_ab2xSQOvM45Y5FEyAHRZxOfU';
const query = 'SELECT A, B, C, D, E, F, G, H, I, J';
const responseStatusOk = 200;
const hiddenTitle = 'CALCULADORA CHAMPIONS LEAGUE 2022 2023';
const titleHome = 'Conoce todas las fechas, horarios (hora peruana),\ntabla de posiciones y pronostica qué equipos pasarán a octavos.';
const epigraph = 'Conoce todas las fechas, horarios (hora peruana), tabla de posiciones y pronostica qué equipos pasarán a octavos';
const urlPrivacyPolicy = 'politicas-privacidad';
const idEntityApi = 'DEPORPronosticoCampeonQatar2022';
const slugPrediction = 'mi-pronostico';
const idPredictionParam = 'idPronostico';
const isPlayed = 'SÍ';
const notPlayed = '-';
const flagTeams = ['australia', 'costa-rica', 'gales'];
const knockOutStageTitle = 'ESTOS SON LOS 16 CLASIFICADOS';
const knockOutStageText = 'El sorteo de octavos será el día 7 de noviembre, esta instancia empezará el 14 de febrero de 2023. Las etapas de cuartos (11/12 y 18/19 de abril) y semifinales (9/10 y 16/17 de mayo), que no tendrán restricciones de ningún tipo en el emparejamiento, se conocerán en otro sorteo programado para el 17 de marzo. En la ceremonia también se determinará el orden de los equipos para la final en el Atatürk Olympic Stadium de Estambul (10 de junio).';
const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

export { 
    brand,
    days,
    domainAssets, 
    domainMarca, 
    epigraph,
    flagTeams,
    googleSheetKey,
    headers,
    hiddenTitle,
    isPlayed,
    idEntityApi,
    knockOutStageText,
    knockOutStageTitle,
    months,
    notPlayed,
    titleHome,
    responseStatusOk,
    twitterAccount,     
    query,
    queryStrStart,   
    titleEspecial, 
    socialShareText, 
    slugEspecial, 
    urlAssets, 
    urlBrand, 
    urlCommonAssets,
    urlEspecial, 
    urlPortadaMarca, 
    urlPrivacyPolicy,     
    urlFlags,
    urlMagAssets,
    slugPrediction, 
    idPredictionParam
}