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
    path: 'https://assets7.lottiefiles.com/packages/lf20_exfaib4n.json' // lottie file path
  })

//   let arrOfProjects = document.getElementsByClassName('project')
// //   arrofProjects.forEach((project) => project.addEventListener('focus', turnColorBlack))
//   for(let i = 0; i < arrOfProjects.length; i++){
//       arrOfProjects[i].addEventListener('mouseenter', turnColorBlack(i))
//   }


//   function turnColorBlack(i){
//     let colorChange = document.getElementsByClassName('projectP')
//     console.log(colorChange[i])
//   }