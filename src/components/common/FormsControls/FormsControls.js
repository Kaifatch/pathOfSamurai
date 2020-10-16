import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {

  const hasError = touched && error
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  let {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
  let {input, meta, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (component, validators, placeholder, name, props = {}, text = "") => (
  <div>
    <Field component={component} validate={validators} placeholder={placeholder} name={name} {...props} /> {text}
  </div>
)
