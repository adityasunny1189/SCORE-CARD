document.querySelector("button").addEventListener("click" , function () {
  var t1sc1 = document.querySelector(".t1rd1").value;
  var t1sc2 = document.querySelector(".t1rd2").value;
  var t1sc3 = document.querySelector(".t1rd3").value;
  var t2sc1 = document.querySelector(".t2rd1").value;
  var t2sc2 = document.querySelector(".t2rd2").value;
  var t2sc3 = document.querySelector(".t2rd3").value;
  var t1_total_scr = t1sc1 + t1sc2 + t1sc3;
  var t2_total_scr = t2sc1 + t2sc2 + t2sc3;
  var t1avgscr = t1_total_scr/3;
  var t2avgscr = t2_total_scr/3;
  console.log(t1avgscr);
  console.log(t2avgscr);
  console.log(t1_total_scr);
  console.log(t2_total_scr);
  console.log(t1sc1);
  console.log(t1sc2);
  console.log(t1sc3);
  console.log(t2sc1);
  console.log(t2sc2);
  console.log(t2sc3);
  if(t1_total_scr > t2_total_scr)
  {
    document.querySelector(".content").innerHTML = "Team 1 is winner";
    document.querySelector('.first').style.display = 'flex';
    document.querySelector('.close').addEventListener('click',
    function() {
        document.querySelector('.first').style.display = 'none';
      });
  }
  else if(t1_total_scr === t2_total_scr)
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
