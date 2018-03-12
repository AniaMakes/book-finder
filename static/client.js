const inputForm = document.getElementById("inputForm");

inputForm.addEventListener("submit", processQuery);

function processQuery(event){
  event.preventDefault();
  console.log("i'm in processQuery");

  console.log(event);

  const input = document.getElementById("inputBox").value;

  console.log(input);

  postData("http://localhost:8080/process-query", {input})
    .then(function (data){

      const resultsDiv = document.getElementById("results");

      while(resultsDiv.firstChild){
        resultsDiv.removeChild(resultsDiv.firstChild);
      }

      const title = data.title;
      const author = data.author;
      const coverImage = data.coverImage;

      let imageInput = "";

      if (coverImage == undefined){
        imageInput = "No cover image found";
      } else {
        imageInput = `Here's a cover image: <img src='${coverImage}' alt="cover image">`
      }

      const bookContainer = document.createElement("p");

      bookContainer.innerHTML = `Our book recommdation for you is "${title}" by ${author}. ${imageInput}`;

      resultsDiv.appendChild(bookContainer);

      console.log('hi', data);
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
    return response.json();
  });
}
