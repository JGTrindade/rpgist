import FormInput from "./FormInput.tsx";

export default function UserForm() {

    return (
        <div>
            <form>
                <FormInput label="First name" />
                <FormInput label="Surname" />
            </form>
        </div>
    );
}