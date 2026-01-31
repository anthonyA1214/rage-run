const container = document.getElementById("stripes");

for (let i = 0; i < 30; i++) {
  const div = document.createElement("div");
  div.className = `flex-fill stripe ${i % 2 === 0 ? "bg-dark" : "bg-warning"}`;
  container.appendChild(div);
}
