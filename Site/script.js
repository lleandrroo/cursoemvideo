function carregar() {
    var msg = window.document.getElementById('local')
    var img = window.document.getElementById('imagem') 
    var data = new Date()
    hora = 20 //var hora = data.getHours()
    msg.innerHTML = 'Agora são ' + hora + ' horas.'    
    if (hora >= 0 && hora < 12) {   
        img.src = 'manha.png'
        document.body.style.background = 'rgb(24 175 .1)'
       
    }else if (hora >=12 && hora <= 18) { 
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(6 24 28)'
       
    }else {
        img.src = 'noite.png'
        document.body.style.background = 'rgb(0 23 40)'
    }
}