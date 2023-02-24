import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import "./CreateCourse.css";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { updatecourseApi } from "../../store/courseSlice";
import { map } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { coursecategoryApi } from "../../store/coursecategorySlice";

const UpdateCourse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [course, setCourse] = useState({});
   
  const { allcategory, viewcourse } = useSelector((state) => ({
    viewcourse: state.course.viewcourse,
    allcategory: state.category.allcategory,
  }));
  useEffect(()=>{
    setCourse(viewcourse);
  },[])

  useEffect(() => {
    dispatch(coursecategoryApi())
  },[]);
  
console.log(viewcourse);
  console.log(allcategory);
  const res = allcategory.results;

  
  const handle = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };
  const courseId = params.id;
  const handleupdatecourse = (e) => {
    e.preventDefault();
    dispatch(updatecourseApi({ course, navigate, courseId }));
  };

  // const { viewcourse } = useSelector((state)=>({
  //   viewcourse:state.course.viewcourse
  return (
    <Layout>
      <div className="course-name">
        <h5>UPDATE COURSE</h5>
        <div className="create-course">
          <div className="inputinner">
            <Form className="form" onSubmit={handleupdatecourse}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Course Name :</Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  name="course_name"
                  value={course.course_name}
                  type="text"
                  placeholder="Enter course"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Duration :</Form.Label>
                <Form.Control
                  onChange={(e) => handle(e)}
                  name="duration"
                  value={course.duration}
                  type="number"
                  placeholder="Enter duration"
                />
              </Form.Group>
              <label for="Course"> Course Category :</label>

              <select  id="Course" name="course_category" onChange={(e)=> handle(e)} >
                {/* <option value="volvo">Select a Course Category... </option> */}
                {map(res, (item) => (
                  <option value={item.id}>{item.course_category_name}</option>
                ))}
              </select>

              <div className="btnouter1">
            <div className="btninner1">
              <div className="button">
                <div>
                  <Button variant="warning" type="submit">
                    Back
                  </Button>
                </div>
                <div>
                  <Button
                     
                    className="primary"
                    type="submit"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </div>
          </div>
            </Form>
          </div>
      
        </div>
      </div>
    </Layout>
  );
};

export default UpdateCourse;
