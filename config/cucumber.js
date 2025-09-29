module.exports =
{
  "default": {
    "requireModule": [
      "ts-node/register" 
    ],
    "paths": ["src/test/features/*.feature"],
    "require": [
    
      "src/hooks/hooks.ts", 
      
      "src/test/steps/**/*.ts" 
    ],
    "format": [
      "@serenity-js/cucumber",
      "@serenity-js/console-reporter",
      "json:target/cucumber/cucumber.json",
      "@serenity-js/serenity-bdd"
    ],
    "publishQuiet": true
  }
}