import React, { useState } from 'react';
import { Typography, Layout } from 'antd';
import MessageList from '../components/common/MessageList';
import InputBox from '../components/common/InputBox';

const { Content } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [expanded, setExpanded] = useState(false); 

  const handleQuestionSelect = (text: string) => {
    setInputValue(text);
  };

  const handleSend = () => {
    console.log('Sending:', inputValue);
    setInputValue('');
  };

  return (
    <Layout className="main-layout">
      <Content className="content-layout">
        <div className="telegram-container">
          <div className="title-section">
            <Title level={3} className="main-title">
              Need a lucky hand?<br />I've got your back!
            </Title>
          </div>

          <div className={`bottom-section ${expanded ? 'expanded' : ''}`}>
            <MessageList
              onSelectQuestion={handleQuestionSelect}
              onToggleExpand={() => setExpanded(!expanded)}
              expanded={expanded}
            />
            <InputBox
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSend}
              placeholder="Find your safest bet"
            />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;
