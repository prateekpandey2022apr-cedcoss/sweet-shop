import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SweetContext from "../SweetContext";

function Login() {
  const { user, setUser, handleLoginClick, from, setFrom } =
    useContext(SweetContext);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("from"));

  setFrom(() => searchParams.get("from"));

  return (
    <div className="wrapper login-wrapper">
      <div className="login-div">
        <form onSubmit={handleLoginClick}>
          <div className="form-element">
            <label htmlFor="username">Enter username</label>
            <input
              type="email"
              id="username"
              required
              value={user.username ?? ""}
              placeholder="user1@m.com:pass"
              onChange={(event) =>
                setUser({ ...user, username: event.target.value })
              }
            />
          </div>

          {/* <input type="hidden" value={from} /> */}

          <div className="form-element">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
              value={user.password ?? ""}
              onChange={(event) =>
                setUser({ ...user, password: event.target.value })
              }
            />
          </div>

          <div className="form-element">
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
