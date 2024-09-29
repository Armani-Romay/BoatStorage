import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'; // Import icons
import axios from 'axios'; // Ensure axios is imported for API calls
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if chat is open or closed
  const [messages, setMessages] = useState([]); // State for chat messages
  const [input, setInput] = useState(''); // State for user input

  // Toggle the chat window open/close
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle sending a message to the chatbot
  const handleSend = async () => {
    if (input.trim()) {
      // Add user message to the messages array
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput(''); // Clear the input after sending

      try {
        // Send the user input to the chatbot API
        const response = await axios.post('http://127.0.0.1:8000/chat/', { message: input });
        const botResponse = response.data.response; // Assuming the API returns a 'response' field

        // Update the messages array with the bot's response
        setMessages(prevMessages => [
          ...prevMessages,
          { text: input, sender: 'user' },
          { text: botResponse, sender: 'bot' }
        ]);
      } catch (error) {
        console.error("Error with chatbot response:", error);
      }
    }
  };

  return (
    <div className={`chat-bot ${isOpen ? 'open' : ''}`}>
      <div className="chat-header" onClick={toggleChat}>
        <span>A.I. Assistant</span>
        <span className="arrow-icon">
          {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </span>
      </div>

      {/* Chat body is displayed only when isOpen is true */}
      {isOpen && (
        <div className="chat-body">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
