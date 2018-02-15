# design-project

This is a very simple form page composed from reusable components.

> atomic-design/src/assets/css/sass/
> atomic-design/src/assets/css/sass/addon contains the utilites for to keep up this codebase. And also contains reusable components, modules and builders.
I include this folder to all of my projects. And feed it with new resources from the project its included.

> atomic-design/src/assets/css/sass/config
> atomic-design/src/assets/css/sass/atoms
> atomic-design/src/assets/css/sass/molecules
> atomic-design/src/assets/css/sass/organisms
These folders are unique to this project and includes the pieces to make this project.

> atomic-design/src/assets/css/sass/organisms/_article.scss
is the file which includes the layout logic.

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
