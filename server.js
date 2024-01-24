// Importez le module http
var http = require('http');

// Créez un serveur HTTP qui répond avec du texte brut
http.createServer(function (request, response) {
    
    // Configurez l'en-tête de la réponse avec le code de statut 200 et le type de contenu texte
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Envoyez la réponse au client avec le texte HTML <h1>Hello Node!!!!</h1>
    response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);
