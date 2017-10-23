const $ = require('jQuery')
const Word = require('./word.js')
const HTMLHelper = require('./htmlHelper')

document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function(){
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/v1/top_word'
    })
    .done(function(data){
      let word = new Word(data.word);
      $('.top-word h3').append(word.name + ` (${word.count})`)
    })
  })
  let buttonName = document.getElementsByTagName('button')[0]
  let newtext = document.getElementsByTagName('textarea')[0]
  $(buttonName).on('click', function(e){
    e.preventDefault();
    newtext = newtext.value
    HTMLHelper.breakDownText(newtext)
  })
})
