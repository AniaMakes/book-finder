const inputForm = document.getElementById("inputForm");

inputForm.addEventListener("submit", processQuery);

function processQuery(event){
  event.preventDefault();

  console.log(event);

  const input = document.getElementById("inputBox");
}
