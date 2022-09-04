let animation = bodymovin.loadAnimation({
    container: document.getElementById('animContainer'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_7eylklyd.json' // lottie file path
  })

  let animation2 = bodymovin.loadAnimation({
    container: document.getElementById('myServicesAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    rendererSettings: {
        id: 'svg2',
    },
    path: 'https://assets7.lottiefiles.com/packages/lf20_exfaib4n.json' // lottie file path
  })

// animation2.setAttribute('id', 'svg2')
// grabWindowHeight()

// function grabWindowHeight(){
//     let hero = document.querySelector('#hero')
//     hero.style.height = window.innerHeight + 'px'
// }