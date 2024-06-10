function random(x, y){
    return (x+(Math.random()*(y-x)))
}
for (let x = 0; x < 90; x++) {
    let spot = document.createElement('div')
    spot.classList.add('spot')
    let bR = random(40, 100)
    let left = random(0, innerWidth)
    let top = random(0, innerHeight)
    let opacity = Math.random()
    spot.style.borderRadius = `${bR}%`
    spot.style.left = `${left}px`
    spot.style.top = `${top}px`
    spot.style.opacity = `${opacity}`
    document.body.appendChild(spot)
}


document.querySelectorAll('.grass-green').forEach((grassGroup)=>{
    let timing = (Math.random()*(6-3))+3
    let duration = 1
    grassGroup.querySelectorAll('.grass').forEach((grass)=>{
        grass.style.animation = `${duration}s ease-in-out ${timing}s 1 forwards bloom`
    })
})


setTimeout(() => {
    document.querySelectorAll('.flower').forEach((flower)=>{
        flower.classList.add('swing-flower')
    })
}, 3000);
setTimeout(() => {
    document.querySelectorAll('.glowing-grass').forEach((grass)=>{
        grass.style.opacity = '1'
        timing = Math.random()*2
        duration = (Math.random()*(6-3))+3
        grass.style.animation = `${duration}s linear ${timing}s infinite forwards swing-flower`
    })
    // document.querySelectorAll('.grass-green').forEach((grassGroup)=>{
    //     grassGroup.querySelectorAll('.grass').forEach((grass)=>{
    //         let timing = Math.random()*2
    //         let duration = (Math.random()*(6-3))+3
    //         grass.style.opacity = '1'
    //         grass.style.animation = `${duration}s linear ${timing}s infinite forwards swing-grass`
    //     })
    // })
    document.querySelectorAll('.long-bush').forEach((bush)=>{
        let timing = Math.random()*2
        let duration = (Math.random()*(6-3))+3
        bush.style.opacity = '1'
        bush.style.animation = `${duration}s linear ${timing}s infinite forwards swing-flower`
    })
}, 5000);

// setTimeout(() => {

// }, 5000);