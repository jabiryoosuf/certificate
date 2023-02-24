import React, { useEffect } from "react";
import "./Students.css";
import Table from "react-bootstrap/Table";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { StudentsApi } from "../../store/studentSlice";
import { map } from "lodash";
import { Link, useParams } from "react-router-dom";

const Students = () => {
  const dispatch = useDispatch();
  const { allStudents } = useSelector((state) => ({
    allStudents: state.students.allStudents,
  }));

  console.log(allStudents);

  useEffect(() => {
    dispatch(StudentsApi());
  }, []);

  const all = allStudents.results;
  console.log(all);

  return (
    <Layout>
      <div className="table">
        <div className="">
          <h5>STUDENTS</h5>
          <Table className="tablecontent" striped>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Joining Date</th>
                <th>DOB</th>
                <th>Designation</th>
                <th>Photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {map(all, (item) => (
                <tr>
                  <td></td>
                  <td>{item.full_name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.start_date}</td>
                  <td>{item.dob}</td>
                  <td>{item.designation}</td>
                  <td></td>
                  <td>
                    <Link to={`/studentview/${item.id}`}>
                      <button>view</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Layout>
  );
};

export default Students;
