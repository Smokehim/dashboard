const div = document.querySelector("#div")
const shadow = div.attachShadow({mode:"open"})
const h1 = document.createElement("h1")

h1.innerText = "hello the bro"
shadow.appendChild(h1);
