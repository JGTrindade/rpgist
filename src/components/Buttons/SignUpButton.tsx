import Button from "./Button.tsx";

export default function SignUpButton() {

    const handleSignUp = () => {
        console.log('Signed up...');
    }

    return <Button onClick={handleSignUp} styles={{backgroundColor: '#c3c3c3', color: 'blue'}}>Sign Up</Button>;
}
