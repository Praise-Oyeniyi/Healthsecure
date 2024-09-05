import * as yup from 'yup'


export const fromSchema = yup.object({
    email: yup.string().required("Email address cannot be blank").email("Please enter a valid email address"),
    password: yup.string()
        .required("Password cannot be blank")
        .min(8, "Password length must not be less than 8")
        .matches(
            /^(?=.*[a-z])/,
            " Password must Contain One Lowercase Character"
        )
        .matches(
        /^(?=.*[A-Z])/,
        "  Password must Contain One Uppercase Character"
        )
        .matches(
        /^(?=.*[0-9])/,
        "  Password must Contain One Number Character"
        )
        .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "  Password must Contain  One Special Case Character"
        ),
    })

