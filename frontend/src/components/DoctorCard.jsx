const DoctorCard = ({ doctor }) => {
  return (
    <div className="w-96 max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-slate-200 shadow-xl">
      <div className="h-24 bg-gray-700"></div>
      <div className="-mt-20 flex justify-center">
        <img
          className="h-32 rounded-full"
          alt={doctor?.prenom + " " + doctor?.nom}
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
        />
      </div>
      <div className=" mb-1 px-3 text-center text-lg">
        {doctor?.prenom + " " + doctor?.nom}
      </div>
      <div className="mb-5 px-3 text-center ">Title</div>
      <blockquote>
        <p className="mx-2 mb-7 text-center text-base">{doctor?.specialite}</p>
      </blockquote>
    </div>
  );
};
export default DoctorCard;
