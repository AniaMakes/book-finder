function isbnMaker(stringOfDigits){
  if (stringOfDigits.length == 10){
    return stringOfDigits;
  }
  else if (stringOfDigits.length < 10) {
    let output = stringOfDigits;

    while (output.length < 10){
      output = output + stringOfDigits;
    }

    return output.slice(0,10);
  }
  else if (stringOfDigits.length > 10){
    return stringOfDigits.slice(0,10);
  }
}


module.exports = isbnMaker;
