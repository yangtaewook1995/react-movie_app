import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

// style
const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 10;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${(props) => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// main
// 5bffb8ca99dbfae576ba658a895078ee
const HeaderC = ({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Item current={pathname == "/"}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname == "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname == "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </Header>
  );
};

export default withRouter(HeaderC);
