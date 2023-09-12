import React from 'react';
import Navbar from '../Components/Navbar'
import user1 from '../Images/user1.jpg'
import user3 from '../Images/user3.jpg'
import user4 from '../Images/user4.jpg'
import user5 from '../Images/user5.jpg'
import user6 from '../Images/user6.jpg'
import user7 from '../Images/user7.jpg'
import user8 from '../Images/user8.jpg'

const Projects = () => {
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
            <h1>Projects</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Projects</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="content">

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Projects</h3>

          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus"></i>
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <table className="table table-striped projects">
              <thead>
                  <tr>
                      <th style={{width: '1%'}}>
                          #
                      </th>
                      <th style={{width: '20%'}}>
                          Project Name
                      </th>
                      <th style={{width: '15%'}}>
                          Project handler
                      </th>
                      <th>
                          Project Progress
                      </th>
                      <th style={{width: '8%'}} className="text-center">
                          Status
                      </th>
                      <th style={{width: '30%'}} >
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user1 }/>
                              </li>
                             
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: '57%'}}>
                              </div>
                          </div>
                          <small>
                              57% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm ml-25" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar " src={user8 }/>
                              </li>
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="47" aria-valuemin="0" aria-valuemax="100" style={{width: '47%'}}>
                              </div>
                          </div>
                          <small>
                              47% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user3 }/>
                              </li>
                             
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: '77%'}}>
                              </div>
                          </div>
                          <small>
                              77% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user4 }/>
                              </li>
                             
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                              </div>
                          </div>
                          <small>
                              60% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user5 }/>
                              </li>
                              
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style={{width: '12%'}}>
                              </div>
                          </div>
                          <small>
                              12% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user6 }/>
                              </li>
                              
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" style={{width: '35%'}}>
                              </div>
                          </div>
                          <small>
                              35% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user7 }/>
                              </li>
                             
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="87" aria-valuemin="0" aria-valuemax="100" style={{width: '87%'}}>
                              </div>
                          </div>
                          <small>
                              87% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user8 }/>
                              </li>
                              
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: '77%'}}>
                              </div>
                          </div>
                          <small>
                              77% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                              AdminLTE v3
                          </a>
                          <br/>
                          <small>
                              Created 01.01.2019
                          </small>
                      </td>
                      <td>
                          <ul className="list-inline">
                              <li className="list-inline-item">
                                  <img alt="Avatar" className="table-avatar" src={user1 }/>
                              </li>
                             
                          </ul>
                      </td>
                      <td className="project_progress">
                          <div className="progress progress-sm">
                              <div className="progress-bar bg-green" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style={{width: '77%'}}>
                              </div>
                          </div>
                          <small>
                              77% Complete
                          </small>
                      </td>
                      <td className="project-state">
                          <span className="badge badge-success">Success</span>
                      </td>
                      <td className="project-actions text-right">
                          <a className="btn btn-primary btn-sm" href="#">
                              <i className="fas fa-folder">
                              </i>
                              View
                          </a> &nbsp;
                          <a className="btn btn-info btn-sm" href="#">
                              <i className="fas fa-pencil-alt">
                              </i>
                              Edit
                          </a> &nbsp;
                          <a className="btn btn-danger btn-sm" href="#">
                              <i className="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
      </div>

    </section>
  </div>

  <footer className="main-footer">
   
  </footer>

  <aside className="control-sidebar control-sidebar-dark">
  </aside>
 
</div>

</div>


    </>
  )
}

export default Projects
