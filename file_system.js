// Importez le module fs (file system)
var fs = require("fs");

// Définissez le contenu du fichier texte
const txt = "Hello Node";

// Ouvrez le fichier en mode 'a+' (lecture et ajout) 
fs.open('input.txt', 'a+', function(err, fd) {
    // Écrivez le texte dans le fichier
    fs.writeFile('input.txt', txt, function(err) {
        // Vérifiez s'il y a des erreurs lors de l'écriture
        if (err) {
            return console.error(err);
        }
        
        // Affichez un message si l'écriture est réussie
        console.log("Data written successfully!");
        console.log("Let's read newly written data");
        
        // Lisez le contenu du fichier de manière asynchrone
        fs.readFile('input.txt', function (err, data) {
            // Vérifiez s'il y a des erreurs lors de la lecture
            if (err) {
                return console.error(err);
            }
            
            // Affichez le contenu lu de manière asynchrone
            console.log("Asynchronous read: " + data.toString());
        });
    });
    
    // Vérifiez s'il y a des erreurs lors de l'ouverture du fichier
    if (err) {
        return console.error(err);
    }
});
