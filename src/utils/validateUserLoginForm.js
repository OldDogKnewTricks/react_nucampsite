export const validateUserLoginForm = (values) => {
    const error = {};
    if (!(values.username)) {
        error.username = 'Username required';

    }
    else if (values.username.length < 6 || values.username.length > 15) {
        error.username = 'Must be  be at least 6 characters, and at most 15 characters';

    }
    if (!values.password) {
        error.password = 'Password required';
    }
    else if (values.password.length < 8) {
        error.password = 'Must be  be at least 8 characters';
    }
    return error;

};