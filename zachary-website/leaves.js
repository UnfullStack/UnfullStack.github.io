// define random integer function
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// fetch all elements with leaves class
const items = document.querySelectorAll('.leaves');

// define a minimum and maximum for the width that we can change later
img_wmin = 200;
img_wmax = 285;

// loop through leave classes
items.forEach((item, _) => {
    // define duration and delay of each flutter animation
    const dur_x = `${randInt(6,14)/2}s`; 
    const del_x = `${randInt(0,600)}ms`;

    const dur_y = `${randInt(6,14)/2}s`; 
    const del_y = `${randInt(0,600)}ms`;

    const dur_r = `${randInt(7,25)/2}s`; 
    const del_r = `${randInt(0,600)}ms`;

    // width of image
    const img_w = `${randInt(img_wmin,img_wmax)/10}%`
    // change min and max
    img_wmin -= 100;
    img_wmax -= 100;


    // x offset of leaves
    const off_x = `${randInt(-5,80)}px`

    // chance to delete the leaves
    const del = randInt(0,4);

    if (del != 0) {
        // get each child/descendant
        const sub1 = item.querySelector("div");
        const sub2 = sub1.querySelector("img");

        // set properties
        item.style.setProperty('--dur', dur_x);
        item.style.setProperty('--delay', del_x);
        item.style.setProperty('--x-offset', off_x);

        sub1.style.setProperty('--dur', dur_y);
        sub1.style.setProperty('--delay', del_y);

        sub2.style.setProperty('--dur', dur_r);
        sub2.style.setProperty('--delay', del_r);

        sub2.style.setProperty('--wid',img_w);
    } else {
        // delete
        item.remove();
    }
});