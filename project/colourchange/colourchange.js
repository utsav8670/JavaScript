const button = document.querySelectorAll('.button');
const body = document.querySelector("body")

button.forEach(function(button){
  button.addEventListener('click',function(e){
    if (e.target.id === 'grey'){
      body.style.backgroundColor = 'grey'
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = 'yellow'
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue'
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = 'white'
    }
    
  })
})