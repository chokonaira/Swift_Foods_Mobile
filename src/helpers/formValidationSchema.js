import * as Yup from 'yup';


export const registerSchema = Yup.object({
 first_name: Yup.string()
 .min(2, 'First Name cannot be less than 2 digits!')
 .required('First Name is required!'),
 last_name: Yup.string()
 .min(2, 'Last Name cannot be less than 2 digits!')
 .required('Last Name is required!'),
 email: Yup.string()
 .email('E-mail is not valid!')
 .required('E-mail is required!'),
 phone: Yup.number('Phone Number must be digits!')
 .min(10, 'Phone Number cannot be less than 10 digits!')
 .required('Phone Number is required!'),
 password: Yup.string()
 .min(5, 'Password has to be longer than 5 characters!') 
 .required('Password is required!'),

})

export const loginSchema = Yup.object({
  email: Yup.string()
  .email('E-mail is not valid!')
  .required('E-mail is required!'),
  password: Yup.string()
  .min(5, 'Password has to be longer than 5 characters!') 
  .required('Password is required!'),
 
 })