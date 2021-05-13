var encryptThis = function (text) {
  // Implement me! :)
  let encryptedArr = [];
  let tempText = "";
  text = text.split(" ");
  for (word of text) {
    word = word.split("");
    tempText = word[1];
    word[1] = word[word.length - 1];
    word[word.length - 1] = tempText;
    word = word.join("");

    tempText = [word.charCodeAt(0) + word.slice(1)] + "";
    encryptedArr.push(tempText);
  }

return encryptedArr.join(' ')
};
encryptThis("A");
encryptThis("A wise old owl lived in an oak");
// encryptThis("The more he saw the less he spoke");
// encryptThis("The less he spoke the more he heard");
// encryptThis("Why can we not all be like that wise old bird");
// encryptThis("Thank you Piotr for all your help");

// encryptionWord = [word.charCodeAt(0) + word.slice(1)] + "";
