### run this from the root
### ie ./scripts/build.sh
npm run build
docker build . -t vault-lend-fe:snapshot
docker run -p 8090:80 vault-lend-fe:snapshot