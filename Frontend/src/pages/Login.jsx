import { userService } from '../services/user.service'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onLogin = (data) => {
    console.log(data)
  }
  return (
    <section className='login-page flex column'>
      <div className="login-section flex justify-center">

      <form className='login-form' onSubmit={handleSubmit(onLogin)}>
        <input
          type='text'
          {...register('username', {
            required: 'Must enter username',
            minLength: { value: 3, message: 'Too short' },
            maxLength: { value: 20, message: 'Too Long' },
          })}
          placeholder='Username'
          />
        {errors.username && (
          <span className='form-error'>{errors.username.message}</span>
          )}
        <input
          type='text'
          {...register('password', {
            required: 'Must enter password',
            minLength: { value: 8, message: 'Too short' },
            maxLength: { value: 20, message: 'Too long' },
          })}
          placeholder='Password'
          />
        {errors.password && (
          <span className='form-error'>{errors.password.message}</span>
          )}
        <button className='login-btn'>Login</button>
      </form>
      <div className='google-facebok-login'>bla bla</div>
          </div>
          <div className="signup">
            <NavLink to='/signup'>dont have an account? singup</NavLink>
          </div>
    </section>
  )
}
