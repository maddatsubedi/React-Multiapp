import './App.css';
import Navbar from './components/Navbar/Navbar';
import Calculator from './components/Calculator/Calculator'
import ToDoApp from './components/To-Do-App/ToDoApp'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className="page">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path='/' element={<ToDoApp />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/todoapp' element={<ToDoApp />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;