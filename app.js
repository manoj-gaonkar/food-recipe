tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#FF6363',
            secondary: {
              100: '#E2E2D5',
              200:'#888883',
            }
          },
          fontFamily: {
            body : ['Open Sans']
          }
        }
      }
}
    
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', function() {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  }
  else {
    menu.classList.add('hidden');
  }
})