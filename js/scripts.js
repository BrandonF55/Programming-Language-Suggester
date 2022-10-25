
    
    function findingPL() {
      let form = document.getElementById('#Suggestion-form');
        form.onsubmit = function(event) {
          event.preventDefault();
        
        const name = ("#name").value();
        const age = parseInt(("#age").value());
        const answer1 = document.querySelector('#question1').value();
        const answer2 = document.querySelector('#question2').value();
        const answer3 = document.querySelector('#question3').value();
        const answer4 = document.querySelector('#question4').value();

        
        if (name === age) {
          alert('Please provide your name.');
        } else if (age > 0) {
          alert('Please provide your age.');
        } else if (answer1 === "yes") {
          document.querySelector('#suggestion1');
        } else if (answer2 === "yes") {
          document.querySelector('#suggestion2');
        } else if (answer3 === "yes") {
          document.querySelector('#suggestion3');
        } else (answer4 === "yes") {
          document.querySelector('#suggestion4');
        }
       }  

      }
    
   
        
    findingPL();