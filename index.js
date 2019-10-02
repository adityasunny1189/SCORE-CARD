document.querySelector("button").addEventListener("click" , function () {
  var t1sc1 = document.querySelector(".t1rd1").value;
  var t1sc2 = document.querySelector(".t1rd2").value;
  var t1sc3 = document.querySelector(".t1rd3").value;
  var t2sc1 = document.querySelector(".t2rd1").value;
  var t2sc2 = document.querySelector(".t2rd2").value;
  var t2sc3 = document.querySelector(".t2rd3").value;
  var t1avgscr = (t1sc1 + t1sc2 + t1sc3) / 3;
  var t2avgscr = (t2sc1 + t2sc2 + t2sc3) / 3;
  if(t1avgscr > t2avgscr)
  {
    document.querySelector(".content").innerHTML = "Team 1 is winner";
    document.querySelector('.first').style.display = 'flex';
    document.querySelector('.close').addEventListener('click',
    function() {
        document.querySelector('.first').style.display = 'none';
      });
  }
  else if(t1avgscr === t2avgscr)
  {
    document.querySelector(".content").innerHTML = "Match Tie";
    document.querySelector('.first').style.display = 'flex';
    document.querySelector('.close').addEventListener('click',
    function() {
        document.querySelector('.first').style.display = 'none';
      });
  }
  else
  {
    document.querySelector(".content").innerHTML = "Team 2 is winner";
    document.querySelector('.first').style.display = 'flex';
    document.querySelector('.close').addEventListener('click',
    function() {
        document.querySelector('.first').style.display = 'none';
      });
  }
});
