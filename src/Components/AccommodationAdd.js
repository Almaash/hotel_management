import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const AccommodationAdd = () => {

  

  const[room_title,setRoom_title] = useState('')
  const[room_desc,setRoom_desc] = useState('')
  const[room_price,setRoom_price] = useState('')
  const[review,setReview] = useState('')
  const[image,setImage] = useState('')

  const Navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()

    const formData = new FormData()
    formData.append('room_title',room_title)
    formData.append('room_desc',room_desc)
    formData.append('room_price',room_price)
    formData.append('review',review)
    formData.append('image',image)

    axios.post('http://localhost:8002/accommodation/',
    
        formData,
        {
            headers: {'Authorization': localStorage.getItem('token')}
        }
    
    )

    .then(res=> {
        console.log(res);
        Navigate('/accommodation')
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
            <h1>Add Accommodation</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Add Accommodation</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    
    <section className="content">
                
                    
                <div class="card" style={{width:"700px",margin:"0 auto"}}>
                        <div class="card-body">
                            
                            <h2>Add Accommodation</h2> <br />
                            <form onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Room Name</label>
                                <input type="text" class="form-control" placeholder="Enter Room name" onChange={e => setRoom_title(e.target.value)}  />
                                </div>
                                
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Room Image</label>
                                <input type="file" class="form-control" placeholder="Select Room Image"  onChange={(e) => setImage(e.target.files[0])}/>
                                </div>
                               
                            </div>
                            
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Room Description</label>
                                <input type="text" class="form-control" placeholder="Enter Room Description"  onChange={e => setRoom_desc(e.target.value)}/>
                                </div>
                                
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Room Price</label>
                                <input type="text" class="form-control"   placeholder="Enter Room Price" onChange={e => setRoom_price(e.target.value)} />
                                </div>
                                
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Review</label>
                                <input type="text" class="form-control"    placeholder="Enter Review" onChange = {e => setReview(e.target.value)} />
                                </div>
                                
                            </div>
                                <br /> <br />
                                

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

export default AccommodationAdd
