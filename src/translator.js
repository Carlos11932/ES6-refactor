"use strict";

const Translate = require('@google-cloud/translate');
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

let TranslateService = {};

TranslateService.translateText = (content, targetLang, next) => {
    translate.translate( content, targetLang, (err, results) =>{
      if(err){
        console.error('ERROR', err);
      }
      else{
        next(results);
      }
    })
};

module.exports = TranslateService;
