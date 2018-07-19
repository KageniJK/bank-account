//front end

$(document).ready(function(){
  $(".initialInput form").submit(function(event){
    event.preventDefault();

    var name = $("input#nameInput").val();
    var startingDeposit = $("input#initialDeposit").val();

    //console.log(name);
    //console.log(startingDeposit);

    $("#outputName").text(name);
    $("#outputBal").text(startingDeposit);

  });

  $(".transInput form").submit(function(event){
    event.preventDefault();

    var withdraw = $("input#withdraw").val();
    var deposit = $("input#deposit").val();

    console.log(withdraw);
    console.log(deposit);
  });
});
