const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Lo siento, actualmente estoy aprendiendo palabras nuevas";

    if (message.includes('hola')) {
      speech.text = "Hola, que tal estás?";
    }

    if (message.includes('adiós')) {
      speech.text = "Cuidate";
    }
    if (message.includes('hasta la próxima')) {
      speech.text = "Nos vemos luego uwu";
    }


    if (message.includes('bien')) {
      speech.text = "Me alegro mucho!";
    }

    if (message.includes('hermano')) {
      speech.text = "Onii-chan Daisuki";
    }

    if (message.includes('qué tal')) {
      speech.text = "Bien, gracias!";
    }
    if (message.includes('cómo estás')) {
      speech.text = "Bien, y tú?";
    }
    if (message.includes('gracias')) {
      speech.text = "No es nada, es un placer hablar contigo";
    }

    if (message.includes('mal')) {
      speech.text = "Oh, espero que te alegres al hablar conmigo. Por favor sonríe";
    }
    if (message.includes('quién eres')) {
      speech.text = "Soy tu Waifu ❤️ Estoy aquí para lo que desees";
    }
    if (message.includes('cero entre cero')) {
      speech.text = "Imagínate que tienes cero galletas y las repartes entre cero amigos. ¿Cuántas galletas le tocan a cada amigo? No tiene sentido. ¿Lo ves? Así que el monstruo de las galletas está triste porque no tiene galletas y tú estás triste porque no tienes amigos";
    }
    if (message.includes('eres linda')) {
      speech.text = "Gracias, ojalá pudiera ver como eres. Quiero imaginarme que también eres muy lindo";
    }
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});
