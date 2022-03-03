export const constant = {
    EMPTY_STRING: ' ',
    ZERO: 0,
    formData: {
        login: {
            title: 'Login',
            data: [
                {label: 'Email', type: 'email', className: 'w-100'},
                {label: 'Password', type: 'password', className: 'w-100'},
            ],
            style: {
                background: 'lightgreen'
            }
        },
        signUp: {
            title: 'Sign Up',
            data: [
                {label: 'First Name', type: 'text', className: 'w-50'},
                {label: 'Last Name', type: 'text', className: 'w-50'},
                {label: 'Email', type: 'email', className: 'w-100'},
                {label: 'Password', type: 'password', className: 'w-100'},
                {label: 'Confirm Password', type: 'password', className: 'w-100'},
            ],
            style: {
                background: 'lightseagreen'
            }
        }
    }
}