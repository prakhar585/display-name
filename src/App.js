import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showFullName, setShowFullName] = useState(false);
  
  const handleForm = (e) => {
    e.preventDefault();
    // Only show full name if both fields have values
    setShowFullName(firstName && lastName);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="first-name">First Name: </label>
        <input
          required
          type="text"
          id="first-name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
        <br />
        <label htmlFor="last-name">Last Name: </label>
        <input
          required
          type="text"
          id="last-name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      
      {showFullName && <div>Full Name: {firstName} {lastName}</div>}
    </div>
  );
}

export default App;