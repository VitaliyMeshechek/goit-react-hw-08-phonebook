import styled from "styled-components";


export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 500px;
`;

export const Container = styled.div`
background-color: #1E90FF;
`;

export const Label = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #FFFFFF;
  font-weight: 700;
  width: 150px;
  float: left;
  &::after {
    content: ': ';
  }
`;

export const Input = styled.input`
  padding: 3px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 3px 3px 5px grey;
  font-size: 14px;
  font-weight: 600;
  width: 300px;
  border: 2px solid #FFFFFF;
  border-radius: 3px;
`;

export const Button = styled.button`
display: block;
margin: 10px auto;
text-align: center;
padding: 7px 20px;
border: 1px solid #FFFFFF;
border-radius: 5px;
color: #FFFFFF;
background-color: #1E90FF;
`;

