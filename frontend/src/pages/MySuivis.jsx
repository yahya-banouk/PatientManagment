import SuiviList from "../components/SuiviList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const MySuivis = () => {
  const [suivis, setSuivis] = useState([]);
  useEffect(() => {
    const getSuivis = async () => {
      const response = await axios.get("http://localhost:8080/api/suivis");
      if (response.data) {
        setSuivis(/*[*/ response.data /*]*/);
        console.log("Response : ", response);
      } else {
        console.log("get suivis error");
      }
    };
    getSuivis();
  }, []);

  return (
    <div>
      <SuiviList suivis={suivis} />
    </div>
  );
};
export default MySuivis;
