import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font-family: 'Poppins', sans-serif;
  background-color: #009edd;
  color: #fff;
  border-radius: 6px;
  border: 1px solid #009edd;
  padding: 5px 15px;
  transition: box-shadow 0.3s;
  &:focus, &:hover {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px;
  }
`;

export default ButtonWrapper;
