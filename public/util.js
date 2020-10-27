const textarea = document.querySelector("textarea");

//Display characters limit on window load
window.addEventListener("load", event => {
    const target = document.querySelector("textarea");
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    if (currentLength >= maxLength) {
        document.getElementById('charNum').innerHTML = "You have reached the maximum number of characters.";
        console.log("You have reached the maximum number of characters.");
        return;
    }

    console.log(`${maxLength - currentLength} chars left`);
    let charCount = maxLength - currentLength;
    document.getElementById('charNum').innerHTML = charCount + " chars left.";
});

//Display characters limit on edit
textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    //Get TextArea MaxLength from index.html
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;

    if (currentLength >= maxLength) {
        document.getElementById('charNum').innerHTML = "You have reached the maximum number of characters.";
        console.log("You have reached the maximum number of characters.");
        return;
    }

    console.log(`${maxLength - currentLength} chars left`);
    let charCount = maxLength - currentLength;
    document.getElementById('charNum').innerHTML = charCount + " chars left.";
});
