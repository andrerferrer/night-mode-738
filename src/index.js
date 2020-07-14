const btn = document.querySelector("button");

btn.addEventListener('click', (event) => {
  btn.innerText = (btn.innerText === "night mode" ? 'day mode' : 'night mode');
  document.body.classList.toggle('dark');
})