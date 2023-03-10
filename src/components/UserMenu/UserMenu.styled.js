import styled from "styled-components";
import Button from "@mui/material/Button";

export const LogoutButton = styled(Button)(() => ({
  border: "solid #FFFFFF",
  width: "100px",
  height: "40px",
  boxShadow: "3px 3px 3px #FFFFFF"
}));

export const Container = styled.div`
display: flex;
margin-left: auto;
`;

export const Paragraph = styled.p`
margin-right: 10px;
font-size: 18px;
line-height: 1.16;
font-weight: 700;
`;


