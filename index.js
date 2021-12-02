alert("HELLO THAR!");

async function getKanyeQuote() {
  const response = await fetch("https://api.kanye.rest");
  const data = await response.json();
  console.log(data.quote);
  document.getElementById("quote").innerHTML = data.quote;
}

getKanyeQuote();
