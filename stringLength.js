function stringLength(string){
    if (string.length > 0 && string.length < 11 ) {
    return string.length
    } else{
     return  'Conditions not met';
    }
}

module.exports = stringLength;
//console.log(stringLength(""));