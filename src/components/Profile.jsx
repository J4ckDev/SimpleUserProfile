import React, { Fragment} from "react";

export function Profile(props) {
    return (
        <Fragment>
            <h2>Bienvenido {props.newUser.names.split(' ')[0]}</h2>
            <p>Esta es tu información personal</p>
            <p>{props.newUser.names}</p>
            <p>{props.newUser.surnames}</p>
            <p>{props.newUser.email}</p>
            <p>{props.newUser.telephone}</p>
            <p>{props.newUser.city}</p>
            <p>{props.newUser.country}</p>
            <hr />
            
        </Fragment>
    );
}