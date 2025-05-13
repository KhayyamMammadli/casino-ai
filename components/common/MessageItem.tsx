import React from 'react';

interface MessageItemProps {
  text: string;
  isUser?: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ text, isUser = false }) => {
  return (
    <div className={`message-item ${isUser ? 'user-message' : 'bot-message'}`}>
      {text}
    </div>
  );
};

export default MessageItem;