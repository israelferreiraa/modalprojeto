let open = document.getElementById('open-btn')

let modal = document.getElementById('modal-container')

let close = document.getElementById('close-btn')


open.addEventListener('click', function(){
    modal.style.display = 'block'
})

close.addEventListener('click', function(){
    modal.style.display = 'none'
})

window.addEventListener('click', function(e){
    if(e.target === modal){ 
     modal.style.display = 'none'
    }
})

