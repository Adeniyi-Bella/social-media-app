interface ValidationArgsRegister {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface ValidationArgsLogin {
    email: string;
    password: string;
}

interface ValidationError {
    type: string;
    message: string;
}

export const validateRegister = ({ name, email, password, confirmPassword }: ValidationArgsRegister): ValidationError | null => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
        return { type: 'name', message: 'A Name is required' };
    }
    if (!email) {
        return { type: 'email', message: 'An Email is required' };
    }
    if (!reg.test(email)) {
        return { type: 'email', message: 'The Email is not valid' };
    }
    if (!password) {
        return { type: 'password', message: 'A Password is required' };
    }
    if (password.length < 8) {
        return { type: 'password', message: 'The Password needs to be longer' };
    }
    if (password !== confirmPassword) {
        return { type: 'password', message: 'The Passwords do not match' };
    }
    return null;
};

export const validateLogin = ({ email, password }: ValidationArgsLogin): ValidationError | null => {
    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email) {
        return { type: 'email', message: 'An Email is required' };
    }
    if (!emailReg.test(email)) {
        return { type: 'email', message: 'The Email is not valid' };
    }
    if (!password) {
        return { type: 'password', message: 'A Password is required' };
    }
    if (password.length < 8) {
        return { type: 'password', message: 'The Password needs to be at least 8 characters long' };
    }
    return null;
};
