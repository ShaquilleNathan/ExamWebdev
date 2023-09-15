//  Button Like Dislike
  var btnLike = document.querySelector("#green");
  var btnDislike = document.querySelector("#red");
  
  if (btnLike) {
    btnLike.onclick = likeColor;
  }
  if (btnDislike) {
    btnDislike.onclick = dislikeColor;
  }
  
  function likeColor() {
    if (btnDislike.classList.contains("red")) {
      btnDislike.classList.remove("red");
    }
  
    this.classList.toggle("green");
  
    document.querySelector("body").style.color = "black";
    document.querySelector("body").style.backgroundColor = "white";
  }
  
  function dislikeColor() {
    if (btnLike.classList.contains("green")) {
      btnLike.classList.remove("green");
    }
  
    this.classList.toggle("red");
  
    document.querySelector("body").style.color = "white";
    document.querySelector("body").style.backgroundColor = "black";
  }
  
  // Change Jumbotron Image 
  function changeImage(element) {
    element.setAttribute(
      "src",
      "https://advance2-exam.netlify.app/assets/img-header2.png"
    );
  }
  
  function changeImageBack(element) {
    element.setAttribute(
      "src",
      "https://advance2-exam.netlify.app/assets/img-header1.png"
    );
  }