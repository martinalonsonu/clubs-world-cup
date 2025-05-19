const twitterAccount = "deportuit_peru";
const brand = "Depor";
const urlBrand = "https://depor.com/";
const urlPortadaMarca = "https://especiales.depor.com/especiales/index.html";
const domainMarca = "https://especiales.depor.com/";
const domainAssets =
  "https://d1ts5g4ys243sh.cloudfront.net/proyectos_especiales_general/depor/prod/";
const slugCommonAssets2 = "elementos-comunes/";
const headers = {
  "Content-Type": "application/json",
};

//Variables
const titleEspecial =
  "Mundial de Clubes 2025: calculadora, tabla de posiciones, resultados y pronósticos";
const socialShareText = `Mundial de Clubes 2025: calculadora, tabla de posiciones, resultados y pronósticos | ${brand}`;
const slugEspecial =
  "mundial-de-clubes-2025-calculadora-tabla-de-posiciones-resultados-pronosticos";
const urlEspecial = `${domainMarca}${slugEspecial}/index.html`;
const urlAssets = `${domainAssets}${slugEspecial}`;
const urlCommonAssets = `${domainAssets}${slugCommonAssets2}`;
const slugQualyfiedTeams =
  "mundial-de-clubes-2025-calculadora-tabla-de-posiciones-resultados-pronosticos";
const urlFlags = `${domainAssets}${slugQualyfiedTeams}/img/escudos/`;
const urlMagAssets =
  "https://multimedia.mag.elcomercio.pe/calculadora-champions-league-2022-23";
const queryStrStart = "?";
const googleSheetKey = "1P5zoVtZ6Yf1YI-oOOoOQiL5wkmTAanUuW48hFlMTKJs";
const query = "SELECT A, B, C, D, E, F, G, H, I, J";
const responseStatusOk = 200;
const hiddenTitle = "CALCULADORA CHAMPIONS LEAGUE 2022 2023";
const titleHome =
  "Conoce todas las fechas, estadios, horarios (hora peruana), tabla de posiciones y pronostica qué equipos clasificarán a octavos";
const epigraph =
  "Conoce todas las fechas, estadios, horarios (hora peruana), tabla de posiciones y pronostica qué equipos clasificarán a octavos";
const urlPrivacyPolicy = "politicas-privacidad";
const idEntityApi = "DEPORPronosticoCampeonQatar2022";
const slugPrediction = "mi-pronostico";
const idPredictionParam = "idPronostico";
const isPlayed = "Sí";
const notPlayed = "-";
const flagTeams = ["australia", "costa-rica", "gales"];
const knockOutStageTitle = "ESTOS SON LOS 16 CLASIFICADOS";
const knockOutStageText =
  "El sorteo de octavos será el día 7 de noviembre, esta instancia empezará el 14 de febrero de 2023. Las etapas de cuartos (11/12 y 18/19 de abril) y semifinales (9/10 y 16/17 de mayo), que no tendrán restricciones de ningún tipo en el emparejamiento, se conocerán en otro sorteo programado para el 17 de marzo. En la ceremonia también se determinará el orden de los equipos para la final en el Atatürk Olympic Stadium de Estambul (10 de junio).";
const days = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];
const months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const sessionStorageKey = "deporCalculadoraMundialClubes2025";

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
  idPredictionParam,
  sessionStorageKey,
};
