const pantalla = document.querySelector('.pantalla');
const boton = document.querySelectorAll('.btn');

boton.forEach(botones => {
    botones.addEventListener('click', () => {
        let contenido = botones.textContent;

        if(botones.textContent === 'AC'){
            pantalla.textContent = '0';
            return
        }
        
        if(botones.id === 'borrar'){
            if(pantalla.textContent.length === 1 || pantalla.textContent === 'SYNTAX ERROR!'){
                pantalla.textContent = '0';
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return
        }

        if(botones.id === 'igual'){
            try{
                pantalla.textContent = eval(pantalla.textContent);

            }catch{
                pantalla.textContent = 'SYNTAX ERROR!'
            }
            return;
        }

        if(pantalla.textContent === '0' ||  pantalla.textContent === 'SYNTAX ERROR!'){
            pantalla.textContent = contenido;
        }else{
            pantalla.textContent += contenido;
        }

        if(pantalla.textContent.length === 14){
            alert('ESPACIOS LLENOS');
            pantalla.textContent = '0';
        }
        

    })
})