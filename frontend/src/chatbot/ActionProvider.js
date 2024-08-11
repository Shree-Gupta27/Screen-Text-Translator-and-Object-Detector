// chatbot/ActionProvider.js

class ActionProvider {
  constructor() {
    this.speechSynthesis = window.speechSynthesis; // Initialize the SpeechSynthesis API
  }

  handleDefault() {
    console.log("Default action triggered");
  }

  handleHoverText(parsedMessage) {
    const text = parsedMessage.text;

    const speech = new SpeechSynthesisUtterance(text);
    this.speechSynthesis.speak(speech);
  }
}

export default ActionProvider;
