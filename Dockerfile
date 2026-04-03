# Base
FROM node:20-alpine
# Diretório de trabalho
WORKDIR /app

# Copia package.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia código
COPY . .

RUN mkdir -p uploads

# Gera Prisma Client
RUN npx prisma generate


# Expõe porta
EXPOSE 3001

# Comando padrão (produção)
# CMD ["npm", "run", "dev"]
CMD sh -c "npx prisma generate && npx prisma db push && npm run dev"