
    
    
    
    
    
    
    
    
    if (name.length === 0) {
      alert('Please provide your name.');
    } else if (!age > 0) {
      alert('Please provide your age.');
    } else if (answer1 === "yes") {
      $("#suggestion1").slideDown();
    } else if (answer3 === "yes" && answer4 === "yes") {
      $("#suggestion2").slideDown();
    } else { 
      $("#suggestion3").slideDown();
    };

    $(".user_name").text(name);
    $(this)[0].reset(); 
  }); 
});


