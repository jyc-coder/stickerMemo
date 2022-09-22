import React, { useRef } from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import './Memo.scss';
import Draggable from '@jyc-coder/draggable';
const Memo = () => {
  const handleRef = useRef(null);
  return (
    <Draggable
      handleRef={handleRef}
      x={0}
      y={0}
      onMove={(x, y) => console.log(x, y)}
    >
      <div
        className="memo-container"
        style={{ width: `${250}px`, height: `${300}px` }}
      >
        <div className="menu">
          <DragHandleIcon
            ref={handleRef}
            sx={{ cursor: 'move', fontSize: '25px' }}
          />
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
    </Draggable>
  );
};

export default Memo;
