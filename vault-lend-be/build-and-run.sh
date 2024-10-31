docker build . -t vault-lend-be:snapshot
docker run -p 8080:8080 vault-lend-be:snapshot
