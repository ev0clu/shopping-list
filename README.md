# **Shopping List App**

A shopping list full stack CRUD app has built with Next.js framework, TailwindCSS, Express.js, PostgreSQL, Docker and more. The app allows users to log in and create grocery list for independent glocery stores in order to be more productive their next shopping activity. User also can remove or update the already created items.

### Login:

- email: test@example.com
- password: 1234

<!--### Demo video: [Link](https://github.com/ev0clu/shopping-list/blob/main/demo.mp4)-->

## Features

- Allow user to sign up and sign in to the platform
- Users can share their list with users are outside of the platform
- Users can add other into their list in order to manage the hop together
- Authorized users can see their profile informations
- Typescript is used on frontend and backend to ensure everyting are type safety
- Next.js full stack framework is used
- React Hook form used to create forms
- Zod used for form validation
- TailwindCSS is used to stlye components
- Toast notification use to improve UX
- Responsive design for mobile and desktop as well
- Tanstack query is used to fetch data from the API and cache them
- PostgreSQL is used to store data
- Docker is used to run database locally
- Credentials is used to handle authorization and allow users to access to the platform

## How to run from local repository

### Docker

Install Docker and Docker compose. Docker desktop automatically installs Docker Compose, but you can install it separately also.

- [Docker](https://docs.docker.com/desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Appp

1. Clone the repository
2. Create `.env.local` file and add enviromental variables according to the `.env.example`
3. Run `npm install` command in your terminal
4. Run _docker-compose.yml_ file:

   ```
   docker compose --env-file .env.local -f docker-compose.yml -p shopping-list-dev up -d
   ```

5. Run `npm run prisma:migrate` to migrate and push the schema to database
6. Run `npm run prisma:seed` to seed the database with default items.
7. Run `npm run dev`
8. Backend server running at `http://localhost:3000/`
9. Run `npm run prisma:studio` if you would like to see the database content<br>

If you want to reset the database run `npx prisma db push --force-reset` then seed the db again with `npm run prisma:seed`

## How to self-hosted with Docker container in the same machine

### Preparation

1. Clone the repository
2. Create `.env.local` file and add enviromental variables according to the `.env.example`:

```env
NODE_ENV=development

NEXT_PUBLIC_NODE_ENV=development
NEXT_PUBLIC_PRODUCTION_HOST=https://example.com
```

Rename `Dockerfile.example` to `Dockerfile` and add the same variables into the **ENV** section with the correct _values_ and _keys_

0. Docker setup:

- Install [Docker](https://docs.docker.com/get-started/get-docker/) on your machine.
- You need to have the `Dockerfile` in the root folder with the same content as it is in this repository already (add **ENV** according to the previous section). Need to update the `next.config.mjs` same as it is in this repository also.

1. Build your container: `docker build -t nextjs-shopping-list .`
2. Run your container: `docker run -p 3000:3000 nextjs-shopping-list`
3. Next.js server running at `http://localhost:3000/`

## How to self-hosted with Docker container in Machine-B

0. Docker setup:

- Install [Docker](https://docs.docker.com/get-started/get-docker/) on your machine.
- You need to have the `Dockerfile` in the root folder with the same content as it is in this repository already (add **ENV** according to the previous section). Need to update the `next.config.mjs` same as it is in this repository also.

0. Check docker is active: `systemctl is-active docker`.
1. Build your container: `docker build --platform linux/amd64 -t nextjs-shopping-list .` If you get error: _ERROR: Cannot connect to the Docker daemon at unix:///home/path-to-docker/.docker/desktop/docker.sock. Is the docker daemon running?_, than you should run the followings: `sudo systemctl start docker`, `sudo systemctl enable docker`, `export DOCKER_HOST=unix:///var/run/docker.sock`. Now you can try to build the image again.
2. Save docker image into **\*.tar** file in the project root folder: `docker save -o nextjs-shopping-list.tar nextjs-shopping-list`
3. Copy **\*.tar** file into the Machine-B `scp /path-to-tar-file/nextjs-shopping-list.tar machine-b-username@192.xxx.x.xx:/path-to-machine-b-folder/`
4. Load docker container: `docker load -i /path-to-machine-b-folder/nextjs-shopping-list.tar`<br/>
   You can check the does the image exist: `docker images`
5. Run your container: `docker run -d --name nextjs-shopping-list -p 3000:3000 nextjs-shopping-list`<br/>
6. Next.js server running at `http://192.xxx.x.xx:3000/`
7. Redeploy new version:<br/>

- Remove previous container. Run `docker container ls` than `docker container rm -f <container-name>`
- Remove previous image. Run `docker image ls` than `docker image rm -f <image-name>`

## Useful links and informations

- Open SSL key generation for secret key:
  - You can use the following link to create open ssl key: `https://www.cryptool.org/en/cto/openssl` or you can install open ssl and generate key from terminal. To generate code you should run: `openssl rand -base64 32`
- Next.js standalone build for Docker:
  - [Next.js](https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files)
  - [GitHub](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- React Hook Form usage with UI component needs to has `ref={null}` property to avoid ref warning:
  - [Stackoverflow](https://stackoverflow.com/questions/67877887/react-hook-form-v7-function-components-cannot-be-given-refs-attempts-to-access)
  - [GitHub](https://github.com/react-hook-form/react-hook-form/issues/3411)
  - Self-hosted with cloudflare dns:
  - [Cloudflare Archive](https://community.cloudflare.com/tdeprecated-redirect-www-example-com-to-example-com/78347)
  - [Cloudflare test redirection](https://community.cloudflare.com/t/redirect-to-non-www/596929)
  - Self-hosted NGINX Proxy Manager
  - [Youtube #1](https://www.youtube.com/watch?v=qlcVx-k-02E)
  - [Youtube #2](https://www.youtube.com/watch?v=GarMdDTAZJo)

## Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Sonner toast](https://sonner.emilkowal.ski/)
- [Lucide icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)
- [Tanstack Query](https://tanstack.com/query/latest)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/)

### Layout

![layout1 picture](https://github.com/ev0clu/shopping-list/blob/main/layout1.png?raw=true)
