$(function(){
  //J'ajoute un évènement click à mon bouton id verify.
  $('#verify').click(function(){
    // Je stock dans des variables la valeur des input.
    var Français = $('#french').val();
    var Anglais =  $('#english').val();
    var Maths = $('#maths').val();
    var Histoire = $('#history').val();
    var Eps = $('#sport').val();
    //Je stock dans la variable result la moyenne des notes . J'utilise parseFloat pour transformer les chaînes de caractères renvoyées par .val() en valeur numériques.
    var Result = ((parseFloat(Français) + parseFloat(Anglais) + parseFloat(Maths) + parseFloat(Histoire) + parseFloat(Eps)) / 5);
    //Je compare ma variable Result par des intervalles.
    if(Result >= 0 && Result< 10 ){
      alert( 'En dessous de la moyenne' + Result);
    }
    else if (Result >= 10 && Result < 13 ){
      alert('Moyen' + Result);
    }
    else if (Result >= 13 && Result < 16){
      alert('Bien' + Result);
    }
    else if (Result >= 16 && Result < 20){
      alert('Très Bien ' + Result);
    }
    else if(Result == 20) {
      alert('Excellent' + Result);
    }
  });
});
