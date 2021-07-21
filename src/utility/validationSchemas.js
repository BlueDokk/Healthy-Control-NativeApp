import * as Yup from "yup";

const validationSchemas = {

    loginSchema: Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(6).label("Password"),
    }),

    signupSchema: Yup.object().shape({
        name: Yup.string().required().label("Name"),
        lastname: Yup.string().required().label("Lastname"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(6).label("Password"),
    })
}

export default validationSchemas;