import React from 'react';
import { useFormikContext } from "formik";

import ErrorMessage from '../ErrorMessage/ErrorMessageComponent';

import styles from './styles';
import colors from '../../config/colors';
import { TextInput } from 'react-native';

function FormFieldComponent({
    name,
    width = 280,
    ...otherProps }) {

    const { setFieldTouched, setFieldValue, errors, touched, values } = useFormikContext();

    return (
        <>
            <TextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={text => setFieldValue(name, text)}
                value={values[name]}
                placeholderTextColor={colors.placeholder}
                width={width}
                style={styles.textInput}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormFieldComponent;