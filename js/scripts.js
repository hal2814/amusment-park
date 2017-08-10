$(document).ready(function(){
  $("#height").submit(function(event) {
      var height = (function(feet, inches){
         return (feet*12) + inches;
      });


      var feet= $("#feet").val();
      var inches= $("#inches").val();
      var parseFeet = parseInt(feet);
      var parseInches = parseInt(inches);
      alert("your height is " + height(parseFeet,parseInches));

      if(height(parseFeet, parseInches)< 55){
        alert("You cannot ride anything!");
        alert(height(parseFeet,parseInches));
      };

      if((height(parseFeet, parseInches)> 55) && (height(feet, inches) > 62)){
        alert("you can ride these");
        alert(height(parseFeet,parseInches));
      } else{
        alert("you can ride everything!");
        alert(height(parseFeet,parseInches));
      };
      event.preventDefault();
    });
  });
