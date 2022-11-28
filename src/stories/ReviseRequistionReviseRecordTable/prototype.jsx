import React from 'react';
import s1 from "./proto/operator-beforeCommit--deleteMode.svg";
import s3 from "./proto/operator-commited--revert.svg";
import s4 from "./proto/operator-commited.svg";
import s5 from "./proto/reviewed.svg";

export function Prototype() {
  return (
  <div>
    操作员-提交前--有系统删除: 
    <img src={s1} width="1000" />
    操作员-提交后: 
    <img src={s4} width="1000" />
    操作员-提交后(回退单): 
    <img src={s3} width="1000" />
    操作员、审核员-审核后: 
    <img src={s5} width="1000" />

  </div>
    );
}