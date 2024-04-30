import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { delete1, edit, register } from '../../store/reducers/contact'
import ContactClass from '../../models/Contact'

type Props = ContactClass

export const Contact = ({
  id,
  name: originalName,
  email: originalMail,
  phone: originalTel
}: Props) => {
  const [isEditing, setEditing] = useState(false)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }
    if (originalMail.length > 0) {
      setMail(originalMail)
    }
    if (originalTel.length > 0) {
      setTel(originalTel)
    }
  }, [originalName, originalMail, originalTel])

  function cancelEdit() {
    setEditing(false)
    setName(originalName)
    setMail(originalMail)
    setTel(originalTel)
  }
  function saveEdit() {
    dispatch(
      edit({
        id,
        name,
        phone: tel,
        email: mail
      })
    )
    setEditing(false)
  }

  return (
    <S.Card>
      <S.ContactData>
        <S.ContactField
          required
          disabled={!isEditing}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <S.ContactField
          required
          disabled={!isEditing}
          value={mail}
          onChange={(event) => setMail(event.target.value)}
        />
        <S.ContactField
          disabled={!isEditing}
          required
          placeholder="Phone"
          value={tel}
          onChange={(event) => setTel(event.target.value)}
        />
      </S.ContactData>
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton onClick={saveEdit}>Salvar</S.SaveButton>
            <S.ExitButton onClick={cancelEdit}>Sair</S.ExitButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setEditing(true)}>Editar</S.EditButton>
            <S.DeleteButton onClick={() => dispatch(delete1(id))}>
              Deletar
            </S.DeleteButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
