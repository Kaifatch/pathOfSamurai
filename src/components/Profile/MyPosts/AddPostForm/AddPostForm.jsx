import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength10]}
          name={"newPostText"}
          placeholder={"Your post message"}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
};

export default reduxForm({form: "profileAddPostForm"})(AddPostForm)