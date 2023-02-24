import React, { useEffect } from "react";
import "../components/certificate.css";
import { useDispatch, useSelector } from "react-redux";
import { viewstudentApi } from "../store/studentSlice";
import { useParams } from "react-router-dom";

function Certificate() {
  const dispatch = useDispatch();

  const params = useParams();
  const { viewStudent } = useSelector((state) => ({
    viewStudent: state.students.viewStudent,
  }));
  console.log("viewStudent", viewStudent);
  const studentid = params.id;
  useEffect(() => {
    dispatch(viewstudentApi({ studentid }));
  }, []);
  return (
    <div className="certificate">
      <div className="certificate-content">
        <h1>CERTIFICATE</h1>
        <h3>Of Experience</h3>
        <h4>this certify that</h4>
        <h5>{viewStudent?.full_name}</h5>
        <p>
          was employed at Xanthrone e-solutions as a web application developer,
          from{" "}
          <span style={{ fontWeight: "bold" }}>{viewStudent?.start_date}</span>{" "}
          to <span style={{ fontWeight: "bold" }}>{viewStudent?.end_date}</span>{" "}
          , while showcasing aprofessional commandable work attitude throughout
          the specified time period. We wish all the best in his/her future
          endeavors
        </p>
      <div>
        <h6>CEO</h6>
      </div>
      </div>
    </div>
  );
}

export default Certificate;
