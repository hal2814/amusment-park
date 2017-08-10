$(document).ready(function(){
  $("#height").submit(function(event) {
      var height = (function(feet, inches){
         return (feet*12) + inches;
      });


      var feet= $("#feet").val();
      var inches= $("#inches").val();
      var parseFeet = parseInt(feet);
      var parseInches = parseInt(inches);
      alert("You're " + height(parseFeet, parseInches) +  " inches tall." );

      if(height(parseFeet, parseInches)< 55){
        $("#tooShort").show();
      };

      if((height(parseFeet, parseInches) > 55) && (height(parseFeet, parseInches) < 62)){
        $("#tooShort").show();
        $("#middle").show();
      };
      if(height(parseFeet, parseInches) > 62){
        $("#tooShort").show();
        $("#middle").show();
        $("#tall").show();
      };
      event.preventDefault();
    });
  });
