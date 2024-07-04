bot.addEventListener("click", blue);
function blue() {
  let count = document.getElementById("count").value;
  let bot = document.getElementById("bot");

  let a = count;
  if (a == "Barbara") {
    document.getElementById("boot").src = "barbara.jpg";
  } else if (a == "Carina") {
    document.getElementById("boot").src = "Carina.jpg";
  } else if (a == "lionel") {
    document.getElementById("boot").src = "lionel.jpg";
  } else if (a == "Miranda") {
    document.getElementById("boot").src = "Miranda.jpg";
  } else if (a == "Nikki Bella") {
    document.getElementById("boot").src = "Nikki Bella.jpg";
  } else if (a == "Pooja") {
    document.getElementById("boot").src = "Pooja.jpg";
  } else {
    alert("Please check Your Code because your code is Wrong");
  }
}
