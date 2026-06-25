burger()
formSuccess()
showSlider()
guestbookFormSuccess()
circusCards()

function burger() {
  let burger = document.querySelector('#burger')

  if (!burger) return

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
  })
}

function formSuccess() {
  let joinForm = document.querySelector('.joinForm')
  let successImage = document.querySelector('.formSuccessImage')

  if (!joinForm || !successImage) return

  joinForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!joinForm.checkValidity()) {
      joinForm.reportValidity()
      return
    }

    successImage.classList.add('show')

    setTimeout(() => {
      successImage.classList.remove('show')
    }, 3000)

    joinForm.reset()
  })
}

function showSlider() {
  let poster = document.querySelector('.showPagePoster')
  let leftButton = document.querySelector('.showSliderButtonLeft')
  let rightButton = document.querySelector('.showSliderButtonRight')

  if (!poster || !leftButton || !rightButton) return

  let posters = [
    'images/bugsPoster1.png',
    'images/bugsPoster2.png',
    'images/bugsPoster3.png'
  ]

  let currentPoster = 0

  rightButton.addEventListener('click', () => {
    currentPoster = currentPoster + 1

    if (currentPoster >= posters.length) {
      currentPoster = 0
    }

    poster.src = posters[currentPoster]
  })

  leftButton.addEventListener('click', () => {
    currentPoster = currentPoster - 1

    if (currentPoster < 0) {
      currentPoster = posters.length - 1
    }

    poster.src = posters[currentPoster]
  })
}

function guestbookFormSuccess() {
  let guestbookForm = document.querySelector('.guestbookForm')
  let successImage = document.querySelector('.guestbookSuccessImage')

  if (!guestbookForm || !successImage) return

  guestbookForm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!guestbookForm.checkValidity()) {
      guestbookForm.reportValidity()
      return
    }

    successImage.classList.add('show')

    setTimeout(() => {
      successImage.classList.remove('show')
    }, 3000)

    guestbookForm.reset()
  })
}

function circusCards() {
  let cards = document.querySelectorAll('.circusTeamCard')

  if (!cards.length) return

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped')
    })

    let buyButton = card.querySelector('.circusTeamBuyButton')

    if (buyButton) {
      buyButton.addEventListener('click', (event) => {
        event.stopPropagation()
      })
    }
  })
}