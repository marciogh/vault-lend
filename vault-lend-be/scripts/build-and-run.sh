docker build . -t vault-lend-be:snapshot
docker run -p 8081:8081 vault-lend-be:snapshot
