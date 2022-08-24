# Desafio Nginx com Node.js

Repositório com solução do desafio proposto no módulo de Docker.

Para testar utilize:
```bash
docker compose up -d
```

Após utilização do comando a integração pode ser verificada na porta 8080.

Utilize o endpoint '/' para verificar Full Cycle Rocks! e lista de nomes cadastrada no banco de dados.

Utilize o endpoint '/add-name/:name' para cadastrar um nome no banco de dados, o endpoint utiliza o parametro name para cadastro.
Exemplo: para cadastrar Bruno utilize 'localhost:8080/add-name/Bruno'