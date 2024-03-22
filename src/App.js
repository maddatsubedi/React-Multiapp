import './App.css';
import Navbar from './components/Navbar/Navbar';
import Calculator from './components/Calculator/Calculator'
import ToDoApp from './components/To-Do-App/ToDoApp'
import Notification from './components/Notification/Notification';
import { Routes, Route } from "react-router-dom"
import { NotificationsProvider } from './components/Notification/NotificationsContext';

function App() {
  return (
    <NotificationsProvider>
      <>
        <div className="page">
          <Navbar />
          <Notification />
          <main className="main">
            <Routes>
              <Route path='/' element={<ToDoApp />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/todoapp' element={<ToDoApp />} />
            </Routes>
          </main>
        </div>
      </>
    </NotificationsProvider>
  );
}

export default App;