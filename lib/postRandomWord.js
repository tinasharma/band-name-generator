'use strict';

module.exports = function(word, wordObject) {
  //check if the word is on the object
  if (!wordObject.hasOwnProperty(word)) {
    //if it's NOT on the object, add it and send a message that we added it
    wordObject[word] = true;
    return {message: 'Thanks! We added your fabulous word, ' + word +
      ' to our list.'};

    //this 'message is from the script.js - var adjectiveRes = response.message;'
  }

  //if it IS on the object, send a polite message saying we have it
  return {message: 'Thanks! We already have your word, ' + word +
    ' in our list.'};

  //those messages will be the return value of this function
};
