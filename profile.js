//Also part of "Part 4: Create Interactive Components" :

//“My Favorite Color” Event Listener:
let favoriteColor = document
  .getElementById("color")
  .addEventListener("click", function () {
    alert("My FAVORITE color is Blue!");
  });

//“My Favorite Place Event Listener:
let favoritePlace = document
  .getElementById("place")
  .addEventListener("click", function () {
    alert("My favorite place is California!");
  });

//“My Favorite Ritual" Event Listener:
let favoriteRitual = document
  .getElementById("ritual")
  .addEventListener("click", function () {
    alert("My favorite ritual are Deep Tissue Massages.");
  });
