const $ = require('jQuery')
const Word = require('./word.js')

document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function(){
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/v1/top_word'
    })
    .done(function(data){
      word = new Word(data.word)
      console.log(word)
      $('.top_word').append('<h3>')
    })
  })
})
