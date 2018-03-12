function removeAtHandle(text){
  let textArr = text.split(" ");

  textArr.forEach(function(word, index){
    if (word.charAt(0) == "@"){
      textArr[index] = "";
    }
  });

  let preRegExStr = textArr.join(" ");
  let postRegExStr = preRegExStr.replace(/[`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/]/g, "");
  let removeDoubleSpaces = postRegExStr.replace(/\s{2,}/g, " ");

  let trimmed = removeDoubleSpaces.trim();

  return trimmed;
}

module.exports = removeAtHandle;
