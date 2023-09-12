import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'



const Tables = () => {
  

    const [reg,setReg] = useState([]);

    useEffect(()=>{

    axios
    .get('http://localhost:8002/showregister')
    .then(data=> setReg(data.data))
    .catch(error=>console.log(error));
    
    },[]);


   
    
    const deletData = async (id) => {
      
      await axios.get('http://localhost:8002/singledataregister1/'+id);
      alert("Your Data has been deleted");
      window.location.reload();
      // navigate('/');
      
    }

  return (
    <>

<div className="hold-transition sidebar-mini">
<div className="wrapper">
  
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
      </li>
     
    </ul>

  </nav>

  <Navbar/>
 

  
  <div className="content-wrapper">
  
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>DataTables</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">DataTables</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

 
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
           
           

            <div className="card">
              <div className="card-header">
                <h3 className="card-title">DataTable with default features</h3>
              </div>
              
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>State</th>
                    <th>Language</th>
                    <th>Email</th>
                    <th>Phone no</th>
                    <th>Password</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  
                  <tbody>
                    
                    {reg.map((cust,index) => { 
               
                     return (
                            <tr>
                              <td key={index}>{index+1}</td>
                              <td>{cust.first_name}</td>
                              <td>{cust.last_name}</td>
                              <td>{cust.state}</td>
                              <td>{cust.language}</td>
                              <td>{cust.email}</td>
                              <td>{cust.phone_no}</td>
                              <td>{cust.password}</td>
                              <td>{cust.date}</td>
                              <td>
                              <Link to={`edituser/${cust.id}`} className="btn btn-primary">Edit</Link>
                              
                              <button type="button" className="btn btn-danger" onClick={ e => deletData(cust.id) }>Delet</button>

                              </td>
                            </tr>
                      )})}
                  
                  </tbody>
                  
                </table>
              </div>
              
            </div>
          </div>

        </div>

      </div>
   
    </section>
    
  </div>
 
  <footer className="main-footer">
   
  </footer>


  <aside className="control-sidebar control-sidebar-dark">
   
  </aside>

</div>



<script src="../../plugins/jquery/jquery.min.js"></script>

<script src="../../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

<script src="../../plugins/datatables/jquery.dataTables.min.js"></script>
<script src="../../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="../../plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="../../plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="../../plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="../../plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="../../plugins/jszip/jszip.min.js"></script>
<script src="../../plugins/pdfmake/pdfmake.min.js"></script>
<script src="../../plugins/pdfmake/vfs_fonts.js"></script>
<script src="../../plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="../../plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="../../plugins/datatables-buttons/js/buttons.colVis.min.js"></script>

<script src="../../dist/js/adminlte.min.js"></script>

<script src="../../dist/js/demo.js"></script>



</div>

    </>
  )
}

export default Tables
