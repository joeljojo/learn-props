import React from "react";
//2. Read the props in the child component
const Avator = ({ size, person }) => {
  return (
    <>
      <h1>{person.profession}</h1>
      <img
        src="https://avatars.githubusercontent.com/u/47426915?s=400&u=75a5603ac967abe23700ac55218602a0b1eec301&v=4"
        alt={`A profile of ${person.name}`}
        width={size}
        height={size}
      />
    </>
  );
};

export default Avator;
