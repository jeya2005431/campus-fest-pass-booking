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

  document.getElementById("output").innerHTML =
    ` Pass Booked! <br>
     Name: ${name}<br>
     Event: ${event}<br>
     Pass: ${pass.value}<br>
     Food: ${foodList.join(", ")}`;
}

function resetForm() {
  location.reload();
}
