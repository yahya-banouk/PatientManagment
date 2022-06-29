import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const EditSuivi = () => {
  let { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("rien ");
    const response = await axios.post(
      "http://localhost:8080/api/suivis/{suivitId}",
      formData
    );
    if (response) {
      console.log(" success profile update");
    }
  };
  const [formData, setFormData] = useState({
    titre: "",
    sommeil: "",
    stress: "",
    fatigue: "",
    tristesse: "",
  });
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };
  useEffect(() => {
    async function getSuivi() {
      const response = await axios.get("endp/id");
      if (response.data) {
        setFormData(response.data);
      }
    }
    getSuivi();
  }, []);
  return (
    <div className="mt-10 sm:mt-0 py-3">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Add new Suivi
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2 rounded-md">
          <form onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="titre"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Titre
                    </label>
                    <input
                      type="text"
                      name="titre"
                      id="titre"
                      autoComplete="given-name"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="sommeil"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Sommeil
                    </label>
                    <input
                      type="text"
                      name="sommeil"
                      id="sommeil"
                      autoComplete="family-name"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black"
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="stress"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Stress
                    </label>
                    <input
                      type="text"
                      name="stress"
                      id="stress"
                      autoComplete="given-name"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="fatigue"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Fatigue
                    </label>
                    <input
                      type="text"
                      name="fatigue"
                      id="fatigue"
                      autoComplete="email"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                      onChange={onChange}
                    />
                  </div>

                  {/* <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="joie"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Joie
                    </label>
                    <input
                      type="text"
                      name="joie"
                      id="joie"
                      autoComplete="family-name"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                      onChange={onChange}
                    />
                  </div> */}

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="tristesse"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Tristesse
                    </label>
                    <input
                      type="text"
                      name="tristesse"
                      id="tristesse"
                      autoComplete="address-level2"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black"
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditSuivi;
