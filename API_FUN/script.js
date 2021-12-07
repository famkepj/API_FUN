const getJoke = async () => {
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com");
  myHeaders.append("x-rapidapi-key", apiKey);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  if (id="animal"){
    var url =" https://api.chucknorris.io/jokes/random?category=animal"
  }
  if (id="career"){
    var url =" https://api.chucknorris.io/jokes/random?category=career"
  }
  if (id="celebrity"){
    var url =" https://api.chucknorris.io/jokes/random?category=celebrity"
  }
  if (id="dev"){
    var url =" https://api.chucknorris.io/jokes/random?category=dev"
  }
  if (id="explicit"){
    var url =" https://api.chucknorris.io/jokes/random?category=explicit"
  }
  if (id="fashion"){
    var url =" https://api.chucknorris.io/jokes/random?category=fashion"
  }
  if (id="food"){
    var url =" https://api.chucknorris.io/jokes/random?category=food"
  }
  if (id="history"){
    var url =" https://api.chucknorris.io/jokes/random?category=history"
  }
  if (id="money"){
    var url =" https://api.chucknorris.io/jokes/random?category=money"
  }
  if (id="movie"){
    var url =" https://api.chucknorris.io/jokes/random?category=movie"
  }
  if (id="music"){
    var url =" https://api.chucknorris.io/jokes/random?category=music"
  }
  if (id="political"){
    var url =" https://api.chucknorris.io/jokes/random?category=political"
  }
  if (id="dev"){
    var url =" https://api.chucknorris.io/jokes/random?category=dev"
  }
  if (id="religion"){
    var url =" https://api.chucknorris.io/jokes/random?category=religion"
  }
  if (id="science"){
    var url =" https://api.chucknorris.io/jokes/random?category=science"
  }
  if (id="sport"){
    var url =" https://api.chucknorris.io/jokes/random?category=sport"
  }
  if (id="travel"){
    var url =" https://api.chucknorris.io/jokes/random?category=travel"
  }
  if (id="button"){
    const url = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random"
  }


  const response = await fetch(url, requestOptions)
  const data = await response.json()
  const value = await data.value;
  return value;   
};


const addDataToDom = async (value) => {
  const text = document.getElementById("results");
  var joke = await getJoke(value);
  var textNode = document.createTextNode(joke);
  text.appendChild(textNode);
};


const remove = () => {
  let element = document.getElementById("results");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

document.getElementById("new").addEventListener("click", () => {
  remove();
  addDataToDom();
});


