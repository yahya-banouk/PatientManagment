import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8080/api/patients/{patientId}",
      formData
    );
    if (response) {
      console.log(" success profile update");
    }
  };
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    cin: "",
    dateDeNaissance: "",
    email: "",

    sexe: "",
    tel: "",
    password: "",
  });
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };

  return (
    <div className="mt-10 sm:mt-0 py-3">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Profile
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
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700"
                    >
                      nom
                    </label>
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="prenom"
                      className="block text-sm font-medium text-gray-700"
                    >
                      prenom
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black"
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="cin"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CIN
                    </label>
                    <input
                      type="text"
                      name="cin"
                      id="cin"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                      onChange={onChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="date_naissance"
                      className="block text-sm font-medium text-gray-700"
                    >
                      date de naissance
                    </label>
                    <input
                      type="text"
                      name="date_naissance"
                      id="date_naissance"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black"
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                      onChange={onChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Sexe
                      </label>
                      <input
                        type="text"
                        name="sexe"
                        id="sexe"
                        className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black "
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mot de Passe
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="mt-1 border-b outline-none p-1 text-sm block w-full shadow-sm border-b-black"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="tel"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Numero de Telephone
                    </label>
                    <input
                      type="text"
                      name="tel"
                      id="tel"
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
                  Save Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
