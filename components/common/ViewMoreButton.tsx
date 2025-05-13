import React from 'react';
import { Button } from 'antd';

interface ViewMoreButtonProps {
  onClick: () => void;
  expanded: boolean;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ onClick, expanded }) => {
  return (
    <Button
      type="default"
      block
      className="view-more-button"
      onClick={onClick}
    >
      {expanded ? 'View less' : 'View more questions'}
    </Button>
  );
};

export default ViewMoreButton;
