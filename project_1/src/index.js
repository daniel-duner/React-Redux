import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Today at 4:40 PM"
          avatar={faker.image.avatar()}
          text="Hello Niklas and Henrik!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Today at 5:40 PM"
          avatar={faker.image.avatar()}
          text="Hello Daniel!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName() + " " + faker.name.lastName()}
          timeAgo="Yesterday at 2:40 PM"
          avatar={faker.image.avatar()}
          text="Hello!!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
