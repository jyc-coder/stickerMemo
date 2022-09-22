import { observer } from 'mobx-react';
import Memo from './Memo/Memo';
import AddIcon from '@mui/icons-material/Add';
import { useCallback } from 'react';

function App({ store }) {
  const AddMemo = useCallback(() => store.addMemo(), [store]);
  return (
    <div>
      {store.memos.map((item) => (
        <Memo key={item.id} />
      ))}

      <AddIcon
        sx={{
          float: 'right',
          backgroundColor: '#e4e4e4',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '30px',
          border: '1px solid black',
        }}
        onClick={AddMemo}
      />
    </div>
  );
}

export default observer(App);
