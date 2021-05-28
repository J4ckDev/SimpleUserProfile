import React from "react";

export function Card(props) {
    return (
        <div>
            <p>{props.user.names}</p>
            <p>{props.user.surnames}</p>
            <p>{props.user.email}</p>
            <p>{props.user.telephone}</p>
            <p>{props.user.city}</p>
            <p>{props.user.country}</p>
            <hr />
        </div>
    );
}