
import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shavers'

describe('login', () => {

    context('quando submeto o formulario', () => {


        it('deve logar com sucesso', () => {
            const user = {
                name: 'Teste',
                email: 'teste@teste.com',
                password: 'test123'
            }

            loginPage.submit(user.email, user.password)
            shaversPage.header.userShouldBeLoggedIn(user.name)
        })

        it('não deve logar com senha incorreta', () => {
            const user = {
                name: 'Teste',
                email: 'teste@teste.com',
                password: '123456'
            }

            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(message)

        })

        it('não deve logar com email não cadastrado', () => {
            const user = {
                name: 'Teste',
                email: '123@teste.com',
                password: 'test123'
            }

            loginPage.submit(user.email, user.password)

            const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
            loginPage.noticeShouldBe(message)

        })

        it('campos obrigatorios', () => {
            loginPage.submit()
            loginPage.requiredFields('E-mail é obrigatório', 'Senha é obrigatória')

        })
    })
})

context('senha muito curta', () => {

    const passwords = [
        '1',
        '12',
        '123',
        '1234',
        '12345'
    ]

    passwords.forEach((p) => {
        it(`não deve logar com a senha: ${p}`, () => {
            loginPage.submit('teste@teste.com', p)
            loginPage.alertShouldBe('Pelo menos 6 caracteres')

        })
    })
})

context('email no formato incorreto', () => {
    const emails = [
        'papito@',
        'teste.gmail.com.br',
        '@gmail.com',
        '@',
        'teste@',
        '123123',
        '@#@#!@!',
        'xpto123'
    ]

    emails.forEach((e) => {
        it(`não deve logar com o email: ${e}`, () => {
            loginPage.submit(e, 'test123')
            loginPage.alertShouldBe('Informe um email válido')
        })
    })

})

