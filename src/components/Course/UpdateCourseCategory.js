import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect,useState } from "react";
import './CreateCourse.css'
import Layout from "../Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatecoursecategoryApi } from "../../store/coursecategorySlice";

const UpdateCourseCategory = () => {

  const params=useParams();
  const dispatch= useDispatch();
  const navigate = useNavigate();

  const [category, setCategory] = useState({});

  console.log(category);
    
    const { viewcategory}=useSelector((state)=>({
      viewcategory:state.category.viewcategory,

  }))
  useEffect(()=>{
    setCategory(viewcategory)
  },[])

  // useEffect(()=>{
  //   dispatch(updatecoursecategoryApi())
  // },[])
  const handle = (e)=>{
    setCategory({
      ...category,
      [e.target.name]:e.target.value,
    })
  }
  
  const courseCategoryId = params.id;

  const handleupdatecategory=(e)=>{
    e.preventDefault();
    dispatch(updatecoursecategoryApi({category,navigate,courseCategoryId}))
  }

  return (
    <Layout>
    <div className="course-name">
    <h5>UPDATE COURSE CATEGORY</h5>
    <div className="create-course">
  <div className="inputinner">
  <Form className="form" onSubmit={handleupdatecategory}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course Category :</Form.Label>
        <Form.Control onChange={(e)=>handle(e)} name="course_category_name" value={category.course_category_name} type="text" placeholder="Enter a course Category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Designation :</Form.Label>
        <Form.Control onChange={(e)=>handle(e)} name="designation" value={category.designation} type="text" placeholder="Enter a designation" />
      </Form.Group>
      <div className="btnouter1">
      <div className="btninner1">
     <div className="button">
      <div><Button variant="warning" type="submit">
        Back
      </Button></div>
      <div>
      <Button className="primary" type="submit">
        Update
      </Button></div></div>
      
      </div>
      
      </div>
  
      </Form>
      </div>
  
  </div>
    
  </div>
  </Layout>
  )
}

export default UpdateCourseCategory
