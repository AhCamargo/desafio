import React, { Component } from 'react'
import * as Yup from 'yup'
import { Form, Input, Textarea} from '@rocketseat/unform'
// Styles
import './Login.css'
// Custom Components
import Comet from '~/components/Comet'
import SpaceshipWrapper from '~/components/SpaceshipWrapper'

const schema = Yup.object().shape({
    name: Yup.string().required('Campo Name é obrigatório'),
    email: Yup.string().email('Insira um E-mail válido exemplo: alc@alc.com').required('Campo E-mail é  obrigatório'),
    message: Yup.string().max(240).required('Campo Mensagem é obrigatório')
});

export default class Login extends Component {
    state = {
        username: "",
        email: "",
        message: ""
    };

    handleSubmit = e => {

       // e.preventDefault();
      
      const { 
            username, 
            email,
            message,
        } = this.state;

      // if (!username.length && !email.length && !message.length) return

      localStorage.setItem("@FalaDev:username", username );
      localStorage.setItem("@FalaDev:email", email );
      localStorage.setItem("@FalaDev:message", message );

    }

    handleNameInputChange = e => {
        this.setState({ username: e.target.value })  
    }

    handleEmailInputChange = e => {
        this.setState({ email: e.target.value })  
    }

    handleMessageInputChange = e => {
        this.setState({ message: e.target.value })  
    }


 render() {
    const { 
        username, 
        email,
        message, 
    } = this.state;


    return (
    <div className="container">
        <Form schema={schema} onSubmit={this.handleSubmit} className="form">
            <React.Fragment>
                <span className="label">Nome:</span>
            </React.Fragment>
            <Input 
                className="space-between" 
                name="name"
                value={username}
                onChange={this.handleNameInputChange}
                placeholder="  Digite seu nome" 
            />
            <React.Fragment>
                <span className="label">E-mail:</span>
            </React.Fragment>
            <Input 
                className="space-between" 
                name="email"
                value={email}
                onChange={this.handleEmailInputChange}  
                placeholder="  Digite seu e-mail" 
            />
            <React.Fragment>
                <span className="label">Mensagem:</span>
            </React.Fragment>
            <Textarea 
                className="space-between" 
                name="message"
                value={message}
                onChange={this.handleMessageInputChange}
                placeholder=" Escreva uma mensagem" 
            />
            
            <button type="submit" className="button space-between">Enviar</button>
            
        </Form>
        <Comet />
        <SpaceshipWrapper />
    </div>
    );
 }
}