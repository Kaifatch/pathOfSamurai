import {reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React from "react";
import styles from "./../../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(Input, [required], "Email", "email")}
      {createField(Input, [required], "Password", "password", {type: "password"})}
      {createField(Input, null, null, "rememberMe", {type: "checkbox"}, "Remeber me")}
      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

export default reduxForm({form: 'login'})(LoginForm);