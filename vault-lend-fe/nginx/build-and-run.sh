docker build . -t vault-lend:snapshot
docker run -p 8100:80 vault-lend:snapshot
