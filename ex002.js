var agora = new Date
var hora =  agora.getHours()
var min = agora.getMinutes()
var div1 = document.querySelector('div#div1')
var div2 = document.querySelector('div#div2')

div1.innerHTML += `Agora são ${hora} h e ${min} min.`

if (hora >= 5 && hora <= 12  ) {
    document.body.style.backgroundColor = 'rgb(219, 211, 132)'  
      div2.innerHTML += `<img class="img" id="img" src="./img/dia.avif" alt="">`
} else if (hora>=13 && hora<= 18) {
    document.body.style.backgroundColor = 'rgb(196, 148, 84)'  
    div2.innerHTML += `<img class="img" id="img" src="./img/Tarde.avif" alt="">`
} else if (hora > 18 && hora >=0 ) {
    document.body.style.backgroundColor = 'rgb(60, 62, 74)'  
        div2.innerHTML += `<img class="img" id="img" src="./img/noite.avif" alt="">`
}else{
    document.body.style.backgroundColor = 'rgb(48, 34, 102)'  
    div2.innerHTML += `<img class="img" id="img" src="./img/madrugada.avif" alt="">`
}



