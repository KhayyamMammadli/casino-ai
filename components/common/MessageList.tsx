import React from 'react';
import Button from './Button';
import ViewMoreButton from './ViewMoreButton';

const questions = [
  'Which casino gives welcome bonuses?',
  'Is it possible to play anonymously?',
  'Which site pays out the fastest?',
  'Which site pays out the fastest?',
  'What are the safest sites?',
  'Which casinos accept crypto?',
  'Do I need verification?',
  'What are the withdrawal limits?',
  'Are there mobile apps?',
  'How do I avoid scams?',
];

interface MessageListProps {
  onSelectQuestion: (text: string) => void;
  onToggleExpand: () => void;
  expanded: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ onSelectQuestion, onToggleExpand, expanded }) => {
  const visibleQuestions = expanded ? questions : questions.slice(0, 4);

  return (
    <div className="message-list-wrapper">
      <ViewMoreButton onClick={onToggleExpand} expanded={expanded} />
      <div className="message-list">
        {visibleQuestions.map((q, idx) => (
          <Button key={idx} text={q} onClick={() => onSelectQuestion(q)} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
