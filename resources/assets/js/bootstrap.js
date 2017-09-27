
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

// Individual modules to not trigger the Tether dependency
require('bootstrap/dist/js/umd/util');
require('bootstrap/dist/js/umd/alert');
require('bootstrap/dist/js/umd/button');
require('bootstrap/dist/js/umd/collapse');
require('bootstrap/dist/js/umd/dropdown');
require('bootstrap/dist/js/umd/modal');
require('bootstrap/dist/js/umd/tab');

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
