'use strict';

// WhatsApp
function share() {
  if (navigator.share !== undefined) {
    navigator
      .share({
        title: 'O título da sua página',
        text: 'Um texto de resumo',
        url: 'https://seusite.com/sua_url',
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing', error));
  }
}
