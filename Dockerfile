# Estágio de Construção
FROM node:18.14 as build

WORKDIR /usr/src/app

# Copia todos os arquivos do contexto para o WORKDIR
COPY . .

# Instala as dependências
RUN npm install

# Estágio de Produção
# Certifique-se de que o Node.js bin directory esteja no PATH para que o Angular CLI possa ser encontrado
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Exponha a porta 4200 (porta padrão do servidor de desenvolvimento do Angular)
EXPOSE 4200

# Comando para iniciar o servidor de desenvolvimento do Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
