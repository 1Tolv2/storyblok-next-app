# Next.js + StoryBlok

This repository is built with Next.js and [Storyblok](https://www.storyblok.com) as the CMS. The front end is deployed with [Vercel](https://vercel.com) and the back end is hosted by Storyblok.

## Requirements
To use this project you will need the following:
- A Storyblok space. [Register here](https://app.storyblok.com/#/signup)
  
*To gain access to an existing space you need to be invited to it through email, contact the space admin.
**Admin**: To invite users to the space open the space, go to `Settings -> Users` and fill out the form.*

- An OpenWeather API key. [Register here](https://home.openweathermap.org/users/sign_up)
  
*To access the existing API key if you are cloning this repository continue further down to learn how to get it.*

## Get started

### 1. Clone/Fork the Repository
**Fork**: Click the fork button and then proceed to clone your new repository.
<img src="/public/fork-screen.png"/>
```sh
  $ git clone YOUR_REPO_LINK
```


**Clone**: Clone this repository.
```sh
  $ git clone https://github.com/1Tolv2/storyblok-next-app.git
```



### 2. Install Dependecies 
```sh
$  npm install
```

### 3. Adding Environment Variables
**Clone**: You can use the command line to fetch the variables, to do this. Proceed to step **a**.

**Fork**: You need to add the environment variables manually so proceed to step **b**.

#### **a. Through the Commandline**
For this you need the [Vercel CLI](https://vercel.com/docs/cli) installed, if you do not have it or wish to install it go to step **b**. 

You first need to link the project.
```sh
$ vercel link
``` 
Answer the questions and after it's done you can retrieve the environment variables from the vercel project. An `.env` file will be created at the root. 
```sh
$ vercel env pull
```

#### **b. Manually Creating the .env File**
Create an `.env` file at the root of the repository, make sure it's added in your `.gitignore`.
Add the following lines to your `.env` file with the access tokens/API keys. 

```js
NEXT_PREVIEW_STORYBLOK_ACCESS_TOKEN= //token here
NEXT_PUBLIC_OPENWEATHER_API_KEY= //token here
```

**Fork**: The storyblok token can be found in the project space under `Settings -> Access Tokens`.
Use the preview token for the draft version and public for published version.
The OpenWeather API key can be found on their website under `{Username}/API keys`.

**Clone**: You can get the keys from the same places as the above fork option but they are also saved as secrets in GitHub, to get them go to `{Repository name} -> Settings -> Environments`.

The Storyblok token is accessed by the page at `_app.js` in the `storyblokInit`.
```js
// in pages/_app.js
storyblokInit({
  accessToken: process.env.NEXT_PREVIEW_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});
```

### 4. Run Your Project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/` (You need to use the V1 version of Storyblok for this, V2 does not allow non https connections.)

To start up your project
```sh
# to run in developer mode
$ npm run dev # or yarn dev
```

## Deploy
This project deploys the front end to Vercel through github automatically when you push to a branch or publish a branch.

### **How To**
To deploy updates to production create a pull request in Github from development to main. In the pull request a check is made to see if the deploy is successful before allowing to merge in to production.

<img src="/public/pull-request-verification-screenshot.png" alt="screenshot of an approved pull request"/>

### **Difference Between Production and Development Deploys**

The production deployment in Vercel deploys with the **public access token**, so it will only display published content. The preview deployment deploys with the **preview access token** and is able to view both published and unpublished content.

#### **View unpublished content**
During development if you wish to see unpublished content, open one of the page files, for example `pages/index.js`, then uncomment the `version: "draft"`-line and the url will fetch with that parameter. 

`pages/index.js`
```js
  let sbParams = {
    // version: "draft", // or "published"
  };
```
