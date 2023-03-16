import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Button } from "../../components/Button";
import axios from 'axios'


export function SignUp() {
    const API = "http://localhost:3000/register"

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);

        axios.post(API, data)
            .then(res => alert(res.data))
            .catch(error => alert(error.response.data))
    }

    return (
        <Container>
            <h1>SignUp</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...register("name", {required: true})} />
                    {errors.name && <span className="error">Campo obrigatorio!</span>}
                </section>

                <section>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email", {required: true})} />
                    {errors.name && <span className="error">Campo obrigatorio!</span>}
                </section>

                <section>
                    <label htmlFor="password">Senha</label>
                    <input type="password" maxLength={16} id="password" {...register("password", {required: true})} />
                    {errors.name && <span className="error">Campo obrigatorio!</span>}
                </section>

                <Button title="Cadastrar" />
            </form>
        </Container>
    )
}