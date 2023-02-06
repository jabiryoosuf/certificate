import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './components/DashBoard/DashBoard';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import Students from './components/Students/Students';
import UpdateStudent from './components/Students/UpdateStudent';
import CreateStudent from './components/Students/CreateStudent';
import StudentView from './components/Students/StudentView';
import Course from './components/Course/Course';
import CreateCourse from './components/Course/CreateCourse';
import UpdateCourse from './components/Course/UpdateCourse';
import CreateCourseCategory from './components/Course/CreateCourseCategory';
import UpdateCourseCategory from './components/Course/UpdateCourseCategory';
import CourseCategory from './components/Course/CourseCategory';
import Layout from './components/Layout/Layout';
import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/allstudents' element={<Students/>}/>
        <Route path='/updatestudents' element={<UpdateStudent/>}/>
        <Route path='/createstudents' element={ <CreateStudent/>}/>
        <Route path='/studentview' element={ <StudentView/>}/>
        <Route path='/course' element={ <Course/>}/>
        <Route path='/createcourse' element={ <CreateCourse/>}/>
        <Route path='/updatecourse' element={ <UpdateCourse/>}/>
        <Route path='/createcoursecategory' element={ <CreateCourseCategory/> }/>
        <Route path='/updatecoursecategory' element={  <UpdateCourseCategory/>}/>
        <Route path='/Coursecategory' element={  <CourseCategory/>}/>
      </Routes>
     </Router>
      
   
    </div>
  );
}

export default App;
