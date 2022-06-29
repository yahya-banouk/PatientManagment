import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListDoctorCompenent from "./components/ListDoctorCompenent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import AddDoctor from "./components/AddDoctor";
import AddSuivi from "./pages/AddSuivi";
import MyDoctors from "./pages/MyDoctors";
import EditProfile from "./pages/EditProfile";
import MySuivis from "./pages/MySuivis";
import EditSuivi from "./pages/EditSuivi";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />

        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListDoctorCompenent />}></Route>
            <Route path="/doctors" element={<ListDoctorCompenent />}></Route>
            <Route path="/add-doctor" element={<AddDoctor />}></Route>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="add-suivi" element={<AddSuivi />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="my-doctors" element={<MyDoctors />} />
            <Route path="my-suivis" element={<MySuivis />} />
            <Route path="edit-suivi">
              <Route path=":id" element={<EditSuivi/>}/>
            </Route>
            
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
