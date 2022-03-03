console.log('Client-side code running');

const onbutton = document.getElementById('onButton');
const offbutton = document.getElementById('offButton');

onbutton.addEventListener('click', function(e) {
  console.log('on button was clicked');

  const response = fetch('/on');
  console.log(response);
});

offbutton.addEventListener('click', function(e) {
  console.log('off button was clicked');

  const response = fetch('/off');
  console.log(response);
});