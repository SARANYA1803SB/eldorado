import { genSaltSync, hashSync } from "bcryptjs";

export const PasswordValidation = (password) => {
    const validPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$");

    if(!validPassword.test(password))
        return false;

    return true;
}

export const PasswordHashing = (password) => {
    return hashSync(password, genSaltSync());
}

