import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { RequireAuth } from "../../services/requireAuth";
import { Button, Container } from "./style";

export function SingIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [token, setToken] = useState("");
    
    const API = "http://localhost:3000/login"

    function onSubmit(data) {
        console.log(data);
        if (!token) {
            async function fetchToken() {
                const response = await axios.post(API, data)
                
                if (response.data.token) {
                    const data = await response.data.token
                    console.log(data);
                    return setToken(data);
                } else {
                    console.log("Não tem");
                    <Navigate to="/login"/>
                }
                
            }
            fetchToken()
        } else {
            async function useToken() {
                const response = await axios.get('http://localhost:3000/system', {
                    headers: {'authorization': `${token}`}
                });

                if (response.status === 200) {
                    alert("AAA");
                } else {
                    alert("aa")
                }
            }
            useToken();
        }
        
        <Navigate to="/register"/>
    }
        
    return (
        <Container>
            <Header />
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
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

                <Button>Enviar</Button>
            </form>
        </Container>
    )
}