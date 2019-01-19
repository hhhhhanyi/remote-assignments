const welcome = document.getElementsByClassName('welcome')[0];
const navbtn = document.getElementsByClassName('navbtn')[0];
const navbar = document.getElementsByClassName('navbar')[0];
const items = document.getElementsByClassName('items');
const exit = document.getElementsByClassName('exit')[0];
const action = document.getElementsByClassName('button')[0];
const hiden = document.getElementsByClassName('container')[1];

welcome.addEventListener('click' , () =>{
  welcome.textContent = "Have a Good Time!"
});

navbtn.addEventListener('click' , () =>{
  navbar.style.display = 'block';
  navbar.style.right = 0;
  navbar.style.top = 0;
  navbar.style.height = '100vh';
  navbar.style.width = '200px';
  navbar.style.backgroundColor= 'white';
  navbar.style.position = 'fixed';

  exit.style.display = 'block';
  exit.style.position = 'fixed';
  exit.style.right = 0;

  for (let i=0; i<items.length; i++){
    items[i].style.display = "flex";
    items[i].style.flexDirection = "column";
    items[i].style.textAlign = 'left';
    items[i].style.margin = '1em';
  }
});

exit.addEventListener('click', () =>{
  navbar.style.display = 'none';
});

action.addEventListener('click', () =>{
  hiden.style.display = 'flex';
});
