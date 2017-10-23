const $ = require('jQuery')
const Word = require('./word.js')
const WORDHelper = require('./wordHelper')
const ajax = require('./ajaxCalls')

document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function(){
    return ajax.getMostWord()
  })
  let buttonName = document.getElementsByTagName('button')[0]
  let newtext = document.getElementsByTagName('textarea')[0]
  $(buttonName).on('click', function(e){
    e.preventDefault();
    newtext = newtext.value
    WORDHelper.breakDownText(newtext)
  })
})
