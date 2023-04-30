setInterval(printTime, 1000);

function printTime() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
}
