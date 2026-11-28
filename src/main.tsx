import {createRoot} from 'react-dom/client';
import {registerSW} from 'virtual:pwa-register';
import App from './App.tsx';
import './index.css';

if (import.meta.env.PROD || import.meta.hot) {
  registerSW({immediate: true});
}

createRoot(document.getElementById('root')!).render(<App />);
