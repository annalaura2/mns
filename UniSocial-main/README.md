# UniSocial
```
Tecnologias: 
PHP 8.2
Laravel 10
MySQL 8+;
React JS 17.0.2
```

```
Utilizei o Create React APP então deixei em repositórios separados, para ter controle dos fluxo da aplicação e dos commits, segue os links do PHP e React. Mas esses links são apenas para visualizar o histórico de commits. Os arquivos PHP e React estão combinados em um único repositório. OBS: Modifique os nomes das pastas para lowercase para evitar conflitos.
Exemplos: UniSocial para unisocial, assim por diante. O mesmo para o diretório do React e do Laravel

UniPHP: https://github.com/educcarnn/UniPHP
UniReact: https://github.com/educcarnn/UniReact
```


Para executar o projeto, entre em cada pasta de arquivo, conforme a execução do projeto, primeiro do Laravel e depois o React


**Entre no diretório do react e siga os passos**
```
(Laravel)
1 - Entre no arquivo em PHP, certifique-se de ter o PHP versão 8.2 instalado, composer e MySQL versão 8+
2 - Após isso, entre no terminal de projeto, execute a série de comandos a seguir
```
**Rodar o Laravel**
```
# Instale as dependências do Composer
composer install

# Rodar o servidor
php artisan serve

# Copie o arquivo de configuração do ambiente (.env.example). 
    1° Mas isso é apenas para facilitar o processo, porque deve ser gerado o banco de dados local e importar o dump, com as seguintes orientações
    CREATE DATABASE teste(nome do banco de dados); - Através do terminal do MySql

    2° Após isso, utilize algum gerenciador de banco de dados como Dbeaver, faça a conexão e import o Dump 

    3° Antes de qualquer teste, atualize os dados do .env no laravel com suas credenciais

    - Gerar a key no laravel http://localhost:8000/
cp .env.example .env

O comando a seguir não é necessário, somente em caso do dump estiver com erro, para criar a migrations 
php artisan migrate

# Gere o link simbólico para armazenar imagens
php artisan storage:link

# Se necessário for, execute para ter permissões necessárias
chmod -R 755 public/storage


Dcoumentaçao para auxílio:
https://laravel.com/docs/10.x/filesystem
```
**Entre no diretório do react e siga os passos**
```
(React)
1 - Entre no arquivo em react, certifique-se de ter o Node LTS, yarn instalado
2 - Após isso, entre no terminal de projeto, e execute a série de comandos a seguir
```


**Rodar o React**
```
# Instale as dependências do projeto
yarn

# Execute o servidor
yarn start
```
**Pacotes externos**
```
Pacotes Externos (Node.js):
react-bootstrap: Versão mais recente
DraftJS: Versão mais recente
axios: Versão mais recente
react-fontawesome: Versão mais recente
```
