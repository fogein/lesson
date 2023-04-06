import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hook/use-auth';

type LoginFields = {
  name: string;
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFields>()
  const auth = useAuth()
  function finishForm(data: LoginFields) {
    auth?.login(data.name)
  }
  return (
    <form onSubmit={handleSubmit(finishForm)}>
      <div style={{display: 'flex', flexDirection:'column', gap: '16px', alignItems: 'center'}}>
        <h1>Auth</h1>
        <div>
          <input {...register('name', {required: { value: true, message: 'Name is required'}})} type="text" />
        </div>
        <div><button type='submit'>ok</button></div>
      </div>
    </form>
  )
}
