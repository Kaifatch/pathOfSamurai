import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import React from "react";
import styles from "./../../common/FormsControls/FormsControls.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[required]}
          placeholder={"Email"}
          name={"email"}/>
      </div>
      <div>
        <Field
          component={Input}
          type={"password"}
          validate={[required]}
          placeholder={"Password"}
          name={"password"}/>
      </div>
      <div>
        <Field
          component={Input}
          type={"checkbox"}
          name={"rememberMe"}/> remember me
      </div>
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
};

export default reduxForm({form: 'login'})(LoginForm);