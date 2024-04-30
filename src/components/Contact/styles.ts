import styled from 'styled-components'
import variables from '../../globalStyles/variables'

export const Card = styled.div`
  background-color: ${variables.cardBackgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  display: flex;
  width: 90%;
  margin: 10px auto;
  border-radius: 8px;
`
export const ContactData = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  margin: 5px;
  color: ${variables.dataTextColor};
  outline: none;
  border: none;
  padding: 8px 0;
  text-align: center;

  input {
    border: none;
    background-color: transparent;
  }
`

export const ContactField = styled.textarea`
  padding: 8px;
  border: none;
  background-color: transparent;
  resize: none;
  width: 300px;
`
export const ActionBar = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  padding: 3px;
`
export const Button = styled.button`
  font-weight: 500;
  font-size: 18px;
  color: ${variables.buttonTextColor};
  border-radius: 8px;
  border: none;
  padding: 4px 15px;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: #d4a63e;
  }
`

export const SaveButton = styled(Button)`
  background-color: ${variables.saveButtonColor};

  &:hover {
    background-color: #33b5e5;
  }
`
export const ExitButton = styled(Button)`
  background-color: ${variables.exitDeleteButtonColor};

  &:hover {
    background-color: #e57373;
  }
`

export const DeleteButton = styled(Button)`
  background-color: ${variables.exitDeleteButtonColor};

  &:hover {
    background-color: #e57373;
  }
`
export const EditButton = styled(Button)`
  background-color: ${variables.editButtonColor};

  &:hover {
    background-color: #ffecb3;
  }
`
