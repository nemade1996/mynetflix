import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './utils/appStore';
import Browse from './Components/Browse';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Body/>
      </Provider>
    </>
  );
}

export default App;
