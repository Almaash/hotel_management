
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import { useParams, useNavigate, Link} from 'react-router-dom';



const AccommodationEdit = () => {


  const {id}=useParams()

  const[values,setValues] = useState({
    room_title: '',
    room_desc: '',
    room_price: '',
    review: '',
    image: '',
  })
  
  const[room_title,setRoom_title] = useState('')
  const[room_desc,setRoom_desc] = useState('')
  const[room_price,setRoom_price] = useState('')
  const[review,setReview] = useState('')
  const[image,setImage] = useState('')



  useEffect(()=>{

    axios
    .get('http://localhost:8002/singledataaccommodation/'+id)
    .then(res=> {
      setValues({...values,
        room_title: res.data.room_title,
        room_desc: res.data.room_desc,
        room_price: res.data.room_price,
        review: res.data.review,
        image: res.data.image,
      
        
      })
    })
    .catch(error=>console.log(error));
    
    },[]);
  

  const Navigate = useNavigate()

  const handleSubmit = (event) =>{
    event.preventDefault()

    const formData = new FormData()
    formData.append('room_title',room_title)
    formData.append('room_desc',room_desc)
    formData.append('room_price',room_price)
    formData.append('review',review)
    formData.append('image',image)

    axios.put('http://localhost:8002/updateaccommodation/'+id,
    
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
                    <h1>Accommodation Edit</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Accommodation Edit</li>
                    </ol>
                </div>
                </div>
            </div>
        </section>

    
        <section className="content">
                
                    
                <div class="card" style={{width:"700px",margin:"0 auto"}}>
                        <div class="card-body">
                            
                            <h2>Accommodation Edit</h2> <br />
                            <form onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Room Title</label>
                                <input type="text" class="form-control"  placeholder={values.room_title} onChange={e => setRoom_title(e.target.value)}  />
                                </div>
                                
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Room Description</label>
                                <input type="text" class="form-control" placeholder={values.room_desc}  onChange={e => setRoom_desc(e.target.value)}/>
                                </div>
                                
                            </div>
                            
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Previous Image</label>
                                <td><img src={'http://localhost:8002/'+values.image} style={{width:'150px',marginLeft:'100px'}}/></td>
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">New Image</label>
                                <input type="file" class="form-control"  onChange={(e) => setImage(e.target.files[0])} style={{height:'150px'}}/>
                                </div>
                                
                            </div>
                            <br />
                            <div class="row">
                                <div class="col">
                                <label for="formGroupExampleInput">Room Price</label>
                                <input type="text" class="form-control"   placeholder={values.room_price} onChange={e => setRoom_price(e.target.value)} />
                                </div>
                                <div class="col">
                                <label for="formGroupExampleInput">Room Review</label>
                                <input type="text" class="form-control"    placeholder={values.review} onChange = {e => setReview(e.target.value)} />
                                </div>
                                
                            </div>
                                <br /> <br /> <br />
                                

                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                        <Link to={"/accommodation"} className="btn btn-secondary">Cancel</Link>
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

export default AccommodationEdit
