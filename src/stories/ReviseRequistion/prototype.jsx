import React from 'react';
import s1 from "./proto/operator-commited.svg";
import s2 from "./proto/operator-draft--revert.svg";
import s3 from "./proto/operator-draft.svg";
import s4 from "./proto/operator-reviewed.svg";
import s5 from "./proto/reviewer-commited.svg";
import s6 from "./proto/reviewer-draft.svg";
import s7 from "./proto/reviewer-reviewed.svg";

export function Prototype() {
  return (
  <div>
    操作员-草稿：
    <img src={s3} width="1000" title='operator-beforeCommit' />
    操作员-草稿--回退：
    <img src={s2} width="1000" title='operator-beforeCommit' />
    操作员-提交完：
    <img src={s1} width="1000" title='operator-beforeCommit' />
    操作员-审核完：
    <img src={s4} width="1000" title='operator-beforeCommit' />
    审核员-草稿：
    <img src={s6} width="1000" title='operator-beforeCommit' />
    审核员-提交完：
    <img src={s5} width="1000" title='operator-beforeCommit' />
    审核员-审核完：
    <img src={s7} width="1000" title='operator-beforeCommit' />
  </div>
    );
}