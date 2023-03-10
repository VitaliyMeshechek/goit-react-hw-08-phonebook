import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #e84a5f;
  }
`;

export const Span = styled.span`
margin-left: 50px;
`;
