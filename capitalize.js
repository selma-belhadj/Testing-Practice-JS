function capitalize(string){
    if (typeof string !== 'string') {
        throw new Error('enter a string please');
      } else return string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;

