const darkModeInput = document.querySelector('#darkmode');
const logo =document.querySelector('#logo');
const colorLogo = document.querySelector('#colorLogo');

darkModeInput.addEventListener('click',mode)

function mode(e){
  let checked = e.target.checked;
 document.documentElement.classList.toggle('dark');
   }
function menu(e){
  let list = document.querySelector('ul');
  e.name==='menu'?(e.name ='close',list.classList.add('top-[80px]'),classList.add('opacity-100')):(e.name = 'menu',list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}



