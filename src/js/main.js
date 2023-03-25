const addBtn = document.querySelector('.btn__add')
const wrapperShadow = document.querySelector('.wrapper__shadow')
const mainShadow = document.querySelector('.main__shadow')
const modalName = document.querySelector('.modal__name')
const closeModalNameBnt = document.querySelector('.btn__closeModalName')
const confirmBtn = document.querySelector('.btn__confirm')
const modalYesNo = document.querySelector('.modal__yesNo')
const yesBtn = document.querySelector('.btn__yes')
const noBtn = document.querySelector('.btn__no')
const modalPicture = document.querySelector('.modal__picture')
const boxTeam = document.querySelector('.box__team')
const inputPicture = document.querySelector('.modal__picture-input')

console.log(noBtn)

const showModalName = () => {
	modalName.classList.add('active__modal')
	wrapperShadow.classList.add('active')
	mainShadow.classList.add('active')
}

const closeModalName = () => {
	modalName.classList.remove('active__modal')
	wrapperShadow.classList.remove('active')
	mainShadow.classList.remove('active')
}

const confirmFunction = () => {
	modalYesNo.classList.add('active__modal')
}

const showModalPicture = () => {
	modalPicture.classList.add('active__modal')
}

inputPicture.addEventListener('change', () => {
	const newPictureReader = new FileReader()
	newPictureReader.readAsDataURL(inputPicture.files[0])
	newPictureReader.addEventListener('load', () => {
		const inputName = document.querySelector('.modal__name-input').value
		const pictureURL = newPictureReader.result
		const newPlayerDiv = document.createElement('div')
		const newPlayerShadow = document.createElement('div')
		const newPlayerName = document.createElement('div')
		const newPlayerParagraph = document.createElement('p')
		newPlayerDiv.style.backgroundImage = `url(${pictureURL})`
		newPlayerDiv.classList.add('box__team-player')
		newPlayerShadow.classList.add('box__team-player-shadow')
		newPlayerName.classList.add('box__team-player-name')
		newPlayerParagraph.classList.add('box__team-player-name-p')
		newPlayerParagraph.innerText = inputName
		newPlayerName.appendChild(newPlayerParagraph)
		newPlayerDiv.appendChild(newPlayerShadow)
		newPlayerDiv.appendChild(newPlayerName)
		boxTeam.appendChild(newPlayerDiv)
		newPlayerDiv.setAttribute('draggable', true)
		modalPicture.classList.remove('active__modal')
		modalYesNo.classList.remove('active__modal')
		mainShadow.classList.remove('active')
		modalName.classList.remove('active__modal')
		wrapperShadow.classList.remove('active')
	})
})

const addPlayerWithoutPicture = () => {
	const inputName = document.querySelector('.modal__name-input').value
	const newPlayerDiv = document.createElement('div')
	const newPlayerShadow = document.createElement('div')
	const newPlayerName = document.createElement('div')
	const newPlayerParagraph = document.createElement('p')
	const newIcon = document.createElement('i')
	newPlayerDiv.classList.add('box__team-player')
	newPlayerShadow.classList.add('box__team-player-shadow')
	newPlayerName.classList.add('box__team-player-name')
	newPlayerParagraph.classList.add('box__team-player-name-p')
	newIcon.classList.add('fa-solid', 'fa-user', 'box__team-player-icon')
	newPlayerParagraph.innerText = inputName
	newPlayerDiv.appendChild(newIcon)
	newPlayerName.appendChild(newPlayerParagraph)
	newPlayerDiv.appendChild(newPlayerShadow)
	newPlayerDiv.appendChild(newPlayerName)
	boxTeam.appendChild(newPlayerDiv)
	newPlayerDiv.setAttribute('draggable', true)
	modalPicture.classList.remove('active__modal')
	modalYesNo.classList.remove('active__modal')
	mainShadow.classList.remove('active')
	modalName.classList.remove('active__modal')
	wrapperShadow.classList.remove('active')
}

addBtn.addEventListener('click', showModalName)
closeModalNameBnt.addEventListener('click', closeModalName)
confirmBtn.addEventListener('click', confirmFunction)
yesBtn.addEventListener('click', showModalPicture)
noBtn.addEventListener('click', addPlayerWithoutPicture)
