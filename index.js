const h1 = document.getElementById('h1'),
  banner = document.getElementById('banner'),
  bannerDiv = document.getElementsByClassName('bannerDiv')
button = document.getElementById('buttons')

const onScroll = (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop
  if (scrollPosition > 150) {
    banner.style.backgroundSize = '150%'
    h1.style.opacity = 0
    h1.style.translate = '0 -50px'
    h1.style.scale = '0.9'
    button.style.opacity = 0
    button.style.translate = '0 -50px'
    button.style.scale = '0.8'
    bannerDiv.style.opacity = 0
    bannerDiv.style.translate = '0 -50px'
    bannerDiv.style.scale = '0.8'
  } else {
    banner.style.backgroundSize = '180%'
    h1.style.opacity = 1
    h1.style.translate = 0
    h1.style.scale = 1
    button.style.opacity = 1
    button.style.translate = 0
    button.style.scale = 1
    bannerDiv.style.opacity = 1
    bannerDiv.style.translate = 0
    bannerDiv.style.scale = 1
  }
}

document.addEventListener('scroll', onScroll)
