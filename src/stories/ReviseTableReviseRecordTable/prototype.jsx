import React from 'react';
import s1 from "./proto/readonly.svg";
import s2 from "./proto/revertMode.svg";

export function Prototype() {
  return (
  <div>
    平常: 
    <img src={s1} width="1000" />
    撤销: 
    <img src={s2} width="1000" />

  </div>
    );
}