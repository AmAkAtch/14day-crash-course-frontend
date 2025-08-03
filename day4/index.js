import axios from "axios";

export async function genRandomQuote() {
  const response = await axios.get("https://api.quotable.io/random");
  let quote = response.data[0].q;
  console.log(quote);
  return quote;
}

genRandomQuote();
