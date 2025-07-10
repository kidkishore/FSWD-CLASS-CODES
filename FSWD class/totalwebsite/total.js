// this is desktop section going usable button
function cd(){
  document.getElementById('pcimg').style.display = 'none';
  document.getElementById('PCR').style.display = 'block'
  document.getElementById('PCB').style.display = 'none';
  document.getElementById('oldpc').style.display = 'block';
  document.getElementById('opb').style.display = 'block';
  document.getElementById('LPB').style.display = 'none';
  document.getElementById('lapimg').style.display = 'none';
  document.getElementById('newpc').style.display = 'block';
  document.getElementById('npb').style.display = 'block';
}
// this is return button to go to the main menu in the destop setion to computer buying page
function drt(){
    document.getElementById('pcimg').style.display = 'block';
    document.getElementById('PCR').style.display = 'none'
    document.getElementById('PCB').style.display = 'block';
    document.getElementById('oldpc').style.display = 'none';
    document.getElementById('opb').style.display = 'none';
    document.getElementById('LPB').style.display = 'block';
    document.getElementById('lapimg').style.display = 'block';
    document.getElementById('newpc').style.display = 'none';
    document.getElementById('npb').style.display = 'none';
}

// it is laptop section goig button

function ls(){
  document.getElementById('pcimg').style.display = 'none';
  document.getElementById('LAPR').style.display = 'block';
  document.getElementById('PCB').style.display = 'none';
  document.getElementById('oldlapimg').style.display = 'block';
  document.getElementById('oldlap').style.display = 'block';
  document.getElementById('LPB').style.display = 'none';
  document.getElementById('lapimg').style.display = 'none';
  document.getElementById('newlapimg').style.display = 'block';
  document.getElementById('newlap').style.display = 'block';
}

// this is return button from going to the laptop section to computer buying section

function lrt(){
  document.getElementById('pcimg').style.display = 'block';
  document.getElementById('LAPR').style.display = 'none';
  document.getElementById('PCB').style.display = 'block';
  document.getElementById('oldlapimg').style.display = 'none';
  document.getElementById('oldlap').style.display = 'none';
  document.getElementById('LPB').style.display = 'block';
  document.getElementById('lapimg').style.display = 'block';
  document.getElementById('newlapimg').style.display = 'none';
  document.getElementById('newlap').style.display = 'none';
}
function rt(){
    document.getElementById('pcimg').style.display = 'block';
    document.getElementById('PCB').style.display = 'block';
    document.getElementById('LPB').style.display = 'block';
    document.getElementById('lapimg').style.display = 'block';
    document.getElementById('Dorm').style.display='none';
}
function loginForm(){
   document.getElementById('Dorm').style.display='block';
  document.getElementById('main1').style.display='none';
  document.getElementById('main2').style.display='none';
  document.getElementById('main3').style.display='none';
}

function check(){
  let nav = document.getElementById('na').value;
  let Agev = document.getElementById('Age').value;
  let Genv = document.getElementById('gen').value;

  let phnv = document.getElementById('ph').value;
  let plcv = document.getElementById('plc').value;
  let mav = document.getElementById('ma').value;
  let pswv = document.getElementById('psw').value;
  if(nav == ""){
    document.getElementById('nas').innerHTML = "Kindly enter your Name";
    return false;
  }
  else{
    document.getElementById('nas').innerHTML = "";
  }
  if(Agev == ""){
    document.getElementById('ages').innerHTML = "Kindly enter your Age";
    return false;
  }
  else{
    document.getElementById('ages').innerHTML = "";
  }
  if(Genv == ""){
    document.getElementById('gens').innerHTML = "Kindly enter your Gender";
    return false;
  }
  else{
    document.getElementById('gens').innerHTML = "";
  }
  if(phnv == ""){
    document.getElementById('phs').innerHTML = "Kindly enter your Contact No";
    return false;
  }
  else{
    document.getElementById('phs').innerHTML = "";
  }
  if(plcv == ""){
    document.getElementById('ads').innerHTML = "Kindly enter your address";
    return false;
  }
  else{
    document.getElementById('ads').innerHTML = "";
  }
  if(mav == ""){
    document.getElementById('mails').innerHTML = "Kindly enter your E-Mail or Gmail account";
    return false;
  }
  else{
    document.getElementById('mails').innerHTML = "";
  }
  if(pswv == ""){
    document.getElementById('psws').innerHTML = "Kindly enter your SCG Computers account password"
  }
  else{
    document.getElementById('psws').innerHTML = "";
  }
  alert("Your details will be successfully submitted.");
  return true;
}