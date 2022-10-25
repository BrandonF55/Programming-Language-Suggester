
    
    function findingPL() {
      let form = document.getElementById('#Suggestion-form');
      console.log((form.onsubmit = function(event)) {
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
    
        } else if (answer2 === "yes") {

        } else { (answer3 === "yes" && answer4 === "yes");
      }
     findingPL();

      }
    }
   
        
    