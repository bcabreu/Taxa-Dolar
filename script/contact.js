'use strict';

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'mail.taxadolar.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contato@taxadolar.com',
    pass: 
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailOption = {
  from
}

// Validar campo de e-mail

function checarEmail() {
  if (
    document.forms[0].email.value == '' ||
    document.forms[0].email.value.indexOf('@') == -1 ||
    document.forms[0].email.value.indexOf('.') == -1
  ) {
    alert('Por favor, informe um E-MAIL válido!');
    return false;
  }
}

// resposta de confirmação de envio ao enviar um e-mail
