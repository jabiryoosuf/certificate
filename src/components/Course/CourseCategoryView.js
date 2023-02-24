import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect } from "react";
import { singleviewcategoryApi ,deletecoursecategoryapi} from '../../store/coursecategorySlice';

import "./CreateCourse.css";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link, useNavigate } from "react-router-dom";


const  CourseCategoryView=() => {

  const params=useParams();
  const dispatch= useDispatch()
   const navigate = useNavigate(); 

  const { viewcategory } = useSelector((state)=>({
    viewcategory:state.category.viewcategory

  }))
  console.log(viewcategory);



 const courseCategoryId = params.id;
 console.log(courseCategoryId)

  useEffect(()=>{
    dispatch(singleviewcategoryApi(courseCategoryId))
  },[])
//   useEffect(()=>{
    const handleDelete=(Id)=>{
        dispatch(deletecoursecategoryapi({Id,navigate}))
      }
//   },[])
 

  return (
    <Layout>
      <div className="courseview">
        <h5>COURSE CATEGORY DETAILS</h5>
        <div className="coursedetails">
          <div className="inputinner">

            <Form className="form">
      
              <Form.Group style={{display:"flex"}} className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{fontWeight:"bold"}}>Course Name :</Form.Label>
                <p></p>
                {viewcategory.course_category_name}
                
              </Form.Group>

              <Form.Group style={{display:"flex"}} className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{fontWeight:"bold"}}>Duration :</Form.Label>
                <p></p>
                {viewcategory.designation}
              </Form.Group >
              {/* <label for="Course" style={{fontWeight:"bold" ,display:"flex"}}> Course Category :  <p style={{fontWeight:"400"}}></p></label>
              {viewcourse.course_category} */}
           
            </Form>
          </div>
          <div className="btnouter1">
            <div className="btninner1">
              <div className="button">
                <div>
                  <Button onClick={()=>handleDelete(viewcategory?.id)} variant="warning" type="submit">
                    Delete
                  </Button>
                </div>
                <div>
                  <Link to={`/updatecoursecategory/${params.id}`}>
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

export default CourseCategoryView;