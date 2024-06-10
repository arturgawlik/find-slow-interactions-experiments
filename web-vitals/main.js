import {
  onCLS,
  onINP,
  onLCP,
} from "https://unpkg.com/web-vitals@4/dist/web-vitals.attribution.js?module";

onCLS(console.log);
onINP(console.log);
onLCP(console.log);

const btnElement = document.getElementById("btn");
const rootElement = document.getElementById("root");

btnElement.addEventListener("click", () => {
  rootElement.innerHTML += `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    `;
});
