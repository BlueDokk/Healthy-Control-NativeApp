import React from "react";
import { useFormikContext } from "formik";

import Button from "../Button/ButtonComponent";

function SubmitButtonComponent({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} />;
}

export default SubmitButtonComponent;