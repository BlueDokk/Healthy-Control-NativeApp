import React from 'react';
import TextInput from '../TextInput/TextInputComponent';

function FormFieldComponent({ name, width, ...otherProps }) {

    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormFieldComponent;