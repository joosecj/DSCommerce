<h1 align="center">DSCommerce</h1>

<p align='center'> 
    <img src="https://img.shields.io/badge/Spring_Boot  V2.7.3-F2F4F9?style=for-the-badge&logo=spring-boot"/>
    <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"/>  
    <img src="https://img.shields.io/badge/JWT-F2F4F9?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=black"/>
    <img src="https://img.shields.io/badge/IntelliJ_IDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white"/>
</p>    

Projeto desenvolvido teve o objetivo de criar um API Rest e-commerce, utilizando os padrões de arquitetura em camadas, onde e possível cadastrar um cliente  com nível de autorização, e esse cliente pode cadastrar produtos (caso seja administrador) e selecionar produtos para o carrinho para realizar a compra, e foi o tratamento de suas exceções personalizadas.

<h2>Veja o projeto</h2>

Experimente live demo:

<p align='center'> <img src="https://i.imgur.com/r7Giga8.gif"/></p>



<h2>Como criar e executar o DSCommerce localmente</h2>

Criar e executar o projeto em seu ambiente de desenvolvimento local é muito fácil. Certifique-se de ter o Git e JDK17 instalados e siga as instruções abaixo. Precisa de informações adicionais? entre em contato no e-mail josecarloscjj@gmail.com 
(Estas instruções pressupõem que você esteja instalando como um usuário root.)

- Clone o código fonte

   `git@github.com:joosecj/DSCommerce.git`

- Em sua IDE de preferência(utilizei Intellij), importe a pasta **backend** e faça o update das dependências do **maven**.

- Ao executar o projeto, pode ser acessado um navegador da Web em http://localhost:8080/

- Collections do postman para fazer as requisições GET/PUT/DELETE E UPDATE para criação do usuário, lançar as pedidos e consultar todos os produtos. Obs: Será necessário configurar a variáveis de ambiente no postman.  

   - Dados para login: e-mail. 

   - senha: 123456

      

- Link da Collections do postman: https://www.getpostman.com/collections/2d18991dfa57a1f44592



<h2>Tecnologias utlizadas</h2>

- Java
- Springboot
- JPA
- Maven
- H2 Database
- Postman
- OAuth2
- JWT