import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import TRegistration from './Pages/TeacherRegistration/TRegistration';
import NeedTeacher from './Pages/NeedTeacher/NeedTeacher';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teacherReg" element={<TRegistration />} />
        <Route path="/needTeacher" element={<NeedTeacher />} />
      </Routes>

    </div>
  );
}

export default App;
