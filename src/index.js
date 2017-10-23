const $ = require('jQuery')
const Word = require('./word.js')

document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function(){
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/v1/top_word'
    })
    .done(function(data){
      let word = new Word(data.word);
      $('.top-word').append('<h3>' + word.name + ` (${word.count})</h3>`)
    })
  })
})
