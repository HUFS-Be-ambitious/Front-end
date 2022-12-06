import React from 'react';
import Navigation from "../components/navigation";
import Ad from "../components/advertisement";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react'

function Loginpage(){
    const [userId, setUserId] = useState('');
    const [password, setPassWord] = useState('');
  
  
    const onChangeId = (e) => {
      setUserId(e.target.value)
    }
  
    const onChangePwd = (e) => {
      setPassWord(e.target.value)
    }
  
    const login = (e) => {
        
        fetch("http://43.200.162.100/member/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    password:password,
    login: userId
  }),
}).then((response) => {
    if(response.status===200){
        alert('로그인')
        sessionStorage.setItem('userId', userId)
        document.location.href = '/'
    }
    else if(response.status===400){
        alert('로그인 실패')

    }
});
        }
    return (
      <Container component="main" maxWidth="xs">
        <Box
            sx={{
              marginTop: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
        <Typography component="h1" variant="h5">
              로그인
        </Typography>
        <Grid container>
          <Grid item xs>
        <TextField 
          type = "text"
          value={userId}
          onChange = {onChangeId}
          label = "Id" 
          name = "userId" 
          autoComplete="userId" 
          autoFocus margin = "normal" 
          required
          fullWidth
        />
        <TextField
          type = "password"
          value = {password}
          onChange = {onChangePwd}
          autoFocus margin = "normal"
          label = "Password"  
          name = "password"
          required
          fullWidth
          autoComplete="current-password"
        />
        </Grid>
        <Grid>
         <Button 
          style = {{
          maxWidth: "100px",
          maxHeight: "100px",
          minWidth: "100px",
          minHeight: "130px"
         }}
          type="submit" 
          variant = "contained"
          sx = {{mt:2.5, ml:2}}
          onClick = {login}> 로그인 </Button>
        </Grid>
        </Grid>
        <FormControlLabel control={
          <Checkbox value="remember" color="primary" />
        } label = "아이디 저장" />
      <Grid container spacing = {2}>
        <Link to="/register"><Button 
          style = {{
            maxWidth: "80px",
            maxHeight: "40px",
            minWidth: "110px",
            minHeight: "40px",
            margin: "25px 10px 10px 2px"
           }}
          sx = {{mt:2.5}} 
          variant='outlined'
        >회원가입</Button></Link>
        
        <Button
          style = {{
            maxWidth: "80px",
            maxHeight: "40px",
            minWidth: "110px",
            minHeight: "40px",
            margin: "25px 10px 10px 10px"
           }}
          sx = {{mt:2.5}} variant='outlined'>ID 찾기</Button>
  
        <Button 
          style = {{
            maxWidth: "85px",
            maxHeight: "40px",
            minWidth: "150px",
            minHeight: "40px",
            margin: "25px 10px 10px 0px"
           }}
           sx = {{mt:2.5}} variant='outlined'>비밀번호 찾기</Button>
      
      </Grid>
      <Button
          style = {{
            maxWidth: "85px",
            maxHeight: "40px",
            minWidth: "430px",
            minHeight: "40px"
           }}
          variant = 'outlined'
          sx = {{mt:2.0}} >
            네이버 아이디로 로그인
        </Button>
        <Button
          style = {{
            maxWidth: "85px",
            maxHeight: "40px",
            minWidth: "430px",
            minHeight: "40px"
           }}
          variant = 'outlined'
          sx = {{mt:1.0}} >
            카카오 아이디로 로그인
        </Button>
      </Box>
      </Container>
    );
}
export default Loginpage;