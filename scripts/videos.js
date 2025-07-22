function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerHTML === "Subscribe") {
    buttonElement.innerHTML = "Subscribed";
  } else {
    buttonElement.innerHTML = 'Subscribe'
  }
};

function joinButton() {
  const buttonElement2 = document.querySelector('.js-join-button');

  if(buttonElement2.innerHTML === 'JOIN') {
    buttonElement2.innerHTML === 'Joined'
  } else {
    buttonElement2.innerHTML = 'JOIN'
  }
}