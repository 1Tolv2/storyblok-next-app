# Next.js + StoryBlok

This repository is built with Next.js and [Storyblok](https://www.storyblok.com) as the CMS.

## Requirements
To use this project you have to have access to the storyblok space, you get access by being invited to the space through email, contact the space admin. 

**Admin**: To invite users to the space an administrator opens the space, go to `Settings -> Users` and fill out the form.

## Get started?

### 1. Clone the repo

```sh
  $ git clone https://github.com/storyblok/react-next-boilerplate.git
```

### 2. Install all dependecies 
```sh
$  npm install # or yarn install
```

### 3. Adding environment variables
Create an `.env.local` file at the root of the repository.
Add the following line to it with the access token that can be found in the storyblok project space under `Settings -> Access Tokens`

```js
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN= //token here
```

```js
// in pages/_app.js
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
  components,
});
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/`

```sh
# to run in developer mode
$ npm run dev # or yarn dev
```

```sh
# to build your project
$ npm run build # or yarn build
```


## Deploy