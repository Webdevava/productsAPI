import React, { useEffect, useState } from "react";

const PhoneList = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("https://3000-webdevava-productsapi-n3heq6t1x7b.ws-us100.gitpod.io/products/")
      .then((response) => response.json())
      .then((data) => setPhones(data.filter((product) => product.category === "phones")));
  }, []);

  return (
    <div>
      <h1>Phone List</h1>
      {phones.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {phones.map((phone) => (
            <li key={phone.id}>
              <h3>{phone.name}</h3>
              <p>{phone.description}</p>
              <img src={phone.imageUrl} alt={phone.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PhoneList;
