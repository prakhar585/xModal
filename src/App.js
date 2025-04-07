import { useRef, useState } from "react";
import "./App.css";

export const Modal = ({ setDisplayModal }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const modalRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === modalRef.current) {
      setDisplayModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.split("").indexOf("@") === -1) {
      window.alert("Invalid email. Please check your email address.");
      return;
    }

    if (phone.length > 10) {
      window.alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
      return;
    }

    // let today = new Date();
    // let dd=String(today.getDate()).padStart(2,'0');
    // let mm = String(today.getMonth()+1).padStart(2, '0');
    // let yyyy = today.getFullYear();

    // today = mm+'/'+dd+'/'+yyyy;

    // if(today< new Date(date)){
    //   window.alert("date of birth cannot be in the future");
    //   return;
    // }

    let today = new Date();
    let inputDate = new Date(date); // assuming 'date' is the user input

    if (inputDate > today) {
      window.alert("date of birth cannot be in the future");
      return;
    }

    window.alert("Data submitted Successfully");
    setDisplayModal(false);
  };

  return (
    <div className="modal" ref={modalRef} onClick={handleClick}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <h3>Fill Details</h3>
          <div>
            <strong>Username:</strong>
            <br />
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
            <br />
          </div>
          <div>
            <strong>Email Address:</strong>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <br />
          </div>
          <div>
            <strong>Phone Number:</strong>
            <br />
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
            <br />
          </div>
          <div>
            <strong>Date of Birth:</strong>
            <br />
            <input
              type="date"
              id="dob"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
            <br />
          </div>
          <div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>{" "}
      </div>
    </div>
  );
};

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const handleModalDisplay = () => {
    setDisplayModal(true);
  };

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button className="modal-button" onClick={handleModalDisplay}>
        {" "}
        Open Form
      </button>

      {displayModal && (
        <Modal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
        ></Modal>
      )}
    </div>
  );
}

export default App;
