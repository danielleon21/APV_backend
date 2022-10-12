import sgMail from '@sendgrid/mail'

const emailolvidePassword = async (datos) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { email, nombre, token } = datos
    const msg = {
        to: email,
        from: 'matusleonc@outlook.com',
        subject: 'Reestablece tu Password',
        text: 'Reestablece tu Password',
        html: `
            <p>Hola ${nombre}, has solicitado reestablecer tu password </p>
            <p> Sigue el siguiente enlace para generar un nuevo password: 
            <a href='${process.env.FRONTEND_URL}/olvide-password/${token}'>Reestablecer Password </a> </p>
            <p> Si tu no pediste reestablecer tu contraseña, puedes ignorar este mensaje </p>
        `
    }

    sgMail.send(msg)
        .then(res => console.log(res))
        .catch(error => console.log(error.message))
}

export default emailolvidePassword