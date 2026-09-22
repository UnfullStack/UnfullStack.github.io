// check if the navigation bar is not running in an iframe

// if so, redirect

// yes, this is optional, but I just don't want people going to the bar page by itself as
// it's not exactly an intented feature of the website
if (window.self == window.top) {
    window.location.replace("index.html");
}