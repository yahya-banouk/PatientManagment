import axios from "axios";
import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { doctors } from "../data";

const MyDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const getDoctors = async () => {
      const response = await axios.get("http://localhost:8080/api/v1/doctors");
      if (response.data) {
        setDoctors(response.data);
        console.log("Response : ", response);
      } else {
        console.log("get Doctors error");
      }
    };
    getDoctors();
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-3">
      {doctors.map((doctor) => (
        <>
          <DoctorCard doctor={doctor} key={doctor?.email} />
        </>
      ))}
    </div>
  );
};
export default MyDoctors;
