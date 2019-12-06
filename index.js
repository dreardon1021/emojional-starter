var sadButton = document.querySelector('.crying');
var sillyButton = document.querySelector('.silly');
var happyButton = document.querySelector('.happy');
var message = document.querySelector('.message');


sadButton.addEventListener ('click', addSadMessage);

function addSadMessage (){
  console.log ('addSadMessage')
  var random = Math.floor(Math.random() * 3);
  if (random === 0){
      message.innerText = 'Do you want to talk?';
    } else if (random === 1) {
      message.innerText = 'Keep your head up';
    } else if (random === 2){
      message.innerText = 'What can I do?';
    } else {
      message.innerText = 'ERROR!!';
  };
};



sillyButton.addEventListener ('click', addSillyMessage);

function addSillyMessage (){
  var random = Math.floor(Math.random() * 3);
  if (random === 0){
      message.innerText = 'Interesting response';
    } else if (random === 1) {
      message.innerText = 'Sounds....good?';
    } else if (random === 2){
      message.innerText = 'Me too';
    } else {
      message.innerText = 'ERROR!!';
  };
};

happyButton.addEventListener ('click', addHappyMessage);

function addHappyMessage (){
  var random = Math.floor(Math.random() * 3);
  if (random === 0){
      message.innerText = 'You go!';
    } else if (random === 1) {
      message.innerText = 'happy?';
    } else if (random === 2){
      message.innerText = 'Me too';
    } else {
      message.innerText = 'ERROR!!';
  };
};
