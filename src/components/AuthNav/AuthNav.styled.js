import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container = styled.div`
margin-left: auto;
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 12px;
  color: black;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;

  :hover {
    color: #e84a5f;
  }
`;


