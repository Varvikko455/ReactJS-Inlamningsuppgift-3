const addUser = (name, email, password) => {
    return {
        type: 'ADD_INFORMATION',
        payload: {
            name: name,
            email: email,
            password: password
        }
    }
}

export default addUser