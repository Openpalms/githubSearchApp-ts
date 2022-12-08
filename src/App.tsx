import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Favourites from './pages/Favourites';
import Navigation from './components/Navigation';
import { store } from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fav" element={<Favourites />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
