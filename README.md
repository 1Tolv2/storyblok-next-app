# Next.js + StoryBlok

This repository is built with Next.js and [Storyblok](https://www.storyblok.com) as the CMS. The front end is deployed with [Vercel](https://vercel.com) and the back end is hosted by Storyblok.

## Requirements
To use this project you have to have access to the storyblok space, you get access by being invited to the space through email, contact the space admin. 

You need an [OpenWeather](https://openweathermap.org/) API key.

**Admin**: To invite users to the space open the space, go to `Settings -> Users` and fill out the form.

## Get started

### 1. Clone the Repository
```sh
  $ git clone https://github.com/storyblok/react-next-boilerplate.git
```

### 2. Install Dependecies 
```sh
$  npm install # or yarn install
```

### 3. Adding Environment Variables
If the project is already deployed to vercel you can use step **a.** to retrieve the variables directly from vercel. If your project is not deployed proceed to step **b.**
#### **a. Through the Commandline**
For this you need the [Vercel CLI](https://vercel.com/docs/cli) installed, if you do not have it or wish to install it go to step **b.**. You first need to link the project.
```sh
$ vercel link
``` 
Answer the questions and after it's done you can retrive the environment variables from the vercel project. An `.env` file will be created at the root. 
```sh
$ vercel env pull
```

#### **b. Manually Creating the .env File**
Create an `.env` file at the root of the repository, make sure it's added in your `.gitignore`.

Add the following lines to your `.env` file with the access tokens/API keys. The storyblok token can be found in the project space under `Settings -> Access Tokens`.
Use the preview token for the draft version and public for published version.
The OpenWeather API key can be found on on their website under {Username}/API keys 

```js
NEXT_PREVIEW_STORYBLOK_ACCESS_TOKEN= //token here
NEXT_PUBLIC_OPENWEATHER_API_KEY= //token here
```

```js
// in pages/_app.js
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
  components,
});
```

### 4. Run Your Project
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
This project deploys the front end to Vercel through github automatically when you push to a branch.

### **How To**
To deploy updates to production create a pull request in Github from development to main. In the pull request a check is made to see if the deploy is successful before allowing to merge in to production.

<img src="/public/pull-request-verification-screenshot.png" alt="screenshot of an approved pull request"/>

### **Difference Between Production and Development Deploys**

The production deployment in Vercel deploys with the **public access token**, so it will only display published content. The preview deployment deploys with the **preview access token** and will display unpublished content.

During development if you wish to see only the published content you can open the page file, for example `pages/index.js`, then uncomment the `version: "draft"`-line and the url will fetch with that parameter. *The draft version of the site can't be accessed by the public token*

```js
  let sbParams = {
    // version: "draft", // or 'published'
  };
```
