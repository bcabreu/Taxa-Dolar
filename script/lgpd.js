'use strict';

const lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';

let lgpdHtml = ` <div class="lgpd">
<div class="lgpd--left">
  Nós utilizamos cookies para melhorar sua experiência do usuário.<br/>
  Para conferir detalhadamente todos os cookies utilizados, leia nossa <a href="./pages/politica-de-privacidade.html">política de privacidade</a>
</div>
<div class="lgpd--right">
  <button>ACEITAR</button>
</div>
</div>
<link rel="stylesheet" href="./css/lgpd.css">`;

let lsContent = localStorage.getItem('lgpd');
if (!lsContent) {
  document.body.innerHTML += lgpdHtml;

  let lgpdArea = document.querySelector('.lgpd');
  let lgpdButton = lgpdArea.querySelector('button');

  lgpdButton.addEventListener('click', async () => {
    lgpdArea.remove();

    let result = await fetch(lgpdUrl);
    let json = await result.json();

    if (json.error != '') {
      let id = '123';
      localStorage.setItem('lgpd', id);
    }
  });
}
