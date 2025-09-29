module.exports =
{
  "default": {
    "requireModule": [
      "ts-node/register",
      "@serenity-js/cucumber" // ¡IMPORTANTE! Esto activa el Screenplay World
    ],
    "paths": ["src/test/features/**/*.feature"],
    "require": [
      "src/test/steps/**/*.ts",
      "src/hooks/hooks.ts"
    ],
    "format": [
      "@serenity-js/console-reporter", // Muestra el progreso en la consola
      "json:target/cucumber/cucumber.json" // JSON para el reporte BDD
    ],
    "publishQuiet": true
  }
}