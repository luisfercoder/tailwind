const darkModeInput = document.querySelector('#darkmode');
const logo =document.querySelector('#logo');
const colorLogo = document.querySelector('#colorLogo');

darkModeInput.addEventListener('click',mode)

function mode(e){
  let checked = e.target.checked;
 document.documentElement.classList.toggle('dark');

  // if(checked){
  //  document.documentElement.classList.toggle('dark');
  //   colorLogo.classList.add('bg-clip-text','text-transparent','bg-gradient-to-r', 'from-indigo-500' ,'from-10%', 'via-purple-500' ,'via-30%' ,'to-pink-500' ,'to-90%' ,'text-xl','font-extrabold'); 
  //  }else{
  //   colorLogo.classList.remove('bg-clip-text','text-transparent','bg-gradient-to-r', 'from-indigo-500' ,'from-10%', 'via-purple-500' ,'via-30%' ,'to-pink-500' ,'to-90%' ,'text-xl','font-extrabold');
  //  }
  

   }



