import React, { useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const navigae = useNavigate();
  const handleSubmit = (e) => {
    if (!values.nama || !values.email || !values.password) {
      alert("isi semua data");
      return;
    }
    e.preventDefault();
    axios
      .post("http://localhost:3000/user", values)
      .then((res) => {
        console.log(res);
        navigae("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container-login flex flex-col justify-center items-center mt-20 w-full text-amber-50 rounded pt-2">
        <h1 className="text-4xl font-bold">Registrasi</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="outline-none rounded p-2 px-5 mt-10 text-amber-50 border-2 border-[#eaeaea]"
            onChange={(e) => setValues({ ...values, nama: e.target.value })}
          />
          <input
            type="email"
            placeholder="Alamat email"
            className="outline-none rounded p-2 px-5 mt-5 text-amber-50 border-2 border-[#eaeaea]"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none rounded p-2 px-5 mt-5 text-amber-50 border-2 border-[#eaeaea]"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <button className="btn bg-amber-50 text-[#131010] font-bold rounded p-2 px-19 py-2 mt-5 hover:bg-[#FFA725] transition-all cursor-pointer">
            lanjutkan
          </button>
        </form>
        <p className="mt-5">
          sudah punya akun?{" "}
          <Link to={"/login"} className="text-[#ba9d9d]">
            login
          </Link>
        </p>
      </div>
      <Outlet />
    </>
  );
};

export default Register;
