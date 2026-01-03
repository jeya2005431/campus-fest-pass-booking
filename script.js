function bookPass() {
  let name = document.getElementById("name").value;
  let event = document.getElementById("event").value;
  let pass = document.querySelector('input[name="pass"]:checked');

  let foods = document.querySelectorAll(".food:checked");
  let foodList = [];
  foods.forEach(f => foodList.push(f.value));

  if (!name || !event || !pass) {
    alert("Ella details-um fill pannu da!");
    return;
  }

  document.getElementById("output").innerHTML = `
     <b>Booking Successful</b><br><br>
    Name: ${name}<br>
    Event: ${event}<br>
    Pass Type: ${pass.value}<br>
    Food: ${foodList.join(", ") || "None"}
  `;
}

function resetForm() {
  location.reload();
}
