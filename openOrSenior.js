function openOrSenior(data) {
    // ...
    let result=[]
    for (let i = 0; i < data.length; i++) {
        if ((data[i][0] >= 55) && (data[i][1] > 7)) {
            console.log("S")
            result[i] = 'Senior'
        } else {
            console.log("O")
            result[i] = 'Open'

        }
    }
    console.log(result)
    return result;
}
openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]);