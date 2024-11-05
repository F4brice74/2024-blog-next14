'use client'
import {signIn} from 'next-auth/react'
import { Button } from "@mantine/core"

const LoginPage = () => {  

    return (
      
        <Button variant="primary" onClick={() => signIn()}>Login to Google</Button>
      
    )
}

export default LoginPage