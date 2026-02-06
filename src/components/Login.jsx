import { useEffect, useState } from "react";

export default function Login() {

    const EMNAIL = "admin@admin.com";
    const PASSWORD = "123456";

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLogin, setShowLogin] = useState(true);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);




    const sesionObjectStorage = JSON.parse(localStorage.getItem("sesion"))


    useEffect(() => {

        if (sesionObjectStorage !== null) {
            console.log("Fecha de expiracion: " + sesionObjectStorage.expiry)
            console.log("Fecha actual: " + Date.now())
        }


        if (sesionObjectStorage !== null && sesionObjectStorage.expiry < Date.now()) {
            console.log("Fecha de expiracion: " + sesionObjectStorage.expiry)
            console.log("Fecha actual: " + Date.now())
            localStorage.clear();
            window.location.reload();
        }
        console.log(sesionObjectStorage);
        if (sesionObjectStorage !== null) {
            setShowLogin(false)
        } else {
            setShowLogin(true)
        }
    }, [])

    const handleLogin = () => {
        if (email === EMNAIL && password === PASSWORD) {
            console.log("Login exitoso");
            const newExpiry = Date.now() + (60000*60);
            const sesionObject = {
                email: EMNAIL,
                password: PASSWORD,
                expiry: newExpiry,
            } // 1 minuto
            setShowLogin(false);
            localStorage.setItem("sesion", JSON.stringify(sesionObject));
            window.location.reload();
        } else {
            if (email !== EMNAIL) {
                console.log("Correo incorrecto");
                setErrorEmail(true)
                setErrorPassword(false)
            } else {
                console.log("Contraseña incorrecta");
                setErrorEmail(false)
                setErrorPassword(true)
            }
        }
    }






    return (
        <div className={` ${showLogin ? "" : "hidden"} absolute inset-0 z-10 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-sky-200`}>
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-slate-800 mb-6">
                    Ingresar
                </h2>

                {/* Correo */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Correo
                    </label>
                    <div className="relative">
                        <span className="absolute top-3 left-3 flex items-center text-slate-400">
                            <i className="fa-solid fa-envelope"></i>
                        </span>
                        <input
                            type="email"
                            placeholder="correo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errorEmail ? "Correo incorrecto" : ""}
                        </p>
                    </div>
                </div>

                {/* Contraseña */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Contraseña
                    </label>
                    <div className="relative">
                        <span className="absolute top-3 left-3 flex items-center text-slate-400">
                            <i className="fa-solid fa-lock"></i>
                        </span>

                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-10 py-2 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <p className="text-red-500 text-sm mt-1">
                            {errorPassword ? "Contraseña incorrecta" : ""}
                        </p>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute top-3 right-3 flex items-center text-slate-500 hover:text-slate-700"
                        >
                            {showPassword ? (
                                <i className="fa-regular fa-eye-slash"></i>
                            ) : (
                                <i className="fa-regular fa-eye"></i>
                            )}
                        </button>
                    </div>
                </div>

                {/* Botón */}
                <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition"
                    onClick={handleLogin}
                >
                    Ingresar
                </button>
            </div>
        </div>
    );
}
