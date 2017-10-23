const $ = require('jQuery')
const Word = require('./word')

function getMostWord(){
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/v1/top_word'
  })
  .done(function(data){
    let word = new Word(data.word);
    $('.top-word h3').append(word.name + ` (${word.count})`)
  })
  .catch(function(error){
    console.log(error)
  })
}

function postWords(word){
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/api/v1/words',
    data: word
  })
  .done(function(data){
    console.log(data)
  })
}

module.exports = {postWords, getMostWord}
