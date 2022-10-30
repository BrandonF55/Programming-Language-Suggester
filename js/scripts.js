
function findingPL(event) {
  event.preventDefault();

  const answer1 = document.querySelector('input[name="question-1"]:checked').value;
  const answer2 = document.querySelector('input[name="question-2"]:checked').value;
  const answer3 = document.querySelector('input[name="question-3"]:checked').value;


  const suggestion1 = document.querySelector('#suggestion1');
  const suggestion2 = document.querySelector('#suggestion2');
  const suggestion3 = document.querySelector('#suggestion3');


  suggestion1.setAttribute('class', 'hidden');
  suggestion2.setAttribute('class', 'hidden');
  suggestion3.setAttribute('class', 'hidden');


  if (answer1 === "yes" && answer2 === 'yes' && answer3 === 'yes') {
    suggestion1.removeAttribute('class', 'hidden');
  } else if (answer1 === "no" && answer2 === 'no' && answer3 === 'no') {
    suggestion2.removeAttribute('class', 'hidden'); 
    
    
  }
}

window.addEventListener('load', function () {
  const form = document.getElementById('suggestion-form');
  form.addEventListener('submit', findingPL);
});


