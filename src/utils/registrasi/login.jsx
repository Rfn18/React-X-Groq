import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
      alert("isi semua data");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/login", values);
      alert("Berhasil login");
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert("Email atau password salah");
      } else {
        alert("Terjadi kesalahan pada server");
      }
    }
  };
  return (
    <>
      <div className="container-login flex flex-col justify-center items-center mt-20 w-full rounded pt-2">
        <h1 className="text-4xl text-amber-50 font-bold">
          selamat datang kembali
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            type="email"
            placeholder="Alamat email"
            className="outline-none rounded p-2 px-5 mt-10 text-amber-50 border-2 border-[#eaeaea]"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none rounded p-2 px-5 mt-5 text-amber-50 border-2 border-[#eaeaea]"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <button className="btn bg-amber-50 font-bold rounded p-2 px-19 py-2 mt-5 text-{#131010} hover:bg-[#FFA725] transition-all cursor-pointer">
            lanjutkan
          </button>
        </form>
        <p className="mt-5 text-amber-50">
          belum punya akun?{" "}
          <Link to={"/register"} className="text-[#ba9d9d]">
            daftar
          </Link>
        </p>
      </div>
      <Outlet />
    </>
  );
};

export default Login;
