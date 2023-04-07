Detalhes sobre o cypress:
Plataforma para desenvolver e testar em JavaScript
Executa teste automatizado WEB - E2E
Executa teste API
O cypress idenditifca o browser instalado na sua máquina
Não usa selenium

Devemos:
Montar uma arquitetura limpa
Utilizar Page Object
Construir o teste com a linguagem Gherkin
Criar a automatizado API (Integração)


Pacote de instalação

Instalar o node.js atualmente estou utilizando v12.16.1
abrir cmder
Criar pasta com o comando: mkdir projeto
Pelo cmder entrar na pasta projeto
Instalar package.json para criar script de configuração, utilize o comando: npm init -y 
Instalar cypress com o comando: npm install cypress
Caso queira baixar uma versão específica, bastar colocar a extensão @3.6.0
exemplo: npm install cypress@3.6.0
Utilizar o editor de texto recomendando o VS Cold 

Abrir visual studio: 
Digitar o comando code .
No CMDER e no endereço da pasta do projeto.

Pelo cmder utilizar o comando npx cypress open, para abrir o console do cypress
Utilizar a interface do cypress para executar os testes automatizados
 1 Selecione o teste que deseja executar
 2 clicar em run

Comandos úteis:
Para mudar a resolução da tela, coloque dentro do cypress.config.js o comando:
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
E a numeração da resolução que desejar 

Instalar um pacote de dependencia que irá conectar com banco de dados
npm install pg --save-dev

Pelo visual studio code vc deve abrir o arquivo package.json para confirmar a instalação
  ],
  "author": "Ricardo Amorim",
  "license": "ISC",
  "devDependencies": {
    "cypress": "^12.7.0",
    "pg": "^8.10.0"   <<---------------
  }
}
