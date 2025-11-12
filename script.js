document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Gracias por tu mensaje. Te responderemos muy pronto desde CHATBOTBUSINESS 🚀');
  this.reset();
});
const messages = document.getElementById('messages');
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const respuestas = {
  hola: "👋 ¡Hola! ¿Para qué día quieres hacer tu reserva?",
  reserva: "Perfecto ✅ ¿Para cuántas personas sería?",
  gracias: "¡De nada! 😊 Estoy aquí para ayudarte.",
  adios: "Hasta pronto 👋",
  default: "No te entiendo del todo 🤔, pero puedo ayudarte con reservas, horarios o información del negocio."
};

function enviarMensaje() {
  const texto = input.value.trim();
  if (texto === "") return;

  // Mensaje del usuario
  const userMsg = document.createElement('div');
  userMsg.classList.add('user');
  userMsg.textContent = texto;
  messages.appendChild(userMsg);

  // Respuesta del bot
  const botMsg = document.createElement('div');
  botMsg.classList.add('bot');
  const respuesta = Object.keys(respuestas).find(key => texto.toLowerCase().includes(key))
    ? respuestas[Object.keys(respuestas).find(key => texto.toLowerCase().includes(key))]
    : respuestas.default;

  setTimeout(() => {
    botMsg.textContent = respuesta;
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 700);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}

sendBtn.addEventListener('click', enviarMensaje);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') enviarMensaje();
});
