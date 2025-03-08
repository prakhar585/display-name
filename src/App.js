import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  const handleForm = (e) => {
    e.preventDefault();
    // Only show the full name if both fields have values
    if (firstName && lastName) {
      setIsVisible(true);
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="first-name">First Name: </label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="last-name">Last Name: </label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      {isVisible && <div>Full Name: {firstName} {lastName}</div>}
    </div>
  );
}

export default App;