const $ = require('jQuery')
const ajax = require('./ajaxCalls')

class WORDHelper{
  static appendBreakDownText(newText){
    let num = Object.keys(newText).length
    let textKeys = Object.keys(newText)
    for(let i = 0; i < num; i++){
      postWord()
      $('.word-count').append(`<p style='font-size:${newText[textKeys[i]]}em'>${textKeys[i]}</p>`)
    }
  }
  static breakDownText(newText){
    let wordCount = {}
    let stringArray = newText.split(" ")
    stringArray.forEach(function(word){
      if(!wordCount[word]){
        wordCount[word] = 1
      }else if(wordCount[word]){
        wordCount[word] += 1
      }
      wordCount
    });
    this.appendBreakDownText(wordCount)
  }
}

function postWord(word, count){
  ajax.postWords({'word' { word: count }})
}
module.exports = WORDHelper
