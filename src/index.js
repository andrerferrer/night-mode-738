// 1 - select the element
  // document.querySelector(cssSelector)
const btn = document.querySelector('button');

// console log driven development
// console.log(btn);

// 2 - add event listener
// btn.addEventListener('EVENT', CALLBACK)
// btn.addEventListener('EVENT', WHAT TO DO)
btn.addEventListener('click', (event) => {
  console.log(event);
  // 3 - do the behavior (depends)
    // add a class to the body
  const body = document.body;
  // console.log(body);

  body.classList.toggle('bg-dark');

});

