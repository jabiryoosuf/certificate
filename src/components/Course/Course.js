import React, { useEffect } from 'react'
import './Course.css'
import "../Students/StudentView.css"
import Table from 'react-bootstrap/Table';
import {BsFillPencilFill} from "react-icons/bs"
import {MdCancel} from 'react-icons/md'
import Layout from '../Layout/Layout';
import {map} from "lodash"
import { useDispatch, useSelector } from 'react-redux';
import {courseApi } from "../../store/courseSlice";

const Course = () => {

  const dispatch = useDispatch();


  const { allcourse } = useSelector((state) =>({
   allcourse:state.course.allcourse,
  }));

  console.log(allcourse);

  useEffect(()=>{
    dispatch(courseApi())
  },[]);
  const res = allcourse.results;
  console.log(res);

  return (
    <Layout>
    <div>
       <div className='student-course'>
        <h5> COURSES</h5>
        <div className='course-content'>
        <Table striped bordered hover style={{width:'100%',height:"auto"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Course Categorys</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {map(res,(item)=>(
        <tr key={item.id}>
          <td></td>
          <td>{}</td>
          
          <td>{item.course_name}</td>
          <td>{item.duration}</td>
          <td>{item.course_category}</td>
          <td><BsFillPencilFill className='me-3'/><MdCancel/></td>
        </tr>
        ))}
      </tbody>
    </Table>
        </div>
    </div>
    </div>
    </Layout>
   
  )
}

export default Course
