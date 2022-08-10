'use strict';

const container = document.getElementById('container')
let tecla = ''

const sons = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav'
}

const criarTecla = (texto) => {
  const tecla = document.createElement('div')
  tecla.classList.add('key')
  tecla.textContent = texto
  tecla.id = texto
  container.appendChild(tecla)
}

const exibir = (sons) => {
  Object.keys(sons).forEach(criarTecla) //vai varrer o array de teclas e para cada uma, vai criar uma tecla dinamicamente com a função acima
}

const tocarSom = (tecla) => {
  const audio = new Audio(`./sounds/${sons[tecla]}`)
  audio.play()
}

const adicionarEfeito = (tecla) => { //adicionar esta classe apenas ao apertar tecla ou clicar
  document.getElementById(tecla).classList.add('active')
}

const removerEfeito = (tecla) => {
  const divAtual = document.getElementById(tecla)
  const removeActive = () => divAtual.classList.remove('active')
  divAtual.addEventListener('transitionend', removeActive)
}

const ativarTecla = (evento) => {
  if (evento.type == 'click') {
  tecla = evento.target.id
  } else {
    tecla = evento.key.toUpperCase() //clique e tecla são eventos diferentes
  }

  const letraExiste = sons.hasOwnProperty(tecla) //verifica se existe a tecla clicada
  if (letraExiste) {
    adicionarEfeito(tecla)
    tocarSom(tecla)
    removerEfeito(tecla)
  }
}

exibir(sons)
container.addEventListener('click', ativarTecla)
window.addEventListener('keyup', ativarTecla)