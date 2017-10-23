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
      console.log(word)
    })
  }
}

module.exports = HTMLHelper
