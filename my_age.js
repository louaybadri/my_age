h1 = document.querySelector("h1")
h2 = document.querySelector("h2")

setInterval(() => {
    my_age = (new Date() - new Date(2001, 6, 29)) / (1000 * 60 * 60 * 24 * 365.25)
    h1.innerText = (my_age + "").split(".")[0] + "."
    h2.innerText = (my_age.toFixed(15) + "").split(".")[1]


}, 100)