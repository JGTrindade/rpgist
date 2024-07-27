import Button from "./Button.tsx";

export default function LoginButton() {

    const handleSignIn = () => {
        console.log('Signed in...');
    }

    return <Button onClick={handleSignIn}>Sign in</Button>;
}
