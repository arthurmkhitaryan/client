import * as yup from "yup";

const registerSchema = yup.object().shape({
    name: yup
        .string()
        .max(35)
        .required(),
    surname: yup
        .string()
        .max(35)
        .required(),
    day: yup
        .string()
        .required(),
    email: yup
        .string()
        .email()
        .required(),
    gender: yup
        .string(),
    pass: yup
        .string()
        .required('Password is required'),
    re_pass: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('pass'), null], 'Passwords does not match'),
});

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    pass: yup
        .string()
        .required('Password is required')
});

export { registerSchema, loginSchema }