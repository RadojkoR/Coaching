import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./styles/App.scss";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
