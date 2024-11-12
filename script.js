

let i;
function slide() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let message;
  
  if(name != "" && password != "") {
    document.getElementById("btn").style.position = 'block'
    message = "Dhanywad";

  } else {
    if (i < 0) {
      i = (Math.floor(Math.random() * (45 - 1 + 1)) + 1)
      document.getElementById("btn").style.left = `${i}vw`;
      if (name != "") {
        message = "password kon taknar";
      } else {
        message = "Nit bara";
      }
    } else {
      i = -(Math.floor(Math.random() * (45 - 1 + 1)) + 1)
      document.getElementById("btn").style.left = `${i}vw`;
      if (name != "") {
        message = "password kon taknar";
      } else {
        message = "Nit bara";
      }
    }
  }
  document.getElementById("btn").innerText=message;
}


