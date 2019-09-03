'use strict'

class AuthController {

    async login({ auth, request, response }) {
       
        const { email, password } = request.all();
        try {
            await auth.attempt(email, password);
        }catch(err) {
            console.log(err); // Erro ao tentar logar
        }            
        
        response.redirect(`/index`);
    }
}

module.exports = AuthController
