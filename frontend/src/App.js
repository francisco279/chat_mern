import { Route, Routes } from 'react-router-dom';
import './App.css';
import chatPage from './pages/chatPage';
import homePage from './pages/homePage';

function App() {
  return (
    <Routes>
      <Route path='/' component={homePage} exact/>
      <Route path='/chat' component={chatPage} />
    </Routes>
    
    );
}

export default App;
