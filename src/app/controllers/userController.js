import ShortUniqueId from "short-unique-id";
import Queue from "../lib/Queue/Queue";
const { randomUUID } = new ShortUniqueId({ length: 10 });
export default {
    async store(req, res) {
        const { name, email } = req.body;
        const user = {
            name,
            email,
            senha: randomUUID()
        };
        await Queue.add('registrationEmails',{user}).then(()=>{
            return res.json('Email Enviado!')
        }).catch(err=>{
            return res.json(err)
        })
        
    }
}