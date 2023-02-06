import React from 'react'
import "./Students.css";
import Table from 'react-bootstrap/Table';
import Layout from '../Layout/Layout';

const Students = () => {
  return (
    <Layout>
    <div className='table'>
    <div className=''>
          <h5>STUDENTS</h5>
    <Table className='tablecontent' striped>
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button>view</button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><button>view</button></td>
        </tr>
      
      </tbody>
    </Table>
    </div>
    </div>
    </Layout>
  )
}

export default Students
