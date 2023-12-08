import { sendMailForm } from "../emails/contactEmail.js"

const sendEmail = async(req, res) => {

    const { name, email, message } = req.body

    try {
        console.log(req.body)
        await sendMailForm(name, email, message)

        res.status(200).json({
            msg: 'Mensaje Enviado Correctamente'
        })
    } catch (error) {
        console.log(error)
    }

    
}


export{
    sendEmail
}