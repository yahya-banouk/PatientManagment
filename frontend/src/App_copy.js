import { Routes, Route, Link } from "react-router-dom";
import AddSuivi from "./pages/AddSuivi";
import Home from "./pages/Home";
import MyDoctors from "./pages/MyDoctors";

function App() {
  return (
    <main className="w-full h-full min-h-screen flex flex-col gap-8 px-20 bg-gray-200">
      <header className="w-full flex items-center justify-between px-20 py-4">
        <h1>
          <Link to="/">Psy.</Link>
        </h1>
        <ul className="flex items-center justify-center gap-3">
          <li>
            <Link to="/" className="text-sm text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/my-doctors" className="text-sm text-red-600">
              My Doctors
            </Link>
          </li>
          <li>
            <Link to="/add-suivi" className="text-sm text-red-600">
              Add Suivi
            </Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-suivi" element={<AddSuivi />} />
        <Route path="my-doctors" element={<MyDoctors />} />
      </Routes>
    </main>
  );
}

export default App;
