import sgMail from '@sendgrid/mail'

const emailolvidePassword = async (datos) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { email, nombre, token } = datos
    const msg = {
        to: email,
        from: 'matusleonc@outlook.com',
        subject: 'Comprueba tu cuenta en APV',
        html: `
            <p>Hola ${nombre}, comprueba tu cuenta en APV </p>
            <p> Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace: 
            <a href='${process.env.FRONTEND_URL}/confirmar/${token}'>Comprobar Cuenta </a> </p>
            <p> Si tu no creaste esta cuenta, puedes ignorar este mensaje </p>
        `

    }

    sgMail.send(msg)
        .then(res => console.log(res))
        .catch(error => console.log(error.message))
}

export default emailolvidePassword