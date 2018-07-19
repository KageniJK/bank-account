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
});
