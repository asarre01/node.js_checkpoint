// Importez le module generate-password
var generator = require('generate-password');

// Générez un mot de passe avec des caractéristiques spécifiées
var password = generator.generate({
    length: 10,      // Longueur du mot de passe
    numbers: true,   // Inclure des chiffres dans le mot de passe
    symbols: true    // Inclure des symboles dans le mot de passe
});

// Affichez le mot de passe généré dans la console
console.log("Voici le mot de passe généré : ", password);
