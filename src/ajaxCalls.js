const $ = require('jQuery')
const Word = require('./word')
const WORD = require('./wordHelper')

function getMostWord(){
  $.ajax({
    type: 'get',
    url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word'
  })
  .done(function(data){
    let word = new Word(data.word);
    $('.top-word h3').append(word.name + ` (${word.count})`)
  })
  .catch(function(err){
    console.log(err)
  })
}

function postWords(word){
  $.ajax({
    type: 'post',
    url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
    data: word
  })
  .done(function(data){
    console.log(data)
  })
  .catch(function(err){
    console.log(err)
  })
}

module.exports = {postWords, getMostWord}
