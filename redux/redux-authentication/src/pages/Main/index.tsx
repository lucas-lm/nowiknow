import React from 'react'
import { Button, Input, Form } from "../../components";
import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/modules/auth/actions';

const Main: React.FC = () => {
  const { isLoading, isAuthenticated, error } = useSelector((state: StoreState) => state.auth)
  const dispatch = useDispatch()
  console.log('isLoading: ', isLoading)
  console.log('Auth: ', isAuthenticated);
  console.log('Error: ', error);
  
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.persist()
    event.preventDefault()
    dispatch(signInRequest({ email: 'lucas-m@outlook.com', password: '123456' }))
  }

  return (
    <main className='app'>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input label='Nome' />
        <Input label='Senha' type='password'/>
        <Button type='submit' disabled={isLoading}>{isLoading ? 'Loading...' : 'Enter'}</Button>
      </Form>
    </main>
  )
}


export default Main
