import ReactDOM from 'react-dom/client';
import App from 'app/index';
import { store } from './shared/model/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}><App /></Provider>
);


