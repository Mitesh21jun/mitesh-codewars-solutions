function towerBuilder(n) {
    newArr=[]
    var output = "";
    for (var i = 0; i < n; i++) {
        var myspace = "";
        for (let s = 0; s < (n - i - 1); s++) {
            myspace += " ";
        }
        for (var j = 1; j <= 2 * i + 1; j++) {
            output += "*";

        }
        newArr.push(myspace + output+myspace)
        output = "";

    }
    return newArr;
}
let a = Math.floor(Math.random() * 10);
console.log(a)
towerBuilder(a);