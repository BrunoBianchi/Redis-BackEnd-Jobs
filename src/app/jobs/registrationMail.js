import Mail from "../lib/Mail";
export default {
    key:'registrationEmails',
    options:{
        delay:5000,
        priority:3
    },
    async handle({data}){
       const {user} = data;
       await Mail.sendMail({
        from:"Teste <teste>",
        to:`${user.name} <${user.email}>`,
        subject:"Criacao de conta",
        html:`<h1>Ola,${user.name}</h1> <p>Obrigado por se registrar! </p>`
       })
       return true;
    }
}