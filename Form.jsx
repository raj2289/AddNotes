import React from "react";

function Form(props)
{
  return (<form classname="form">
  <input type="text" placeholder="Username"/>
  <input type="password" placeholder="Password"/>
  {props.isRegistered===false && <input type="password" placeholder="confirm Password"/>}
  <button type="submit">{props.isRegisteredRegister ? "Login" :"Register"}</button>
  </form>
);
};
export default Form;
