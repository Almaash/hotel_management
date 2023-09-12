import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const ProjectAdd = () => {

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    state: '',
    language: '',
    email: '',
    phone_no: '',
    password: ''
  })

  const Navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post('http://localhost:8002/register/',values)
    .then(res=> {
        console.log(res);
        Navigate('/table')
    })
    .catch(error=>console.log(error));

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
   
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Project Add</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Project Add</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    
    <section className="content">
                
                    
                <div class="card" style={{width:"700px",margin:"0 auto"}}>
                        <div class="card-body">
                            
                            <h2>Add Information</h2> <br />
                            <form onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your First Name</label>
                                <input type="text" class="form-control" placeholder="Enter first name" onChange={e => setValues({...values,first_name:e.target.value})}  />
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">Your Last Name</label>
                                <input type="text" class="form-control"  placeholder="Enter last name"  onChange={e => setValues({...values,last_name:e.target.value})}/>
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your State</label>
                                <input type="text" class="form-control" placeholder="Enter state name"  onChange={e => setValues({...values,state:e.target.value})}/>
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">Language</label>
                                <input type="text" class="form-control"  placeholder="Enter new language"  onChange={e => setValues({...values,language:e.target.value})}/>
                                </div>
                            </div>
                            
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your Email</label>
                                <input type="text" class="form-control" placeholder="Enter new email"  onChange={e => setValues({...values,email:e.target.value})}/>
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">Your Phone </label>
                                <input type="text" class="form-control"  placeholder="Enter new phone"  onChange={e => setValues({...values,phone_no:e.target.value})}/>
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your Password</label>
                                <input type="text" class="form-control"   placeholder="Enter new password" onChange={e => setValues({...values,password:e.target.value})} />
                                </div>
                                
                            </div>
                                <br /> <br /> <br />
                                

                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                        <Link to={"/table"} className="btn btn-secondary">Cancel</Link>
                                        <input type="submit" value="Add" className="btn btn-success float-right"/>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                    <br /> <br />


                
                
        </section>
    
  </div>

  <footer className="main-footer ">
    
    </footer>
</div>

</div>

    </>
  )
}

export default ProjectAdd
