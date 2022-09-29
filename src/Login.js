import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './Login.css';
const Login = () => {
  return (
    
   
  

    
<div className='main-content' >   
<div className='container'>
  
  <div className='header'>
    <h2 className="pane-sign-in-welcome">Welcome Back!</h2>
                        <p className="pane-sign-in-type">Log in as an admin or a user</p>

    <div className='buttons' style={{flexDirection:'row',marginTop:'30px'}}>
    <input type="button" className="Admin" value="Admin"/>
    <input type="button"className="User" value="User"/>
    </div>
  </div>
  <div className="content">
  &nbsp;
    <form>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
<TextField
          id="outlined-Email-input"
          label="Email*"
          type="email"
          autoComplete="current-Email"
        />    
        <TextField
          id="outlined-Email-input"
          label="Passwoord*"
          type="email"
          autoComplete="current-Email"
        />   


    </Box>

   
      <span className="pass">
          Forgot your password?
        </span>

     
      <input type="submit" value="Log in" />
      
    </form>
    
      
      
      
     
    
  </div>
</div>
</div>


    
  )
}

export default Login