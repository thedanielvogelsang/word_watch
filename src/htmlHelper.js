const $ = require('jQuery')

class HTMLHelper{
  static appendBreakDownText(newText){
    $('.word-count').append(`<p>${newText}</p>`)
  }
  static breakDownText(newText){
    let wordCount = {}
    let stringArray = newText.split(" ")
    let num = stringArray.length
    let i;
    stringArray.forEach(function(word){
      if(!wordCount[word]){
        wordCount[word] = 1
      }else if(wordCount[word]){
        wordCount[word] += 1
      }
      wordCount
    });
    appendBreakDownText(wordCount)
  }
}

module.exports = HTMLHelper
