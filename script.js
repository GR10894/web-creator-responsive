let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function () {
    // The text you want to copy
    let copytxt = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />';

    // Use the Clipboard API to copy text
    navigator.clipboard.writeText(copytxt).then(function () {
        // Change button text to "Copied"
        btn1.innerHTML = "Copied";

        // Reset the button text back to "Copy to clipboard" after 1 second
        setTimeout(function () {
            btn1.innerHTML = "Copy";
        }, 1000);  // 1000 milliseconds = 1 second
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
});

btn2.addEventListener('click', function () {
    // The text you want to copy
    let copytxt = "<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>";

    // Use the Clipboard API to copy text
    navigator.clipboard.writeText(copytxt).then(function () {
        // Change button text to "Copied"
        btn2.innerHTML = "Copied";

        // Reset the button text back to "Copy to clipboard" after 1 second
        setTimeout(function () {
            btn1.innerHTML = "Copy";
        }, 1000);  // 1000 milliseconds = 1 second
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });
});

let btn = document.getElementById("btn");

function toggleSidebar () {
    let menu = document.getElementById("nav");

    menu.classList.toggle('active');
} 