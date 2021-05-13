var encryptThis = function (text) {
  // Implement me! :)

  text = text.split(" ");
  let encryptedText = [];
    for (word of text) {
        for (char in word) {
            if (char == 0) {
              
          }
      }

}
  encryptedText = encryptedText.join(" ");
  //   console.log(encryptedText);
};
// encryptThis("A");
encryptThis("A wise old owl lived in an oak");
// encryptThis("The more he saw the less he spoke");
// encryptThis("The less he spoke the more he heard");
// encryptThis("Why can we not all be like that wise old bird");
// encryptThis("Thank you Piotr for all your help");

// encryptionWord = [word.charCodeAt(0) + word.slice(1)] + "";