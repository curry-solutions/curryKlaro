# curryKlaro! A Powerful Consent Manager

**This is a fork of the great [Klaro](https://klaro.kiprotect.com/) consent manager.**

curryKlaro [klɛro] is a simple consent manager that helps you to be transparent about the third-party applications on your website. It is designed to be extremely simple, intuitive and easy to use while allowing you to be compliant with all relevant regulations (notably GDPR and ePrivacy).

**You can have a look on curryKlaro on our [Live-Demo](https://dmoedetc.github.io/curryKlaro/).**

## Table of contents

-   [Advantages](#Advantages)
-   [Getting started](#Getting-started)
-   [Managing third-party apps/trackers](#Managing-third-party-apps/trackers)
-   [Configuration file](#Configuration-file)
-   [Building Klaro from scratch](#Building-Klaro-from-scratch)
-   [Klaro functions](#Klarofunctions)
-   [Contributing](#Contributing)
-   [License & third-party libraries](#License-&-third-party-libraries)
-   [Troubleshooting](#Troubleshooting)

## Advantages

-   **Free and Open Source**: No hidden fees, subscriptions or restrictions.
-   **Easy to use**: Simply add a small JS snippet and config to your site and
    you're ready to go!
-   **Flexible and customizable**: Manage consent for all possible types of
    third-party apps and easily customize the tool according to your needs.
-   **Multilingual**: Full internationalization support, with languages included out of the box. New translations can be added in just a few lines of code. Contributions welcome!\
    Current languages: Catalan, Croatian, Dutch, English, Finnish, French, German, Greek, Hungarian, Italian, Norwegian, Romanian, Serbian (Latin and Cyrillic), Spanish, Swedish, Turkish
-   **Small footprint**: The minified+gzipped JS is only 37 kB and contains
    everything that is required, including style sheets and translations.
-   **Intuitive and responsive**: Klaro is designed to blend in with
    your existing design and optimized for modern desktop and mobile browsers.
-   **Secure and reliable**: Klaro ensures that no third-party apps or
    trackers are executed without the consent of the user, even when
    JavaScript is disabled or Klaro itself gets blocked.

## Getting started

To use the widget on your website, simply download the latest released [curryKlaro.js](https://dmoedetc.github.io/curryKlaro/curryKlaro.js) and have a look at the example config [config.js](https://dmoedetc.github.io/curryKlaro/configs/doe.js). Follow the instructions below to adapt the config to your needs and then include the two files in your website like this:

```html
<script defer type="text/javascript" src="config.js"></script>
<script defer type="text/javascript" src="curryKlaro.js"></script>
```

Do not forget to change your existing apps/trackers as outlined in the next section as well so that Klaro can manage them. Klaro will automatically open on page load.

We also provide a version of Klaro without stylesheets included (which is useful
in case you want to provide your own stylesheet), [curryKlaro-no-css.js](https://dmoedetc.github.io/curryKlaro/curryKlaro-no-css.js). If you use this, make sure to either include
your own styles or to include [curryKlaro.min.css](https://dmoedetc.github.io/curryKlaro/curryKlaro.min.css) like this:

```html
<link rel="stylesheet" href="curryKlaro.min.css" />
```

We also provide a simple to edit [.scss](https://github.com/DMOEdetc/curryKlaro/tree/master/src/scss) versions of the stylesheets, which is great if you want to make curryKlaro perfectly fit into your project.

If you wish to open the consent manager manually on user interaction (for example through a link in the privacy policy), you can use the `klaro.show()` global. Example:

```html
<a class="button is-success" onclick="return klaro.show();"
    >Change consent settings</a
>
```

## Managing third-party apps/trackers

To manage third-party scripts and ensure they only run if the user consents with their use, you simply replace the `src` attribute with `data-src`, change the `type` attribute to `text/plain` and add a `data-type` attribute with the original type, and add a `data-name` field that matches the name of the app as given in your config file. Example:

```html
<script
    type="text/plain"
    data-type="text/javascript"
    data-name="optimizely"
    data-src="https://cdn.optimizely.com/js/10196010078.js"
></script>
```

Klaro will then take care of executing the scripts if consent was given (you can chose to execute them before getting explicit consent as well).

The same method also works for images, stylesheets and other elements with a `src` or `type` attribute.

### Configuration file

The consent manager is configured using a config dictionary, which you typically define in a separate JS file. To learn more, simply read the [annotated example config](dist/config.js), which contains descriptions of all valid config options and parameters.

## Building Klaro from scratch

If you want to customize Klaro or extend it, you can build it from scratch using the following commands:

```sh
npm install
npm start #will run a development server
npm run-script build #will build the production version with included styling
```

If the npm installation failed or the make-script does not work try

```sh
npm run-script reinstall #will remove the node_modules folder and reinstall dependencies
```

# Klaro functions

Reset consent:

```js
klaro.getManager().resetConsent();
```

## Contributing

Want to contribute? We'd love that!

Well soon provide a funktion to contribute.

If you are multilingual, consider contributing a translation we don't have yet.

## License & third-party libraries

This project is licensed under a BSD-3 license. A list of third-party libraries can be found in the [package.json](package.json) file.

The accompanying website uses [Bulma](https://bulma.io), [Bootstrap](https://getbootstrap.com) and [Prism](http://prismjs.com/) and a [surveillance camera image](https://upload.wikimedia.org/wikipedia/commons/5/56/Surveillance-camera.png) from Wikipedia.

## Troubleshooting

Do you have problems using Klaro? If so, we want to know it! Just open an issue here and if possible provide the following information to us:

-   The website on which curryKlaro is installed (if possible)
-   The config file you're using (a link is sufficient)
-   The version of curryKlaro that you're using (you can get this by opening the developer tools of your browser, going to the "Console" tab and typing `klaro.version()` in the JS console.)
