import { useForm } from "react-hook-form";
import { Container } from "./style";

export function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
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

                <button>Enviar</button>
            </form>
        </Container>
    )
}