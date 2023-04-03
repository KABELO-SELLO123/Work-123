window.addEventListener('load',()=>{

    var getCardh=localStorage.getItem('CardTom');
    var getCardb=localStorage.getItem('CardBottom');
    var getCardNum=localStorage.getItem('CardNum');
    var getCardAmount=localStorage.getItem('CardAmount');
    var CardColorStyle=localStorage.getItem('CardC');

    document.getElementById('claim-option').textContent=getCardb;
    document.getElementById('pay-group').textContent=getCardb;

    PasscardInfromation(getCardh,getCardb,getCardNum,getCardAmount,CardColorStyle)


    $(".tt").hide();
  
    
})


function PasscardInfromation(getCardh,getCardb,getCardNum,getCardAmount,CardColorStyle){

    document.getElementById('get-card-h').textContent=getCardh;
    document.getElementById('get-card-b').textContent=getCardb;
    document.getElementById('get-card-Number').textContent=getCardNum;
    document.getElementById('get-card-Amount').textContent=getCardAmount;
    document.getElementById('set-card-color').className=CardColorStyle;
    


}




