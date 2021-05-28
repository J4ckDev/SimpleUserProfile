import React,{ Fragment} from "react";
import { Card } from "./Card";

export function Cards (props) {
  
    let cards = props.isOtherUsersFill ? props.otherUsers.map((user,key) => <Card key={key} user={user}/>) : null

  return (
      <Fragment>
          {cards}
      </Fragment>
      );
}
