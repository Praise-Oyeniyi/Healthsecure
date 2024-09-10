import * as yup from 'yup'


export const fromSchema = yup.object({
    email: yup.string().required("Email address cannot be blank").email("Please enter a valid email address"),
    name: yup.string().required('Please enter your name'),
    id: yup.string().required('Please enter a valid ID number'),
    abbrev: yup.string().required('Abbrevation cannot be blank'),
    select: yup.string().required('Please select your institution'),
    // role: yup.string()
    // .required("Role selection is required"),
    // matric: yup.string().required('Please enter a valid Student ID')
    //     .matches(
    //         /^[A-Za-z]{3}\/\d{2}\/\d{4}$/,
    //         "Please enter a valid Student ID"
    //     ),
    password: yup.string()
        .required("Password cannot be blank")
        .min(8, "Password length must not be less than 8")
        .matches(
            /^(?=.*[a-z])/,
            "Password must Contain One Lowercase Character"
        )
        .matches(
        /^(?=.*[A-Z])/,
            "Password must Contain One Uppercase Character"
        )
        .matches(
        /^(?=.*[0-9])/,
            "Password must Contain One Number Character"
        )
        .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "  Password must Contain  One Special Case Character"
        ),
})




export const signSchema = yup.object({
    email: yup.string().required("Email address cannot be blank").email("Please enter a valid email address"),
    name: yup.string().required('Please enter your name'),
    role: yup.string()
    .required("Role selection is required"),
    matric: yup.string().required('Please enter a valid Student ID')
        .matches(
            /^[A-Za-z]{3}\/\d{2}\/\d{4}$/,
            "Please enter a valid Student ID"
        ),
    password: yup.string()
        .required("Password cannot be blank")
        .min(8, "Password length must not be less than 8")
        .matches(
            /^(?=.*[a-z])/,
            "Password must Contain One Lowercase Character"
        )
        .matches(
        /^(?=.*[A-Z])/,
            "Password must Contain One Uppercase Character"
        )
        .matches(
        /^(?=.*[0-9])/,
            "Password must Contain One Number Character"
        )
        .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "  Password must Contain  One Special Case Character"
        ),
})