import React, { useState } from "react";
import { login, logout } from "../api/firebase";
import User from "./User";

export default function Login() {
  const [user, setUser] = useState();

  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <div className="flex items-center gap-4 overflow-hidden text-center">
      <li>
        {user && <User user={user}></User>}
        {!user && (
          <button className="text-base" onClick={handleLogin}>
            Login |
          </button>
        )}
        {user && (
          <button className="text-base" onClick={handleLogout}>
            Logout |
          </button>
        )}
        <a className="text-base"> 회원가입</a>
      </li>
    </div>
  );
}
