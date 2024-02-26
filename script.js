document.addEventListener("DOMContentLoaded", function (event) {
  const bubbles = document.querySelector(".bubbles");
  let html = "";
  for (let i = 0; i < 50; i++) {
    html += `<span style="--i:${
      i + (Math.floor(Math.random() * 100) + 1)
    }" ></span>`;
  }
  bubbles.innerHTML = html;
});
