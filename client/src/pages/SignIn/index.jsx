import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { RequireAuth } from "../../services/requireAuth";
import { Button } from "../../components/Button";
import { Container } from "./style";

export function SingIn() {
    const { register, handleSubmit, formState: { errors } } = useForm();    
    const API = "http://localhost:3000/login"

    function onSubmit(data) {
        console.log(data);
            async function fetchToken() {
                const response = await axios.post(API, data)
                
                if (response.data.token) {
                    const token = await response.data.token
                    localStorage.setItem('token', token);
                    console.log(token);
                    alert("logado");
                    <Navigate to="/"/>
                }
            }
            fetchToken();
            
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

                <Button title="Logar" />
            </form>
        </Container>
    )
}