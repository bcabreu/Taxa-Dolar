'use strict';

const url = 'https://economia.awesomeapi.com.br/json/all';

// START DOLAR
const coinEstrangeira = document.querySelector('#js-coin--estrangeira');
const coinNacional = document.querySelector('#js-coin--nacional');
coinEstrangeira.addEventListener('input', calculate);
coinNacional.addEventListener('input', calculate);

function calculate(currency) {
  const input = document.querySelector('#js-coin--estrangeira');
  const valor = input.value;

  fetch(url).then(res => {
    return res.json().then(tax => {
      const rate = parseFloat(tax.USDT.high);
      const low = parseFloat(tax.USDT.low);
      const high = parseFloat(tax.USDT.high);

      if (currency == 'tax') {
        coinNacional.value = (valor / rate).toFixed(2);
      } else {
        coinNacional.value = (valor * rate).toFixed(2);
      }

      // START VARIATION

      document.querySelector('.low').innerHTML = `R$ ${(low * 1).toFixed(2)}`;
      document.querySelector('.today').innerHTML = `R$ ${(rate * 1).toFixed(
        2
      )}`;
      document.querySelector('.high').innerHTML = `R$ ${(high * 1).toFixed(2)}`;
      // END VARIATION

      // START INFO
      // document.querySelector('.tax-information').innerHTML = (rate * 1).toFixed(
      //   2
      // );
      // document.querySelector('.today').innerHTML = `R$ ${(rate * 1).toFixed(
      //   2
      // )}`;
      // END INFO

      // START TABLE
      document.querySelector('.convert-1').innerHTML = `R$ ${(rate * 1).toFixed(
        2
      )}`;
      document.querySelector('.convert-2').innerHTML = `R$ ${(rate * 2).toFixed(
        2
      )}`;
      document.querySelector('.convert-3').innerHTML = `R$ ${(rate * 5).toFixed(
        2
      )}`;
      document.querySelector('.convert-4').innerHTML = `R$ ${(
        rate * 10
      ).toFixed(2)}`;
      document.querySelector('.convert-5').innerHTML = `R$ ${(
        rate * 25
      ).toFixed(2)}`;
      document.querySelector('.convert-6').innerHTML = `R$ ${(
        rate * 50
      ).toFixed(2)}`;
      document.querySelector('.convert-7').innerHTML = `R$ ${(
        rate * 100
      ).toFixed(2)}`;
      document.querySelector('.convert-8').innerHTML = `R$ ${(
        rate * 1000
      ).toFixed(2)}`;
      // END TABLE
    });
  });
}

setInterval(calculate, 30000);
//
// function formatCurrency() {
//   let input = document.querySelector('#js-coin--estrangeira');
//   let valor = input.value;

//   valor = valor + '';
//   valor = parseInt(valor.replace(/[\D]+/g, ''));
//   valor = valor + '';
//   valor = valor.replace(/([0-9]{2})$/g, ',$1');
//   if (valor.length > 6) {
//     valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2');
//   }
//   coinEstrangeira.value = valor;
//   // coinNacional.value = valor;
//   if (valor == 'NaN') {
//     coinEstrangeira.value = '';
//   }
// }

//

// Chamando a Fun????o para exibir a cota????o assim que entrar na p??gina
// OBS: N??o se pode esquecer de colocar o 'value' no HTML, sen??o n??o vai funcionar.
calculate();
//END DOLAR

// select all content click on input
function selectAllText() {
  coinEstrangeira.select();
}
