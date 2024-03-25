import './App.css';
import Navbar from './components/Navbar/Navbar';
import Calculator from './components/Calculator/Calculator'
import ToDoApp from './components/To-Do-App/ToDoApp'
import Notification from './components/Notification/Notification';
import NotificationPage from './components/NotificationPage/NotificationPage';
import { Routes, Route } from "react-router-dom"
import { NotificationProvider } from './components/Notification/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <>
        <div className="page">
          <Navbar />
          <Notification position={`topCenter`} />
          <main className="main">
            <Routes>
              <Route path='/' element={<ToDoApp />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/todoapp' element={<ToDoApp />} />
              <Route path='/notification' element={<NotificationPage />} />
            </Routes>
          </main>
        </div>
      </>
    </NotificationProvider>
  );
}

export default App;