const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // console.log(e.target);
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    //   body.style.color = "purple";
    // } else if (e.target.id === "black") {
    //   body.style.backgroundColor = e.target.id;
    //   body.style.color = "white";
    // } else if (e.target.id === "orange") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "purple") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "red") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "brown") {
    //   body.style.backgroundColor = e.target.id;
    //   body.style.color = "black";
    // }

    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "brown":
        body.style.backgroundColor = e.target.id;
        break;
      case "red":
        body.style.backgroundColor = e.target.id;
        break;
      case "orange":
        body.style.backgroundColor = e.target.id;
        break;
      case "black":
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
});
