# Django Girls Events
Este projeto é um agregador de eventos para o Django Girls Brasil.

## Instalação
Neste projeto é utilizado o Pelican[http://docs.getpelican.com], para gerar os estáticos, e o Grunt[http://gruntjs.com/] para servir os arquivos no ambiente de desenvolvimento.

### Instalando dependências

Na raiz do projeto, para instalar o Pelican e suas dependências, execute:
```sh
pip install -r requirements.txt
```

Na raiz do projeto, para instalar o Grunt e suas dependências, execute:
```sh
npm install
```

## Executando localmente
Depois de instaladas as dependências, para executar este projeto localmente, digite na raiz do projeto:
```sh
grunt server
```
O grunt irá executar todas as tarefas e irá levantar um servidor em http://localhost:9000
Para acessar os estáticos gerados, acesse http://localhost:9000/output

## Adicionando o seu evento Django Girls
Para adicionar o seu evento, faça um fork deste projeto e altere o arquivo data/events.json com os seus dados.
Execute os testes e caso todos eles tenham passado, faça um pull request para este repositório.
O seu pull request sendo aceito, está pronto! Seu evento será listado na home do projeto.

##Dúvidas?
Envie um email para pgrangeiro.dev@gmail.com
