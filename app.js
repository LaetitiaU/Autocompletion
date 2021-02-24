const url = "https://places-dsn.algolia.net/1/places/query";
const city = document.querySelector("#place")
const keyword = document.querySelector("#keyword")

keyword.addEventListener("keyup", (event) => {
    // console.log(keyword.value)
    event.preventDefault();
    fetch(url, {
        method: "POST",
        body: JSON.stringify({query: keyword.value})
})
.then(response => response.json())
.then((data) => {
  
        city.innerHTML = "";
        data.hits.forEach(element => {
            console.log(element.locale_names.default)
            city.insertAdjacentHTML('beforeend', `
            <li>${element.locale_names.default}</li>
            `);
            });
    
    
})
.catch((err) => {
    console.log(err);
})
})