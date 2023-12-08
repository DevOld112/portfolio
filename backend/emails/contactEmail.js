import { createTransport } from '../emails/nodemailer.js'

export async function sendMailForm (name, email, message){
    const transport = createTransport(
        "sandbox.smtp.mailtrap.io",
        2525,
        "6ae5edb847b1b7",
        "3165b1f1b8da93"
    )

    //Enviar el mail

    const info = await transport.sendMail({
        from: 'Nombre de Cliente Aqui',
        to: email,
        text: message,
        html: `
        <html>
            <head>
                <style>
                /* Agrega estilos CSS aquí */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f5f5f5;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 16px;
                    line-height: 1.5;
                    color: #555;
                }
                a {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                a:hover {
                    background-color: #0056b3;
                }
                </style>
            </head>
            <body>
                <div class="container">
                <h1>Hola, ${name} te ha dejado un mensaje: 
                
                <p>${message}</p>

                </h1>
                </div>
            </body>
            </html>
        `
    })
    console.log('Mensaje Enviado', info.messageId)
}