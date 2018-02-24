const inputForm = document.getElementById("inputForm");

inputForm.addEventListener("submit", processQuery);

function processQuery(event){
  event.preventDefault();

  console.log(event);

  const input = document.getElementById("inputBox").value;

  console.log(input);

  postData("http://localhost:8080/process-query", {input})
    .then(function (data){
      console.log(data);
    })
    .catch(error => console.error(error));


}

function postData(url, data) {
  console.log("inside postData", url, data);
  // makes sure that data is in JSON format
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *same-origin
    redirect: 'follow', // *manual, error
    referrer: 'no-referrer', // *client
  })
  .then( function(response){
    console.log(response);}
    //response => response.json()
); // parses response to JSON
}
