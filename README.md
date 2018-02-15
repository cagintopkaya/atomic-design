# Atomic Design using SCSS and VueJS

This is a very simple form page composed from reusable components.

You can find the SASS sources in the path:
> atomic-design/src/assets/css/sass/

# Details
This addon folder contains the utilites to keep up this codebase. And also contains reusable components, modules and builders.
I include this folder to all of my projects. And feed it with new resources from the project it's included.
```
atomic-design/src/assets/css/sass/addon
```

These folders are unique to this project and contain the pieces to compose this page:

```
atomic-design/src/assets/css/sass/config
atomic-design/src/assets/css/sass/atoms
atomic-design/src/assets/css/sass/molecules
atomic-design/src/assets/css/sass/organisms
```
The file which includes the layout logic and a good start point to follow how I include components into page layout:
```
atomic-design/src/assets/css/sass/organisms/_article.scss
```
## Action

Please take a quick look at:
```
atomic-design/src/assets/css/sass/config/_buttons.scss
```
And how I use them in:
```
atomic-design/src/assets/css/sass/molecules/_content-footer.scss
```
To understand my DRY approach.

And please also see this configuration map:
```
atomic-design/src/assets/css/sass/molecules/_simple-form.scss
```
And how I use it in
```
atomic-design/src/assets/css/sass/organisms/_article.scss:77
```
Derived from this reusable SCSS plugin which I prepared for making forms:
```
atomic-design/src/assets/css/sass/addon/modules/simple-form/_simple-form.scss
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
