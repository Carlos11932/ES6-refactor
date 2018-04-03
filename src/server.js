const translate = require('./translator')

let text = "quiero trabajar con los mejores"
let targetLang = 'en'

console.log(translate);

translate.translateText(text, targetLang, (result) => {
  console.log(result);
})
