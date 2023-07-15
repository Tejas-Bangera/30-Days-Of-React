# Basic Registration Form

![Registration form](./screenshots/image-1.png)

- In this project I worked on developing a registration form with **form validations**.
- I created a reusable `FormInput` component that provides a label and an input which I used in the form for various inputs like `username`, `email`, `password` etc.
- I used props to provide the input `type`, `pattern`, `required` attributes to the input.
- The error message is shown only `onBlur` if the input is invalid made possible using some css rules (available in the `formInput.css` file).

This is a `STATIC` registration form with the following validations,

## 1. Username Validation

![Username validation](./screenshots/image-2.png)

I used the `pattern` attribute to provide the below regular expression for validation.

```bash
# The username must not include any special characters
# and must be 3 to 16 characters in length

[a-zA-Z0-9]{3,16}
```

## 2. Email Validation

![Email validation](./screenshots/image-3.png)

I used the input `type` as email and the `required` attribute for this.

## 3. Password Validation

![Password validation](./screenshots/image-4.png)

I used the `pattern` attribute to provide the below regular expression for validation.

```bash
# The password must include atleast 1 uppercase - (?=.*[A-Z])
# Atleast 1 special character - (?=.*[^a-zA-Z0-9])
# Atleast 1 number - (?=.*[0-9])
# and should be minimum 8 characters in length

^(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,}$
```

## 4. Confirm Password Validation

![Confirm Password validation](./screenshots/image-5.png)

For the confirm password validation the confirm password input must match the password input.

## CSS Rule for validation error

```css
/* Span => Error message */
span {
  font-size: 12px;
  padding: 3px;
  color: red;
  /* Initially hidden */
  display: none;
}

/* On invalid input */
input:invalid[focused="true"] {
  /* Change input border for error */
  border: 1px solid red;
}

/* On invalid input */
input:invalid[focused="true"] ~ span {
  /* Display the Span Error message */
  display: block;
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
