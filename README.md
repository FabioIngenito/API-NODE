Projeto de API REST com Node.js

TELA DO POSTMAN:

![image](https://github.com/FabioIngenito/API-NODE/assets/24603753/446be562-b04c-45a5-9779-1e8562770d82)

Username: fabioingenito
Password: ODLR2oMJ6Esnuz9Z

mongodb+srv://fabioingenito:<password>@cluster0.jb1bysb.mongodb.net/?retryWrites=true&w=majority
mongodb+srv://fabioingenito:ODLR2oMJ6Esnuz9Z@cluster0.jb1bysb.mongodb.net/?retryWrites=true&w=majority

---

## config/dbConnect.js

import mongoose from 'mongoose';
import 'dotenv/config';

// 'mongodb+srv://admin:admin123@cluster0.jb1bysb.mongodb.net/retryWrites=true&w=majority',
// 'mongodb+srv://admin:admin123@cluster0.jb1bysb.mongodb.net/senacPetShop?retryWrites=true&w=majority',

// async function conectarDataBase() {
// mongoose.connect(
// 'mongodb+srv://admin:admin123@cluster0.jb1bysb.mongodb.net/senacPetShop?retryWrites=true&w=majority',
// );

async function conectarDataBase() {
mongoose.connect(process.env.DB_CONNECTION_STRING);

return mongoose.connection;
}

export default conectarDataBase;

---

Arquivo: ".env" na raiz:

// Enviroment - Variáveis de ambiente

PORT = 3000
DB_CONNECTION_STRING = mongodb+srv://admin:admin123@cluster0.jb1bysb.mongodb.net/senacPetShop?retryWrites=true&w=majority
