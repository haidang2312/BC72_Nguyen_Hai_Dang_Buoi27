
listBtnThayAo.forEach((button, index) =>{
    button.addEventListener('click', () => {
        document.getElementById('topcloth').innerHTML = listTopCLoth[index]
    })
})

listBtnThayVay.forEach((button, index) =>{
    button.addEventListener('click', () => {
        document.getElementById('botcloth').innerHTML = listBotCloth[index]
    })
})

listBtnThayGiay.forEach((button, index) =>{
    button.addEventListener('click', () => {
        document.getElementById('feet').innerHTML = listShoe[index]
    })
})

listBtnThayTui.forEach((button, index) =>{
    button.addEventListener('click', () => {
        document.getElementById('handbag').innerHTML = listHandbag[index]
    })
})


listBtnThayVongCo.forEach((button, index) =>{
    button.addEventListener('click', () => {
        document.getElementById('necklace').innerHTML = listNecklace[index]
    })
})


listBtnThayKieuToc.forEach((button, index) =>{
    button.addEventListener('click', () => {
        document.getElementById('hairstyle').innerHTML = listHair[index]
    })
})

listBtnThayNen.forEach((button, index) =>{
    button.addEventListener('click', () => {
        document.getElementById('background').innerHTML = listBackground[index]
    })
})