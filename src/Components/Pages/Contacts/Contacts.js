import React from "react";

function Contacts(props) {
  const title = props.location.pathname.substring(1);
  return (
    <>
      <h1 className="header__title">{title}</h1>
    </>
  );
}
export default Contacts;
