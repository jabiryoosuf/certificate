import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import { singleviewcourseApi ,deletecourseApi} from '../../store/courseSlice';

import "./CreateCourse.css";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";

const CourseView = () => {

  const params=useParams();
  const dispatch= useDispatch()
  const { viewcourse } = useSelector((state)=>({
    viewcourse:state.course.viewcourse

  }))
  console.log(viewcourse);



 const courseId = params.id;
 console.log(courseId)

  useEffect(()=>{
    dispatch(singleviewcourseApi({courseId}))
  },[])
  
  const handleDelete=(e)=>{
    dispatch(deletecourseApi(courseId))
  }

  return (
    <Layout>
      <div className="courseview">
        <h5>COURSE DETAILS</h5>
        <div className="coursedetails">
          <div className="inputinner">

            <Form className="form">
      
              <Form.Group style={{display:"flex"}} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight:"bold"}}>Course Name :</Form.Label>
                <p>{viewcourse.course_name}</p>
                
              </Form.Group>

              <Form.Group style={{display:"flex"}} className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontWeight:"bold"}}>Duration :</Form.Label>
                <p>{viewcourse.duration}</p>
              </Form.Group >
              <label for="Course" style={{fontWeight:"bold" ,display:"flex"}}> Course Category :  <p style={{fontWeight:"400"}}>{viewcourse.course_category}</p></label>
           
            </Form>
          </div>
          <div className="btnouter1">
            <div className="btninner1">
              <div className="button">
                <div>
                  <Button onClick={handleDelete} variant="warning" type="submit">
                    Delete
                  </Button>
                </div>
                <div>
                  <Link to={`/updatecourse/${courseId}`}>
                  <Button className="primary" type="submit">
                    Update
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseView;
