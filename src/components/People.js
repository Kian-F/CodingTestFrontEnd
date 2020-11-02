import React, { useState, useEffect } from "react";

const SERVER_URL = "http://localhost:3000/people/index";

const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getPeople();
  }, []);
  const getPeople = async () => {
    const response = await fetch(
      SERVER_URL
    );
    console.log(response)
    const data =await response.json();
    console.log(data);
  };

  return <div>people</div>;
};

export default People;
