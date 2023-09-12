
import './App.css';
import ForgotPassword from './Components/ForgotPassword';
import Index from './Components/Index';
import Login from './Components/Login';
import OtpPage from './Components/OtpPage';
import RecoverPassword from './Components/RecoverPassword';
import Admin from './Components/Admin'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Tables from './Components/Tables';
import ProjectAdd from './Components/ProjectAdd';
import ProjectEdit from './Components/ProjectEdit';
import ProjectDetail from './Components/ProjectDetail';
import Projects from './Components/Projects';
import Accommodation from './Components/Accommodation';
import AccommodationEdit from './Components/AccommodationEdit';
import AccommodationAdd from './Components/AccommodationAdd';
import Contact from './Components/Contact';
import BookingTable from './Components/BookingTable';



function App() {
  return (
   <>
   
   <Router>

      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/otppage" element={<OtpPage/>}/>
          <Route path="/recoverpassword" element={<RecoverPassword/>}/>
      
    
          <Route path="/index" element={<Index/>}/>
          <Route path="/table" element={<Tables/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/accommodation" element={<Accommodation/>}/>
          <Route path="/bookingtable" element={<BookingTable/>}/>
          <Route path="/accommodation/accommodationedit/:id" element={<AccommodationEdit/>}/>
          <Route path="/projectadd" element={<ProjectAdd/>}/>
          <Route path="/accommodationadd" element={<AccommodationAdd/>}/>
          <Route path="/accommodationedit" element={<AccommodationEdit/>}/>
          <Route path="/projectedit" element={<ProjectEdit/>}/>
          <Route path="/projectdetail" element={<ProjectDetail/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="table/edituser/:id" element={<ProjectEdit/>}/>
            
      </Routes>
    
    </Router>

   </>
  );
}

export default App;
