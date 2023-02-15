import { useState } from 'react'
import { userService } from '../services/user.service'

export const Login = () => {
  const [credentials, setCredentisals] = useState(
    userService.getEmptyCredentials()
  )

  const handleChange = ({ target }) => {
    const { value, name: field } = target
    setCredentisals((prevCred) => ({ ...prevCred, [field]: value }))
  }
  const onLogin = (ev) => {
    ev.preventDefault()
    console.log(credentials)
  }
  return (
    <section className='login-page'>
      <form onSubmit={(ev)=>onLogin(ev)}>
        <input
          type='text'
          value={credentials.username}
          name='username'
          onChange={handleChange}
          placeholder='Username'
        />
      </form>
    </section>
  )
}
