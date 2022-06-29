import { Button } from 'bootstrap';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './addDoc.css'
import {BrowserRouter as Router, Route, Link, Routes,useNavigate} from 'react-router-dom';
import DoctorService from '../services/DoctorService';


export default class AddDoctor extends Component {
	
    constructor(props){
        super(props)
        this.state = {

			nom: '',
			prenom:'',
			email:'',
			tel:'',
			password:'',
			specialite:'',
			cin:''
            
        }
		this.changeNomHandler = this.changeNomHandler.bind(this);
		this.changePrenomHandler = this.changePrenomHandler.bind(this);
		this.changeEmailHandler = this.changeEmailHandler.bind(this);
		this.changeTelHandler = this.changeTelHandler.bind(this);
		this.changePasswordHandler = this.changePasswordHandler.bind(this);
		this.changeCinHandler = this.changeCinHandler.bind(this);
		this.changeSpecialiteHandler = this.changeSpecialiteHandler.bind(this);
		this.saveDoctor = this.saveDoctor.bind(this);

	}
	saveDoctor = (e) =>{
		e.preventDefault();

		let doctor = {nom:this.state.nom, 
		                prenom:this.state.prenom,
						email:this.state.email,
						password:this.state.password,
						cin:this.state.cin,
						specialite:this.state.specialite,
						tel:this.state.tel
					};
					console.log('doctor =>'+ JSON.stringify(doctor));

					DoctorService.addDoctor(doctor).then(res =>{

						
						
					});
				}
		changeNomHandler = (event)=>{
 
		this.setState({nom: event.target.value});

		}
		changePrenomHandler = (event)=>{
 
			this.setState({prenom: event.target.value});
	
			}
		changeEmailHandler = (event)=>{
 
				this.setState({email: event.target.value});
		
				}
		changePasswordHandler = (event)=>{
 
					this.setState({password: event.target.value});
			
					}

		changeSpecialiteHandler = (event)=>{
 
						this.setState({specialite: event.target.value});
				
						}
		changeTelHandler = (event)=>{
 
							this.setState({tel: event.target.value});
					
							}
		changeCinHandler = (event)=>{
 
								this.setState({cin: event.target.value});
						
								}
		
    render() {
    return (
      
        <div className="bd">
<div className="con">
<div className="title">Add Doctor</div>

	<form >
	<div className="doc-details">
	  <div className="input-box">
	    <span className="details">First name </span>
	    <input type="text" name="nom" placeholder='First name' value={this.state.nom} onChange={this.changeNomHandler}/>
	    
	    
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Last name </span>
	    <input type="text" name="prenom" placeholder='Last name' value={this.state.prenom} onChange={this.changePrenomHandler}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Email</span>
	    <input type="email" name="email" placeholder='Email' required="required" value={this.state.email} onChange={this.changeEmailHandler}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Speciality</span>
	    <input type="text" name="speciality" required="required" placeholder='Speciality' value={this.state.specialite} onChange={this.changeSpecialiteHandler}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Password</span>
	    <input type="text" name="password" required="required" placeholder='Password' value={this.state.password} onChange={this.changePasswordHandler}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">CIN</span>
	    <input type="text" name="cin" required="required" placeholder='Cin' value={this.state.cin} onChange={this.changeCinHandler}/>
	    
	  
	  </div>
	  <div className="input-box">
	    <span className="details">Phone Number</span>
	    <input type="text" name="tel" required="required" placeholder='Phone Number' value={this.state.tel} onChange={this.changeTelHandler}/>
	    
	  
	  </div>
	
	</div>
	<div className="button">
		
		<input type="submit" className="btn btn-success" onClick={this.saveDoctor}  value="save"/>
		<Link to="/" className='btn btn-outline-secondary'> Cancel </Link>

	
	
	</div>
	
</form>
	</div>
</div>

    )
  }
}
