import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { SearchProvider } from './context/SearchContext.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';

ReactDOM.createRoot(
  document.getElementById('root'),
).render(
  <BrowserRouter>
    <FavoritesProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </FavoritesProvider>
  </BrowserRouter>,
);
