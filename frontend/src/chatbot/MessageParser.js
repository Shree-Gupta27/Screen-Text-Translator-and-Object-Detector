class MessageParser {
  parse(message) {
    return {
      text: message.trim(), // Trim any leading or trailing whitespace
    };
  }
}

export default MessageParser;
