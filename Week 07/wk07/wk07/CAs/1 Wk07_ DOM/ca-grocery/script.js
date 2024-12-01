/*1a)
let hotItems = document.querySelectorAll('li.hot');

for (let i = 0; i < hotItems.length; i++) {
    hotItems[i].className = 'cool';
}*/


/*1b)
let hotItems = document.getElementsByClassName('hot');

if (hotItems.length >= 3) {
    hotItems[2].className = 'cool';
}*/

/*1c)
let listItems = document.getElementsByTagName('li');
let changed = false;

for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].className.includes('hot')) {
        listItems[i].className = 'cool';
        changed = true;
        break;
    }
}

if (changed) {
    console.log("First 'hot' element changed to 'cool'.");
}*/