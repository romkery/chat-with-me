const validateForm = ({values, isAuth, errors}: ValidatePropsType) => {

    const rules: any = {
        email: (value: string) => {

            if (!value) {
                errors.email = 'E-mail is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Invalid email address';
            }
        },
        username: (value: string) => {

            if (!value) {
                errors.username = 'Username is Required';
            } else if (!/^[a-zA-Z0-9_-]{3,15}$/i.test(value)) {
                errors.username = 'Invalid username';
            }
        },
        password: (value: string) => {

            if (!value) {
                errors.password = 'Password is Required';
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value)) {
                errors.password = isAuth ? 'Invalid password' : 'Too simple password';
            }
        },
        password2: (value: string) => {

            if (!value) {
                errors.password2 = 'Password is Required';
            } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value)) {
                errors.password2 = isAuth ? 'Invalid password' : 'Too simple password';
            }
        },
    };

    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );
};

export default validateForm;

type ValidatePropsType = {
    isAuth: boolean
    values: any
    errors: any
}