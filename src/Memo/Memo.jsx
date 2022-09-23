import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import './Memo.scss';
import Draggable from '@jyc-coder/draggable';
import { debounce } from 'underscore';
import { observer } from 'mobx-react';
const Memo = ({ item, Edit, setWidthHeight, setPosition, Delete }) => {
  const handleRef = useRef(null);
  const memoContainer = useRef(null);
  const onChangeMemo = useMemo(
    () => debounce((e) => Edit(item.id, e.target.value), 500),
    [item.id, Edit],
  );
  const onChangeSize = useMemo(
    () =>
      debounce((entry) => {
        const { width, height } = entry[0].contentRect;
        setWidthHeight(item.id, width, height);
      }, 100),
    [item.id, setWidthHeight],
  );

  useEffect(() => {
    return () => {
      onChangeMemo.cancel();
      onChangeSize.cancel();
    };
  }, [onChangeMemo, onChangeSize]);

  useLayoutEffect(() => {
    let RO = new ResizeObserver(onChangeSize);
    RO.observe(memoContainer.current);
    return () => {
      RO.disconnect();
      RO = null;
    };
  });

  const onChangePosition = useCallback(
    (x, y) => setPosition(item.id, x, y),
    [item.id, setPosition],
  );

  const onClickDelete = useCallback(() => Delete(item.id), [Delete, item.id]);
  return (
    <Draggable handleRef={handleRef} x={0} y={0} onMove={onChangePosition}>
      <div
        className="memo-container"
        style={{ width: `${250}px`, height: `${300}px` }}
        ref={memoContainer}
      >
        <div className="menu">
          <DragHandleIcon
            ref={handleRef}
            sx={{ cursor: 'move', fontSize: '25px' }}
          />
          <CloseIcon
            sx={{ cursor: 'pointer', fontSize: '25px', float: 'right' }}
            onClick={onClickDelete}
          />
        </div>
        <textarea
          className="memo-text-area"
          defaultValue={item.content}
          name="txt"
          placeholder="Enter memo here"
          onChange={onChangeMemo}
        ></textarea>
      </div>
    </Draggable>
  );
};

export default observer(Memo);
