import React from "react";
import { useForm } from "react-hook-form";

export function Form(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    props.addUser(data);
    event.target.reset();
  };

  return (
    <div id="view">
      <div className="header">
        <header>
          <h1>Simple User Profile</h1>
          <p>Para empezar llena el siguiente formulario</p>
        </header>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="names">Nombres</label>
            <input
              type="text"
              placeholder="John"
              id="names"
              {...register("names", {
                required:
                  "Campo requerido, por favor escriba sus nombres",
              })}
            />
            <span className="error">{errors?.names?.message}</span>
          </div>
          <div>
            <label htmlFor="surnames">Apellidos</label>
            <input
              type="text"
              placeholder="Doe"
              id="surnames"
              {...register("surnames", {
                required:
                  "Campo requerido, por favor escriba sus apellidos",
              })}
            />
            <span className="error">{errors?.surnames?.message}</span>
          </div>
          <div>
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              placeholder="youremail@email.com"
              id="email"
              {...register("email", {
                required: "Campo requerido, por favor escriba su correo",
              })}
            />
            <span className="error">{errors?.email?.message}</span>
          </div>
          <div>
            <label htmlFor="telephone">Teléfono</label>
            <input
              type="tel"
              id="telephone"
              placeholder="+57 3221234567"
              {...register("telephone", {
                required: "Campo requerido, por favor escriba su teléfono",
              })}
            />
            <span className="error">{errors?.telephone?.message}</span>
          </div>
          <div>
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              placeholder="Bogotá"
              {...register("city", {
                required:
                  "Campo requerido, por favor escriba la ciudad de origen",
              })}
            />            
            <span className="error">{errors?.city?.message}</span>
          </div>
          <div>
            <label htmlFor="country">País</label>
            <input
              type="text"
              id="country"
              placeholder="Colombia"
              {...register("country", {
                required:
                  "Campo requerido, por favor escriba el país de origen",
              })}
            />
            <span className="error">{errors?.country?.message}</span>
          </div>
          <button id="Send" type="submit">Registrarse <i className="icon-direction-outline"></i></button>
        </form>
      </div>
    </div>
  );
}
