function bookPass() {
  const name = document.getElementById("name").value.trim();
  const event = document.getElementById("event").value;
  const passType = document.querySelector('input[name="pass"]:checked');
  const foods = document.querySelectorAll(".food:checked");
  const output = document.getElementById("output");

  if (!name || !event || !passType || foods.length === 0) {
    alert("Please fill all details!");
    return;
  }

  let foodList = [];
  foods.forEach(f => foodList.push(f.value));

  output.style.display = "block";
  output.innerHTML = `
    <h3>🎟 Pass Confirmed</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Event:</b> ${event}</p>
    <p><b>Pass:</b> ${passType.value}</p>
    <p><b>Food:</b> ${foodList.join(", ")}</p>
    <p style="color:#00f2fe"><b>Status:</b> Approved ✅</p>
  `;
}

function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("event").value = "";
  document.querySelectorAll("input").forEach(i => i.checked = false);
  document.getElementById("output").style.display = "none";
}
