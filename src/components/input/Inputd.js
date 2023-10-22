import styled from 'styled-components';
import Flex from '../Flex';

const Input = ({ label, name, type, column = false, disabled = false, inputWidth }) => {
  const Div = styled(Flex)`
    label {
      display: block;
      font-size: 1.125rem;
      white-space: nowrap;
    }
    label span {
        color: red; 
    }

    input {
      width: 100%;
      border-radius: 20em;
      padding: 0.2em 1em;
      border: none;
      outline: none;
    }
  `;

  return (
    <>
      {
        column ?
          <Div flex-direction='column' width='100%' gap='0.5em'>
            { label && (<label htmlFor={name}> {label.includes('*') ? (<>{label.replace('*', '')}<span>*</span></>):label} </label> )}
            <input style={{ width: inputWidth }} id={name} name={name} type={type ?? 'text'} disabled={disabled} />
          </Div>
            :
          <Div justify-content='space-between' align-items='center' width='100%' gap='2em'>
            { label && <label htmlFor={name}>{label }</label> }
            <input style={{ width: inputWidth }} id={name} name={name} type={type ?? 'text'} disabled={disabled} />
          </Div>
      }
    </>
  );
}

export default Input;
