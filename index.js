/** Programme principal à exécuter **/

// importer le freamwork express
const express = require('express')

// initialiser express
const app = express()

// initlialiser le port :3001
const port = 3001

/** Javascript + HTML **/

// specifier le dossier pour les fichier statiques (html dans ce cas)
app.use(express.static(__dirname + '/public/'));

// initialisation du fichier principal
app.get('/', (req, res) => res.sendFile('index.html'))

/** Activer le serveur sur le port spécifié 3001  **/
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
