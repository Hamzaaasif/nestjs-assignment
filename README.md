<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

  
</p>


[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="https://nestjs.com/" target="_blank">NestJS</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.figma.com/file/l2nKqqGKGDhvk5uP5VUAcr/Sage-Advice?node-id=0%3A1" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="Figma Design" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Run Postgres docker container


```bash
docker run -d --name nestjs -p 5436:5432 -e POSTGRES_PASSWORD=postgres -e PGDATA=/var/lib/postgresql/data/pgdata -v <YOUR_LOCAL_PATH>:/var/lib/postgresql/data postgres:15.4
```
  
<b> `YOUR_LOCAL_PATH` ==> please replace this line to your local path where you want to mount postgres data </b>
# Installation
  
```bash
yarn  
```
## Running the app

### Running on the terminal

```bash
# development
$ yarn run dev

```
### Create a production build

```bash
# development
$ yarn run build

```
### Run production server

```bash
# development
$ yarn run start:prod

```

### Run with docker

```
docker-compose up
```

### Stop docker

```
docker-compose down
```
## License

Nest is [MIT licensed](LICENSE).
  

