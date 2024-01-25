import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  function handleSubmit(event) {
    event.preventDefault()
    setFullName("Full Name: " + firstName + " " + lastName);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Full Name Display</h1>

      <label>First Name:</label>
      <input
        value={firstName}
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <br />
      <label>Last Name:</label>
      <input
        value={lastName}
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <br />

      <button>Submit</button>
      <p>{fullName}</p>
    </form>
  );
}

export default App;
