//front end

$(document).ready(function(){
  $(".initialInput form").submit(function(event){
    event.preventDefault();

    var name = $("input#nameInput").val();
    var startingDeposit = parseInt($("input#initialDeposit").val());

    //console.log(name);
    console.log(typeof startingDeposit);

    $("#outputName").text(name);
    $("#outputBal").text(deposit(startingDeposit));

  });

  $(".transInput form").submit(function(event){
    event.preventDefault();

    var withdraw = parseInt($("input#withdraw").val());
    var depo = parseInt($("input#deposit").val());

    console.log(currentBal);
    $("#outputBal").text(deposit(depo));
  });
});


//back end

 var currentBal = 0;

 function deposit (x){
   currentBal += x;
   return currentBal;
 }
