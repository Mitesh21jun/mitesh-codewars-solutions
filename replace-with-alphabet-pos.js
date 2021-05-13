function alphabetPosition(text) {

    
let alphaArr = []
    for (char in text) {
        if ((text[char]).match(/\D/) && (text[char]).match(/\w/)&&(!(text[char]).match(/[_]/))) {
            if (text.charCodeAt(char) >= 97){
                alphaArr.push(text.charCodeAt(char) - 96)

            } else {
                alphaArr.push(text.charCodeAt(char) - 64)

            }
            
        }
    
    }
    if (alphaArr.length == 0) return '';

console.log(alphaArr.join(' ').toString())
return alphaArr.join(' ').toString();
}
alphabetPosition("The sunset sets at twelve o' clock.")
alphabetPosition("The narwhal bacons at midnight.")