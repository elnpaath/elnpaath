import React from "react";

function Shop(props) {
  const title = props.location.pathname.substring(1);
  return (
    <>
      <h1 className="header__title">{title}</h1>
    </>
  );
}

export default Shop;
