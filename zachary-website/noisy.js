const canv = document.querySelector(".noisy");
const ctx = canv.getContext("2d");

count = 0;

// define a function to write to the canvas
function draw_noise() {
    const imgData = ctx.createImageData(canv.width, canv.height);

    for (let i = 0; i < imgData.data.length; i += 4) {
        // fetch the x and y by doing some math
        // I could just loop through the width and height instead but I don't feel like it
        const x = Math.floor(i/4 % canv.width);
        const y = Math.floor(i/4 / canv.height);

        // use noisejs to generate noise
        val = noise.simplex3(x / 100, y / 100, count/32000000);
        val = (val+1)*14;

        imgData.data[i] = val;
        imgData.data[i + 1] = val;
        imgData.data[i + 2] = val;
        imgData.data[i + 3] = 255;

        count += 1;    
    }

    ctx.putImageData(imgData,0,0);
}

// run the function on an interval
setInterval(draw_noise,1);