import React from "react";

import Person from "./Person";

const List = ({ users }) => {
  //   const users = props.users;
  return (
    <section>
      {users.map((user) => {
        return <Person id={user.id} {...user} />;
      })}
    </section>
  );
};

export default List;
