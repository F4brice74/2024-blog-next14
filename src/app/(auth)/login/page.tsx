import { Button } from "@mantine/core"
import { signIn, auth } from '@/src/lib/auth'


const LoginPage = async () => {  
  const session  = await auth()
  
  const handleSignIn = async() => {
    "use server"
    await signIn("google")
  }
  console.log(session)
    return (   
      <form action={handleSignIn}>

        <Button variant="primary" type='submit'>Login to Google</Button>
      </form>   
    )
}

export default LoginPage