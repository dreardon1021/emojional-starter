var sadButton = document.querySelector('.crying');
var sillyButton = document.querySelector('.silly');
var happyButton = document.querySelector('.happy');
var message = document.querySelector('.message');


  var possibleNums = [0, 1, 2];

  generate = function random() {
    for(i = 0; i < possibleNums.length; i++) {
    console.log(possibleNums[i]);
    return possibleNums[i];
  };
};




sadButton.addEventListener ('click', addSadMessage);

function addSadMessage (){
  console.log ('addSadMessage')
  // var random = Math.floor(Math.random() * 3);
  if (generate() === 0){
      message.innerText = 'Do you want to talk?';
    } else if (generate()  === 1) {
      message.innerText = 'Keep your head up';
    } else if (generate()  === 2){
      message.innerText = 'What can I do?';
    } else {
      message.innerText = 'ERROR!!';
  };
};



sillyButton.addEventListener ('click', addSillyMessage);

function addSillyMessage (){
  // var random = Math.floor(Math.random() * 3);
  if (generate() === 0){
      message.innerText = 'Interesting response';
    } else if (generate()  === 1) {
      message.innerText = 'Sounds....good?';
    } else if (generate()  === 2){
      message.innerText = 'Me too';
    } else {
      message.innerText = 'ERROR!!';
  };
};

happyButton.addEventListener ('click', addHappyMessage);

function addHappyMessage (){
  // var random = Math.floor(Math.random() * 3);
  if (generate() === 0){
      message.innerText = 'You go!';
    } else if (generate()  === 1) {
      message.innerText = 'happy?';
    } else if (generate()  === 2){
      message.innerText = 'Me too';
    } else {
      message.innerText = 'ERROR!!';
  };
};
