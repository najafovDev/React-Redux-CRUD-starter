import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux'
import Users from './components/Users';

function App() {
  return (
    <div className="App">
        <Provider store = {store}>
            <Users/>
        </Provider>
    </div>
  );
}

export default App;
