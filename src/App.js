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
import CourseView from './components/Course/CourseView';
import CreateCourseCategory from './components/Course/CreateCourseCategory';
import UpdateCourseCategory from './components/Course/UpdateCourseCategory';
import CourseCategory from './components/Course/CourseCategory';
import CourseCategoryView from './components/Course/CourseCategoryView';
import Layout from './components/Layout/Layout';
import {
  BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
// import Certificate from './components/Certificate';
import Certificatemain from './components/Certificatemain';


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
        <Route path='/studentview/:id' element={ <StudentView/>}/>
        <Route path='/course' element={ <Course/>}/>
        <Route path='/createcourse' element={ <CreateCourse/>}/>
        <Route path='/updatecourse/:id' element={ <UpdateCourse/>}/>
        <Route path='/courseview/:id' element={ <CourseView/>}/>
        <Route path='/createcoursecategory' element={ <CreateCourseCategory/> }/>
        <Route path='/updatecoursecategory/:id' element={  <UpdateCourseCategory/>}/>
        <Route path='/coursecategoryview/:id' element={ <CourseCategoryView/>}/>
        <Route path='/Coursecategory' element={  <CourseCategory/>}/>
        <Route path='/Certificatemain/:id' element={ <Certificatemain/>}/>
      </Routes>
     </Router>
      
   
    </div>
  );
}

export default App;
