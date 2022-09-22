import React from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import './Memo.scss';
const Memo = () => {
  return (
    <div
      className="memo-container"
      style={{ width: `${250}px`, height: `${300}px` }}
    >
      <div className="menu">
        <DragHandleIcon sx={{ cursor: 'move', fontSize: '25px' }} />
        <CloseIcon
          sx={{ cursor: 'pointer', fontSize: '25px', float: 'right' }}
        />
      </div>
      <textarea
        className="memo-text-area"
        defaultValue={'enter memo here'}
        name="txt"
        placeholder="Enter memo here"
      ></textarea>
    </div>
  );
};

export default Memo;
