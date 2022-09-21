import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage)
    }
  };

  
  const handleGoogleSingin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage)
    }
  };

  return (
    <div className="h-[650px] w-[436px] px-[68px] pt-[50px] pb-[20px]  text-white bg-slate-50/[.10] border-white border-2 rounded-[30px] flex justify-around flex-col">

      <h2>Regístrate</h2>

      <form className="flex flex-col" 
        onSubmit={handleSubmit}>

        <input
          className="bg-transparent px-[20px] focus:outline-none placeholder:text-white border-b-2 text-base mb-3 h-12"
          htmlFor="email"
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Correo Electronico"
          />

        <input
          className="bg-transparent px-[20px] focus:outline-none placeholder:text-white  border-b-2 text-base mb-4 h-12"
          htmlFor="password"
          type="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Contraseña"
          />

        <button
          className="h-[50px] my-[10px] font-bold rounded-full border-none text-white cursor-pointer bg-slate-50/[.10]">
          Registrarse
        </button>

        <button onClick={handleGoogleSingin} className="h-[50px] mb-[10px] font-bold rounded-full border-none text-white cursor-pointer bg-slate-50/[.10]">
          Regístrate con Google
        </button>

        {error && <Alert message={error} />}
        
      </form>
      
      <p className="my-4 text-sm flex justify-between px-3">
        Ya tienes cuenta?
        <Link to="/login" className="text-sm text-decoration-none font-bold text-white">
          Inicia Sesión
        </Link>
      </p>

    </div>
  );
}