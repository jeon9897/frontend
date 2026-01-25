import React from 'react';

function Main(props) {
  return (
    <>
      <ul className="list01">
        <li>id:{props.id}, name:{props.name}</li>
      </ul>
    </>
  );
}

export default Main;