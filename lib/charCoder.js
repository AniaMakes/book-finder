function charCoder(string){
  let arrayOfChars = [...string];
  let outputStr = "";

  arrayOfChars.forEach(char => outputStr = outputStr + char.charCodeAt(0));

  return outputStr;
}



module.exports = charCoder;
