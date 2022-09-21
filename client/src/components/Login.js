import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Alert } from "./Alert";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
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
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-[650px] w-[436px] px-[68px] pt-[50px] pb-[20px]  text-white bg-slate-50/[.10] border-white border-2 rounded-[30px] flex justify-around flex-col">


      <h2>Inicia sesión</h2>

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
          Iniciar Sesión
        </button>

        <button onClick={handleGoogleSingin} className="h-[50px] mb-[10px] font-bold rounded-full border-none text-white cursor-pointer bg-slate-50/[.10]">
          Inicia sesión con Google
        </button>

        <a className="mb-4 text-sm flex justify-between px-3 text-decoration-none font-bold text-sm text-white hover:underline"
          href="#!"
          onClick={handleResetPassword}>
          Olvidé mi contraseña
        </a>

      {error && <Alert message={error} />}
     
      </form>
      
      <p className="my-4 text-sm flex justify-between px-3">
        No tienes ninguna cuenta?
        <Link to="/register" className="text-sm text-decoration-none font-bold text-white">
          Regístrate
        </Link>
      </p>

    </div>
  );
}