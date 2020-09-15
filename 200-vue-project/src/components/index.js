// ./components/index.js - entry file for building the library.
// We're going to load all components in our lib and add
// them to the Vue global instance. This way, consuming developers
// can use the components without manually importing them.
// We only need to import the complete library in the consuming applications main.js.

// 1. import all the stuff we need
import Vue from 'vue';
import PkBanner from './pk-banner'
import PkButton from './pk-button'

// 2. create an object from our components
const components ={
    PkBanner,
    PkButton
};

// 3. iterate over the component object and add them to the global Vue instance
Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

// 4. export our components
export default components;
