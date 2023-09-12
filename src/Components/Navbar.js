import React from 'react'
import logo1 from '../Images/user2-160x160.jpg'
import logo2 from '../Images/AdminLTELogo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>



<aside className="main-sidebar sidebar-dark-primary elevation-4">
   
   <Link to="/index" className="brand-link">
     <img src={logo2} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
     <span className="brand-text font-weight-light">Admin Panel Ecorik</span>
   </Link>

   
   <div className="sidebar">

     <div className="user-panel mt-3 pb-3 mb-3 d-flex">
       <div className="image">
         <img src={logo1} className="img-circle elevation-2" alt="User Image"/>
       </div>
       <div className="info">
         <a href="#" className="d-block">EcoRik</a>
       </div>
     </div>

     <nav className="mt-2">
       <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
         <li className="nav-item ">
           <Link to="/index" className="nav-link">
             <i className="nav-icon fas fa-tachometer-alt"></i>
             <p>
               Dashboard
             </p>
           </Link>
           
        
         </li>

         <li className="nav-item">
           <Link to="/admin" className="nav-link">
             <i className="nav-icon fas fa-table"></i>
             <p>
               Admin
             </p>
           </Link>
          
         </li>

         <li className="nav-item">
           <Link to="/table" className="nav-link">
             <i className="nav-icon fas fa-table"></i>
             <p>
               Tables
             </p>
           </Link>
          
         </li>
         <li className="nav-item">
           <Link to="/accommodation" className="nav-link">
             <i className="nav-icon fas fa-table"></i>
             <p>
             Accommodation
             </p>
           </Link>
          
         </li>
         <li className="nav-item">
           <Link to="/bookingtable" className="nav-link">
             <i className="nav-icon fas fa-table"></i>
             <p>
             Booking Table
             </p>
           </Link>
          
         </li>
         <li className="nav-item">
           <Link to="/contact" className="nav-link">
             <i className="nav-icon fas fa-table"></i>
             <p>
             Contact
             </p>
           </Link>
          
         </li>


        <li>

        <p>
          <a className="btn w-100 text-left " data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">&nbsp;&nbsp;&nbsp;
          <i className="nav-icon fas fa-book"></i> &nbsp;
            Pages
            <i className="fas fa-angle-left right float-right mt-100"></i>
          </a>
          
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card bg-secondary card-body">
          <Link className="dropdown-item" to="/projectadd">Project Add</Link>
          <Link className="dropdown-item" to="/projectedit">Project Edit</Link>
          <Link className="dropdown-item" to="/accommodationadd">Accommodation Add</Link>
          <Link className="dropdown-item" to="/accommodationedit">Accommodation Edit</Link>
          {/* <Link className="dropdown-item" to="/projectdetail">Project Detail</Link> */}
        </div>
          </div>
        

        </li>
         
       </ul>
     </nav>
     
   </div>
   
 </aside>



    </>
  )
}

export default Navbar
