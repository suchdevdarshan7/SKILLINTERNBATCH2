import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  async function ConnectBackend(userData) {
    let response = await fetch("http://localhost:3000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    let data = await response.json();
    console.log("Sent the data to backend:", data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ConnectBackend(userData);
    console.log(userData);
  };

  const handleReset = () => {
    setUserData({
      username: "",
      password: "",
      email: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="UserName"
            value={userData.username}
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="PassWord"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
