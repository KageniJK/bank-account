//front end

$(document).ready(function(){
  $(".initialInput form").submit(function(event){
    event.preventDefault();

    var name = $("input#nameInput").val();
    var startingDeposit = parseInt($("input#initialDeposit").val());

    var freshAccount= new Account (name,startingDeposit);
    window.freshAccount=freshAccount;
    //console.log(name);
    console.log(typeof startingDeposit);

    $("#outputName").text(freshAccount.name);
    $("#outputBal").text(freshAccount.deposit(startingDeposit));

  });

  $(".transInput form").submit(function(event){
    event.preventDefault();

    var withdraw = parseInt($("input#withdraw").val());
    var depo = parseInt($("input#deposit").val());

    $("#outputBal").text(freshAccount.withdrawal(withdraw));
    $("#outputBal").text(freshAccount.deposit(depo));

    $("input#withdraw").val("0");
    $("input#deposit").val("0");
  });
});


//back end

 var currentBal = 0;

 function Account(Name,Current){
   this.name = Name;
   this.current = Current;
 }

 Account.prototype.deposit= function (x){
   currentBal += x;
   return currentBal;
 }

 Account.prototype.withdrawal= function (y){
   currentBal -= y;
   return currentBal;
 }
