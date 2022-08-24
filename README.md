# Desafio Nginx com Node.js

Repositório com solução do desafio proposto no módulo de Docker.

Para testar utilize:
```bash
docker compose up -d
```

Após utilização do comando a integração pode ser verificada na porta 8080.

---

### 1ª Funcionalidade 
Utilize o endpoint '/' para verificar Full Cycle Rocks! e lista de nomes cadastrada no banco de dados.

### 1ª Funcionalidade 
Utilize o endpoint '/add-name/:name' para cadastrar um nome no banco de dados, o endpoint utiliza o parametro name para cadastro.
Exemplo: para cadastrar Bruno utilize 'localhost:8080/add-name/Bruno'

### Disclaimer
No [Dockerfile](./node/Dockerfile) de configuração do container node há instrução 'RUN npm update -y', ainda que no [docker-compose](docker-compose.yaml) do projeto haja um volume configurado para o container da pasta node. A instrução foi adicionada apenas para que possa se testar a composição dos containers sem que seja necessário instalar localmente as dependências do [package.json](./node/package.json). 
