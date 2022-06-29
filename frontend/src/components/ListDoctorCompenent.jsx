import React, { Component } from 'react';
import DoctorService from '../services/DoctorService';
import '../App.css'
class ListDoctorCompenent extends Component {
  constructor(props){
    super(props)
    this.state={
        doctors :[]
    }
    this.addDoctor = this.addDoctor.bind(this);
  }
  componentDidMount(){
    DoctorService.getDoctors().then((res)=>{

        this.setState({doctors: res.data});
    }
    );
  }
  addDoctor(){
    this.props.history.push('/add-doctor');
  }
    render() {
        return (
            <div>
                <h2 className='text-center'>Doctors List</h2>
                
                    <button className='btn btn-outline-primary mb-2'><a  href="/add-doctor" >Add Doctor</a></button>
                
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Email</th>
                                <th>Tel</th>
                                <th>Cin</th>
                                <th>Password</th>
                                <th>Specialite</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.doctors.map(
                                    doctor =>
                                    <tr key={doctor.email}>
                                        <td>{doctor.nom}</td>
                                        <td>{doctor.prenom}</td>
                                        <td>{doctor.email}</td>
                                        <td>{doctor.tel}</td>
                                        <td>{doctor.password}</td>
                                        <td>{doctor.cin}</td>
                                        <td>{doctor.specialite}</td>

                                    </tr>
                                )
                            }


                        </tbody>


                    </table>
                </div>


 

            </div>
        );
    }
}

export default ListDoctorCompenent;