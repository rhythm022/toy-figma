import React from 'react';
import s1 from "./proto/default.svg";
import PopupBatcher from "./proto/PopupBatcher.svg";

export function Prototype() {
  return (
  <div>
    <img src={s1} width="1000" />
    <div>
        <img src={PopupBatcher} width="400" />
      </div>
  </div>
    );
}