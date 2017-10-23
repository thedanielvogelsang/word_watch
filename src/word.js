class Word{
  constructor(wordJson){
    this.name = Object.keys(wordJson)[0]
    this.count = Object.values(wordJson)[0]
  };
}

module.exports = Word
