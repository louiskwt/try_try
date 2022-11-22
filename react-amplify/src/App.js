import "./App.css";
import { API } from "aws-amplify";
import React, { useState } from "react";

const myAPI = "amplifyReact";
const path = "/customers";

const App = () => {
  const [input, setInput] = useState("");
  const [customers, setCustomers] = useState([]);

  // Function to fetch from our backend and update customer array
  function getCustomer(e) {
    let customerId = e.input;
    API.get(myAPI, `${path}/${customerId}`)
      .then((response) => {
        console.log(response);
        let newCustomers = [...customers];
        newCustomers.push(response);
        setCustomers(newCustomers);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Simple React App</h1>
      <div>
        <input
          placeholder="Customer Id..."
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <button
        onClick={() => {
          getCustomer({ input });
          setInput("");
        }}
      >
        Get Customer
      </button>
      <br />

      <h2 style={{ visibility: customers.length > 0 ? "visible" : "hidden" }}>
        Response
      </h2>
      {customers.map((customer, index) => {
        return (
          <div key={index}>
            <span>
              <b>Customer Id: </b> {customer.customerId} -{" "}
              <b>{customer.customerName}</b>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default App;
