import axios from "axios";

const DOCTOR_API_BASE_URL ="http://localhost:8080/api/v1/doctors"
class DoctorService {

    getDoctors(){
        return axios.get(DOCTOR_API_BASE_URL);

    }
    addDoctor(doctor){
        return axios.post(DOCTOR_API_BASE_URL, doctor);
    }
}

export default new DoctorService()