import React from 'react';
import AddToDraftReviseRequistionButton from "./proto/AddToDraftReviseRequistionButton.svg";
import AgainCommitReviewButton from "./proto/AgainCommitReviewButton.svg";
import CommitReviewButton from "./proto/CommitReviewButton.svg";
import ReviewDoneButton from "./proto/ReviewDoneButton.svg";


export function Prototype() {
  return (
    <div>
      <div>
        <img src={AddToDraftReviseRequistionButton} width="200" />
      </div>
      <div>
        <img src={AgainCommitReviewButton} width="200" />
      </div>
      <div>
        <img src={CommitReviewButton} width="200" />
      </div>
      <div>
        <img src={ReviewDoneButton} width="200" />
      </div>

    </div>
    );
}