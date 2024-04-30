// import { IMaskInput } from 'react-imask'
import { Form } from './styles'
import { SaveButton } from '../Contact/styles'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import ContactClass from '../../models/Contact'
import { register } from '../../store/reducers/contact'

export const RegisterContact = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const addContact = (event: FormEvent) => {
    event.preventDefault()
    const contactToAdd = new ContactClass(100, name, email, phone)
    dispatch(register(contactToAdd))
  }

  return (
    <>
      <Form onSubmit={addContact}>
        <input
          required
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          required
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          required
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <SaveButton type="submit">Cadastrar</SaveButton>
      </Form>
    </>
  )
}
