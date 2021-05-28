import React, {Fragment} from "react";
import { useForm } from "react-hook-form";

export function Form(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    props.addUser(data)
    event.target.reset()
  };

  return (
    <Fragment>
    <h1>Regístrate</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="names">Nombres</label>
      <input
        type="text"
        placeholder="John"
        id="names"
        {...register("names", {
          required:
            "Campo requerido, por favor escribe al menos uno de sus nombres",
        })}
      />
      <span>{errors?.names?.message}</span>
      <label htmlFor="surnames">Apellidos</label>
      <input
        type="text"
        placeholder="Doe"
        id="surnames"
        {...register("surnames", {
          required:
            "Campo requerido, por favor escribe al menos uno de sus apellidos",
        })}
      />
      <span>{errors?.surnames?.message}</span>
      <label htmlFor="email">Correo</label>
      <input
        type="email"
        placeholder="youremail@email.com"
        id="email"
        {...register("email", {
          required: "Campo requerido, por favor escriba su correo",
        })}
      />
      <span>{errors?.email?.message}</span>
      <label htmlFor="telephone">Teléfono</label>
      <input
        type="tel"
        id="telephone"
        placeholder="+57 3221234567"
        {...register("telephone", {
          required: "Campo requerido, por favor escriba su teléfono",
        })}
      />
      <span>{errors?.telephone?.message}</span>
      <label htmlFor="city">Ciudad</label>
      <input
        type="text"
        id="city"
        placeholder="Bogotá"
        {...register("city", {
          required: "Campo requerido, por favor escriba la ciudad de origen",
        })}
      />
      <span>{errors?.city?.message}</span>
      <label htmlFor="country">País</label>
      <input
        type="text"
        id="country"
        placeholder="Colombia"
        {...register("country", {
          required: "Campo requerido, por favor escriba el país de origen",
        })}
      />
      <span>{errors?.country?.message}</span>
      <button type="submit">Registrarse</button>
    </form>
    </Fragment>
  );
}
