function patternGenerator(x){
    let string = "";
    for(let i = 0 ; i < x ; i++){
        for(let j = 0 ; j < x-i ; j++){
            string += "*";
        }
        string += "\n";
    }
    return string;
}

console.log(patternGenerator(5));