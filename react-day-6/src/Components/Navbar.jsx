import React, { useRef, useState } from "react";

const Navbar = () => {
  const [UserData, setUserData] = useState({ username: "", password: "" });
  const userName = useRef(undefined);
  const passWord = useRef(undefined);
  const DateOfBirth = useRef(undefined);
  const Email = userRef(undefined);

  function validateUserInfo(userName, passWord) {
    if (userName.current.value === "" || passWord.current.value === "") {
      alert("Hey idiot fill the form !");
      return false;
    } else {
      alert("The form has been submitted succesfully!");
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    let CheckUserInfo = validateUserInfo(userName, passWord);

    if (CheckUserInfo) {
      setUserData({
        username: userName.current.value,
        password: passWord.current.value,
      });
      console.log(UserData);
      return;
    } else {
      return;
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={userName} value={UserData.username} />
        </div>
        <div>
          <input type="password" ref={passWord} value={UserData.password} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Navbar;
