import React, { useEffect } from 'react'
import './Course.css'
import "../Students/StudentView.css"
import Table from 'react-bootstrap/Table';
import {BsFillPencilFill} from "react-icons/bs"
import {MdCancel} from 'react-icons/md'
import Layout from '../Layout/Layout';
import {map} from "lodash"
import { useDispatch, useSelector } from 'react-redux';
import { coursecategoryApi } from '../../store/coursecategorySlice';

const CourseCategory = () => { 
 
 const { allcategory } = useSelector((state)=>({
  allcategory:state.category.allcategory
 }))
 console.log(allcategory);
 
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(coursecategoryApi())
  },[])
  const res = allcategory.results;
  console.log(res);
  return (
    <Layout>
    <div>
    <div className='student-course'>
     <h5>COURSE CATEGORY</h5>
     <div className='course-content'>
     <Table striped bordered hover style={{width:'100%',height:"auto"}}>
   <thead>
     <tr>
       <th>#</th>
       <th>ID</th>
       <th>Course Category Name</th>
       <th>Destination</th>
       <th>Action</th>
     </tr>
   </thead>
   <tbody>
    {map(res,(item)=>(
     <tr>
       <td></td>
       <td></td>
       <td>{item.course_category_name}</td>
       <td>{item.designation}</td>
       
       
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

export default CourseCategory
