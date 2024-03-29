import React, { useState, useEffect } from "react";


const Typing = ({ speed, msg }) => {
  const Typer = ({ speed = 250, children = " Introduce your text" }) => 
{
  const [idx, setidx] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setidx((v) => v + 1), speed);
    return () => window.clearInterval(timer);
  });

  return <div>{children.substr(0, idx)}</div>;
};
return (
  <div>
    <Typer speed={speed} children={msg}></Typer>
  </div>
 );
};

export default Typing;