let form = document.getElementById("form");

form.onsubmit = function () {
  let email = document.getElementById("email").value;
  let emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let validation = emailRe.test(email);
  if (validation === false) {
    document.getElementById("error").style.display = "block";
    document.getElementById("email").style.border =
      "2px solid hsl(0, 93%, 68%)";
    return false;
  }
};
