
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import { useParams, useNavigate, Link} from 'react-router-dom';



const ProjectEdit = () => {


  const {id}=useParams()
  const navigate = useNavigate()

  const [reg,setReg] = useState([]);
  
  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    state: '',
    language: '',
    email: '',
    phone_no: '',
    password: ''
  })
  

  useEffect(()=>{

  axios
  .get('http://localhost:8002/singledataregister/'+id)
  .then(res=> {
    setValues({
      ...values,
      first_name: res.data.first_name,
      last_name: res.data.last_name,
      state: res.data.state,
      language: res.data.language,
      email: res.data.email,
      phone_no: res.data.phone_no,
      password: res.data.password
    })
  })
  .catch(error=>console.log(error));
  
  },[]);


  const handleSubmit = (e) => {

    axios.put('http://localhost:8002/updatedataregister/'+id,values)
    .then(data=> setReg(data.data))
    .catch(error=>console.log(error));
    navigate('/table')
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
                    <h1>Project Edit</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active"> Edit Information</li>
                    </ol>
                </div>
                </div>
            </div>
        </section>

    
        <section className="content">
                
                    
                <div class="card" style={{width:"700px",margin:"0 auto"}}>
                        <div class="card-body">
                            
                            <h2>Edit Information</h2> <br />
                            <form onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your First Name</label>
                                <input type="text" class="form-control"  value={values.first_name} onChange={e => setValues({...values,first_name:e.target.value})}   />
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">Your Last Name</label>
                                <input type="text" class="form-control" value={values.last_name} onChange={e => setValues({...values,last_name:e.target.value})}  />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your State</label>
                                <input type="text" class="form-control" value={values.state} onChange={e => setValues({...values,state:e.target.value})}  />
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">Language</label>
                                <input type="text" class="form-control" value={values.language} onChange={e => setValues({...values,language:e.target.value})}  />
                                </div>
                            </div>
                            
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your Email</label>
                                <input type="text" class="form-control" value={values.email} onChange={e => setValues({...values,email:e.target.value})} />
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">Your Phone </label>
                                <input type="text" class="form-control" value={values.phone_no}  onChange={e => setValues({...values,phone_no:e.target.value})}  />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Your Password</label>
                                <input type="text" class="form-control" value={values.password}  onChange={e => setValues({...values,password:e.target.value})}  />
                                </div>
                                
                            </div>
                                <br /> <br /> <br />
                                

                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                        <Link to={"/table"} className="btn btn-secondary">Cancel</Link>
                                        <input type="submit" value="Save Changes" className="btn btn-success float-right"/>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                    <br /> <br />


                
                
        </section>
    
    </div>


 

  
  <aside className="control-sidebar control-sidebar-dark">

  </aside>

  <footer className="main-footer ">
    
  </footer>
  
</div>

</div>




    </>
  )
}

export default ProjectEdit
