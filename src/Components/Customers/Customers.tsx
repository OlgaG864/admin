import { useState } from "react";

interface Customer {
  id: string;
  name: string;
  city: string;
  phone: string;
}

function Customers() {
  const data: Array<Customer> = [
    {
      id: "1",
      name: "bob",
      city: "Netanya",
      phone: "03-5550000",
    },
  ];

  const [customers, setCustomers] = useState(data);

  return (
    <>
      <h2>Customers</h2>

      {customers.length === 0 ? <div>No customers yet</div> : null}

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.city}</td>
              <td>{customer.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <div>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <input type="text" placeholder="City" />
      </div>
      <div>
        <input type="text" placeholder="Phone" />
      </div>

      <button className="btn btn-primary">Add</button>

      <hr />

      <div>
        <input type="text" placeholder="ID" />
      </div>
      <div>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <input type="text" placeholder="City" />
      </div>
      <div>
        <input type="text" placeholder="Phone" />
      </div>

      <button className="btn btn-primary">Edit</button>

      <hr />

      <div>
        <input type="text" placeholder="ID" />
      </div>

      <button className="btn btn-primary">Delete</button>
    </>
  );
}

export default Customers;
