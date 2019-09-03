'use strict'

class UserController {

    async login({ auth, request, response }) {
       
        const { email, password } = request.all();
        try {
            await auth.attempt(email, password);
        }catch(err) {
            console.log(err); // Erro ao tentar logar
        }            
        
        response.redirect(`/users/${auth.user.id}`);
    }

    show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
            return "Você não pode ver o perfil de outro usuário";
        }
        return auth.user;
    }
}

module.exports = UserController
