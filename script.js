window.addEventListener("load", sidenVises);

const uden1 = document.querySelector("#uden1");
const uden2 = document.querySelector("#uden2");
const med1 = document.querySelector("#med1");
const med2 = document.querySelector("#med2");

function sidenVises() {
  console.log("sidenVises");

  uden1.addEventListener("click", clickudenalko);
  uden2.addEventListener("click", clickudenalko);
  med1.addEventListener("click", clickudenalko);
  med2.addEventListener("click", clickudenalko);
}

function clickudenalko() {
  if (this.id == "uden1" || this.id == "uden2") {
    console.log("uden alkohol");
  } else {
    console.log("med alkohol");
  }
}
