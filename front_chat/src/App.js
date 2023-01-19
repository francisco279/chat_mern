import './App.css';
import { Route } from 'react-router-dom';
import ChatPage  from './Pages/ChatPage';
import HomePage  from './Pages/HomePage';

function App() {
  return (
    <>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/chats"  component={ChatPage}></Route>
    </>
  );
}

export default App;
