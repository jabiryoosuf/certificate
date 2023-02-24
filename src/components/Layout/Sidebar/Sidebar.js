import React, { useState } from 'react'
import {BsPersonCircle} from 'react-icons/bs/'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {BiCategory,BiHomeCircle} from 'react-icons/bi'
import {AiFillCaretDown } from 'react-icons/ai'
import "./Sidebar.css";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [view,setView] = useState({})
  const handlclick=(id)=>{
    setView({...view,[id]:!view[id]})
  }
  return (
    <div className='sidebarbody'>
        <div className="sidebarcontet">
        <Link to={'/dashboard'} style={{textDecoration:'none'}}><h6><span> <BiHomeCircle/></span> Dash Board </h6> </Link>
           <button onClick={()=>handlclick('student')}><span><BsPersonCircle/></span>Students<span className='downarow'><AiFillCaretDown/></span></button> 
           {view ['student'] &&  (
            <ul>
           
           <Link to={'/allstudents'} style={{textDecoration:'none'}}> <li>All Students</li> </Link>
            <Link to={'/createstudents'} style={{textDecoration:'none'}}><li>Create Student</li> </Link>
           </ul>
           )}
           
           <button onClick={()=>handlclick('course')}><span><SiHomeassistantcommunitystore/></span>Courses<span className='downarow'><AiFillCaretDown/></span></button>
           {view ['course']&&(
           <ul>
           <Link to={'/course'} style={{textDecoration:'none'}}> <li>All Courses</li></Link>
           <Link to={'/createcourse'} style={{textDecoration:'none'}} ><li>Create Courses</li></Link>
           </ul>
           )}
           <button onClick={()=>handlclick('category')}><span><BiCategory/></span>Courses Category<span className='downarow'><AiFillCaretDown/></span></button>
           {view ['category']&&(
           <ul>
           <Link to={'/Coursecategory'} style={{textDecoration:'none'}}><li>All Courses Category</li></Link>
            <Link to={'/createcoursecategory'} style={{textDecoration:'none'}}><li>Create Courses Category</li></Link>
           </ul>
           )}
        </div>
    
      
    </div>
  )
}

export default Sidebar
