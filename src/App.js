import { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [fullName, setFullName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setFullName(`Full Name: ${first} ${last}`);
  }
  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
        First Name:
        <input
          value={first}
          type="text"
          onChange={(e) => setFirst(e.target.value)}
          required
        />
        </div>
        <div>
        Last Name:
        <input
          value={last}
          type="text"
          onChange={(e) => setLast(e.target.value)}
          required
        />
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
        </div>
        <p>{fullName}</p>
      </form>
    </div>
  );
}

export default App;
