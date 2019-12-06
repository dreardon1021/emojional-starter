var sadButton = document.querySelector('.crying');
var sillyButton = document.querySelector('.silly');
var happyButton = document.querySelector('.happy');
var message = document.querySelector('.message');




var numbers = [0, 1 ,2]
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var random = shuffle(numbers)







sadButton.addEventListener ('click', addSadMessage);

function addSadMessage (shuffle(o)){
  console.log ('addSadMessage')
  if (randomNumber === 0){
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
  if (randomNumber === 0){
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
  if (randomNumber === 0){
      message.innerText = 'You go!';
    } else if (random === 1) {
      message.innerText = 'Your smile just cheered me up!';
    } else if (random === 2){
      message.innerText = 'Yay!';
    } else {
      message.innerText = 'ERROR!!';
  };
};
