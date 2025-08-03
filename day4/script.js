import { genRandomQuote } from "./index.js";

document.querySelector("#get-quote").addEventListener("click", () => {
  let quote = document.querySelector("#quote");
  quote.textContent = genRandomQuote();
});
