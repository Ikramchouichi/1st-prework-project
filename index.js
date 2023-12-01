const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
document.getElementById("toggleBio").addEventListener("click", function() {
    var moreText = document.getElementById("moreBio");
    var btnText = this;

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.textContent = "Show Less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Show More";
    }
  });