import React, { useState } from 'react';
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography, Box } from '@mui/material';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import VisuallyHiddenInput from "../components/styles/styledComponents";
import { useInputValidation,UserNameValidator} from '../utils/validators';

const Login=()=>{
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = ()=>setIsLogin(((prev)=>!prev));

    const name=useInputValidation("");
    const bio=useInputValidation("");
    const username=useInputValidation("", UserNameValidator);
    const password=useInputValidation("");

    const handleLogin=(e)=>{
        e.preventDefault();
    }

    const handleSignin=(e)=>{
        e.preventDefault();
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #ece9e6, #eae2e2)", 
            }}
        >


        <Container component={"main"} maxWidth="xs" 
        sx={{
            height:"100vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        }} 
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    display: "flex",
                    flexDirection:"column",
                    alignItems:"center",
                    backgroundColor:"#dddddd"
                }}  
            >
                {isLogin ? (
                    <>
                        <Typography variant='h5'>Login</Typography>
                        <form style={{
                            width:"100%",
                            marginTop:"1rem",
                        }}
                        onSubmit={handleLogin}
                        >
                            <TextField 
                                required 
                                fullWidth 
                                label="Username" 
                                margin="normal" 
                                variant='outlined'
                                value={username.value}
                                onChange={username.changeHandler}
                            />

                            {
                                username.error && (
                                    <Typography color='error' variant='caption'>
                                        {username.error}
                                    </Typography>
                                )
                            }

                            <TextField 
                                required 
                                fullWidth 
                                label="Password" 
                                type='password'
                                margin="normal" 
                                variant='outlined'
                                value={password.value}
                                onChange={password.changeHandler}
                            />

                            <Button 
                                sx={{
                                    marginTop:"1rem"
                                }}
                                fullWidth
                                variant='contained'
                                color='primary'
                                type='submit'
                            >Login
                            </Button>
                            <Typography textAlign={"center"} marginTop={"1rem"}>OR</Typography>

                            <Button
                                fullWidth
                                variant='text'
                                onClick={toggleLogin}
                            >
                                Sign in
                            </Button>

                        </form>
                    </>
                    
                ) : (
                    <>
                    <Typography variant='h5'>Sign In</Typography>
                    <form style={{
                        width:"100%",
                        marginTop:"auto",
                    }}
                    onSubmit={handleSignin}
                    >
                        <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                            <Avatar 
                                sx={{
                                    width:"10rem",
                                    height:"10rem",
                                    objectFit:"contain"
                                }}
                            />
                            <IconButton
                                sx={{
                                    position:"absolute",
                                    bottom:"0",
                                    right:"0",
                                    color:"white",
                                    bgcolor:"rgba(0,0,0,0.5)",
                                    ":hover":{
                                        bgcolor:"rgba(0,0,0,0.7)"
                                    },
                                }}
                                component="label"
                            >
                                <>
                                    <CameraAltIcon />
                                    <VisuallyHiddenInput type="file"/>
                                </>
                            </IconButton>
                            
                        </Stack>
                        <TextField 
                            required 
                            fullWidth 
                            label="Name" 
                            margin="normal" 
                            variant='outlined'
                            value={name.value}
                            onChange={name.changeHandler}
                        />
                        <TextField 
                            required 
                            fullWidth 
                            label="Bio" 
                            margin="normal" 
                            variant='outlined'
                            value={bio.value}
                            onChange={bio.changeHandler}
                        />
                        <TextField 
                            required 
                            fullWidth 
                            label="Username" 
                            margin="normal" 
                            variant='outlined'
                            value={username.value}
                            onChange={username.changeHandler}
                        />

                        {
                            username.error && (
                                <Typography color='error' variant='caption'>
                                    {username.error}
                                </Typography>
                            )
                        }

                        <TextField 
                            required 
                            fullWidth 
                            label="Password" 
                            type='password'
                            margin="normal" 
                            variant='outlined'
                            value={password.value}
                            onChange={password.changeHandler}
                        />

                        <Button 
                            sx={{
                                marginTop:"1rem"
                            }}
                            fullWidth
                            variant='contained'
                            color='primary'
                            type='submit'
                        >Sign in
                        </Button>
                        <Typography textAlign={"center"} marginTop={"1rem"}>OR</Typography>

                        <Button
                            fullWidth
                            variant='text'
                            onClick={toggleLogin}
                        >
                            Login
                        </Button>

                    </form>
                </>
                )}
            </Paper>
        </Container>
        </Box>
    )
}

export default Login;


