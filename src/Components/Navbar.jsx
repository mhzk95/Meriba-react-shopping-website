import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@mui/icons-material';
import { Badge } from '@mui/material';
 
const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  display:flex;
  padding:10px 20px;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language = styled.span`
font-size:14px;
`
const SearchContainer = styled.div`
display:flex;
align-items:center;
border: 1px solid black;
margin-left: 20px;
padding:5px;
`
const Input = styled.input`
border: none;
`
const Center = styled.div`
flex:1;
`
const Logo = styled.h1`
text-align: center;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem = styled.div`
margin-left: 25px;
font-size: 14px;
cursor: pointer;
`
const Navbar = () => {
  return <Container>
    <Wrapper>
        <Left>
            <Language >EN</Language>
            <SearchContainer>
                <Input />
                <Search style={{color:'gray',fontSize:'16px'}} />
            </SearchContainer>
        </Left>
        <Center>
            <Logo>MERIBA</Logo>
        </Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </MenuItem>
        </Right>
    </Wrapper>
  </Container>
}

export default Navbar
