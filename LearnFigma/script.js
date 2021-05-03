function showMenu() {
  var x = document.getElementById("menu_mobile");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}