import React from 'react';
import s1 from "./proto/null.svg";
import s2 from "./proto/default.svg";
import s3 from "./proto/modified-1.svg";
import s4 from "./proto/modified-2.svg";
import PopupBatcher from "./proto/PopupBatcher.svg";

export function Prototype() {
  return (
  <div>
    空: 
    <img src={s1} width="1000" />
    初始状态: 
    <img src={s2} width="1000" />
    修改1: 
    <img src={s3} width="1000" />
    修改2: 
    <img src={s4} width="1000" />
    <div>
        <img src={PopupBatcher} width="600" />
      </div>
  </div>
    );
}