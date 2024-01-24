// Importez la bibliothèque nodemailer
var nodemailer = require('nodemailer');

// Créez un transporteur nodemailer avec Gmail comme service de messagerie
var transporter = nodemailer.createTransport({
    service: 'gmail',          // Utilisez Gmail comme service de messagerie
    host: 'smtp.gmail.com',    // Définissez le serveur SMTP pour Gmail
    port: 587,                 // Utilisez le port 587 pour la connexion sécurisée
    secure: false,             // Définissez secure sur false car nous utilisons le port 587
    auth: {
        user: 'exemple1@gmail.com',  // Votre adresse e-mail Gmail
        pass: 'exemple'             // Votre mot de passe Gmail
    }
});

// Définissez les options de l'email
var mailOptions = {
    from: 'exemple1@gmail.com',  // Adresse e-mail de l'expéditeur
    to: 'exemple2@gmail.com',    // Adresse e-mail du destinataire
    subject: 'Envoie mail avec nodemailer.',  // Sujet de l'email
    text: 'Ceci est un mail envoyé avec nodemailer.'  // Corps de l'email
};

// Envoyez l'email
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        // S'il y a une erreur, enregistrez les détails de l'erreur
        console.log(error);
    } else {
        // Si l'email est envoyé avec succès, enregistrez les détails de la réponse
        console.log('Email envoyé : ' + info.response);
    }
});
