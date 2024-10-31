docker build . -t marciogh/vault-lend-be:snapshot
docker run -p 8080:8080 marciogh/vault-lend-be:snapshot
