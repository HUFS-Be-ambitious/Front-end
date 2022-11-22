import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import axios from 'axios'
import { useState } from 'react'
//import Link from 'react-router-dom'


const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassWord] = useState('');

  const onChangeEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const onChangePwd = (e) => {
    setPassWord(e.target.value)
  }

  const login = () => {
    const info=
    {
      userEmail,
      password
    }
      const getToken = async ()=>{
        try{
          let response = await axios.post(' http://192.168.25.19:8080/member/login',JSON.stringify(info))
          sessionStorage.setItem('token',response.headers.authorization)
          console.log(response.headers.authorization)
        }
        catch (e){
          console.log(e)
        }
      }

    getToken()
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
        value={userEmail}
        onChange = {onChangeEmail}
        label = "Email Address" 
        name = "email" 
        autoComplete="email" 
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
      <Button 
        style = {{
          maxWidth: "80px",
          maxHeight: "40px",
          minWidth: "110px",
          minHeight: "40px",
          margin: "25px 10px 10px 2px"
         }}
        sx = {{mt:2.5}} 
        variant='outlined'
      >회원가입</Button>
      
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



export default Login