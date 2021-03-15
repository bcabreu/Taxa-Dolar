'use strict';

// START - responsive menu
const show = document.querySelector('.menu__mobile');
function showMenu() {
  show.style.left = '0';
  show.classList.remove('hidden');
}
function closeMenu() {
  show.style.left = '-100rem';
  show.classList.remove('hidden');
}
// END - responsive menu

// START - Sub-menu
$('.sub-menu ul').hide();
$('.sub-menu a').click(function () {
  $(this).parent('.sub-menu').children('ul').slideToggle('100');
  $(this).find('.right').toggleClass('fa-caret-up fa-caret-down');
});
// END - Sub-menu

// START - date
const data = new Date();
const monthExtensive = Array(
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
);

const dayWeekExtensive = Array(
  'domingo',
  'segunda-feira',
  'terça-feira',
  'quarta-feira',
  'quinta-feira',
  'sexta-feira',
  'sábado'
);

const day = data.getDate(); //1 - 31
const dayWeek = data.getDay(); // 0-6 (zero=domingo)
const month = data.getMonth(); // 0-11 (zero=janeiro)
const year = data.getFullYear(); //4 dígitos

const currenDay = `${dayWeekExtensive[dayWeek]}, ${day} de ${monthExtensive[month]} de ${year}`;

const dateShow = document.querySelector('.date');
dateShow.innerHTML = 'Cotação de ' + currenDay;
// END - date

// Ao clicar em qualquer campo do quadrado de cotação ele vai ativar o input para digitar um valor
const pointer = document.querySelector('.cot-estrangeira');
const input = document.querySelector('.js-coin--dolar');

pointer.addEventListener('click', function () {
  input.addEventListener('input', '');
  console.log('esta funcionando');
});
//

// permitir apenas números nos inputs
function somenteNumeros(num) {
  const input = /[^0-9]/;
  input.lastIndex = 0;
  const campo = num;
  if (input.test(campo.value)) {
    campo.value = '';
  }
}

const inputLocal = querySelector('#js-coin--nacional');
