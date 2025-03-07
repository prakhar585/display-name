import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isVisibsle, setIsVisible] =  useState(false);
  const handleForm = (e) => {
    e.preventDefault()
    setIsVisible(true);
    
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="first-name">First Name: </label>
        <input
          required
          id="first-name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          ></input>
        <br></br>
        <label htmlFor="last-name">Last Name: </label>
        <input
          required
          id="last-name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>

      {isVisibsle ? <> Full Name: {firstName} {lastName}</>:null}


    </div>
  );
}

export default App;
