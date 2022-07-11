// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

var addTime = document.getElementById('add');



function getN() {
  var getName = document.getElementById('name_input').value;
  console.log(getName);
}
addTime.addEventListener('click', getN);

function getPassword() {
  var getPassword = document.getElementById('age_input').value;
  console.log(getPassword);
}
addTime.addEventListener('click', getPassword);

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}