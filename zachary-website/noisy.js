// grab the canvas and the context that lets us draw
const canv = document.querySelector(".noisy");
const ctx = canv.getContext("2d");

count = 0;

// define a function to write to the canvas
function draw_noise() {
    // make new image data to paste onto the canvas
    const imgData = ctx.createImageData(canv.width, canv.height);

    // loop through the entries of the data
    for (let i = 0; i < imgData.data.length; i += 4) {
        // fetch the x and y by doing some math
        // I could just loop through the width and height instead, but I think then I'd have to use math to insert the values        const x = Math.floor(i/4 % canv.width);
        const x = Math.floor(i/4 % canv.width);
        const y = Math.floor(i/4 / canv.height);

        // use noisejs to generate noise
        // there's a lot of divisors because of how small the actual "blobs" of perlin noise are
        val = noise.simplex3(x / 100, y / 100, count/32000000);
        val = (val+1)*16;

        // set the rgba values
        // red, green, and blue are all the noise value, leading to a shade of white or plain brightness, whatever you'd like to call it
        // alpha is 255 so that it is fully opaque
        imgData.data[i] = val;
        imgData.data[i + 1] = val;
        imgData.data[i + 2] = val;
        imgData.data[i + 3] = 255;

        count += 1;    
    }

    ctx.putImageData(imgData,0,0);
}

// run the function on an interval of 1ms
setInterval(draw_noise,1);