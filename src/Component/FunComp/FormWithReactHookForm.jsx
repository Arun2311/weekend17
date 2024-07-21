import React from "react";
import { useForm } from "react-hook-form";

let count = 0;
export default function FormWithReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  count++;
  console.log(count);

  const on = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      <div>
        <label>First Name : </label>

        <input
          {...register("name", {
            required: "Pls enter u r name",
            max: 23,
            min: 1,
            pattern: "A",
          })}
          placeholder="enter u r name"
        />

        <br></br>

        <p style={{ color: "red" }}>{errors?.name?.message}</p>
        <br></br>
        <br></br>

        <label>Age : </label>

        <input
          {...register("age", { required: "Pls enter u r age" })}
          placeholder="enter u r Age"
        />

        <br></br>
        <br></br>
        <br></br>

        <label>Email : </label>

        <input
          {...register("email", { required: "Pls enter u r email" })}
          placeholder="enter u r Email"
        />

        <br></br>
        <br></br>

        <button onClick={handleSubmit(on)}>Submit</button>
      </div>
    </div>
  );
}
