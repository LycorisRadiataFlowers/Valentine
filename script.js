const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.getElementById('successMessage');
let clickCount = 0;
const fontSizeIncrements = [16, 20, 24, 28, 32, 36, 40];
const paddingIncrements = [15, 18, 22, 26, 30, 35, 40];

noBtn.addEventListener('click', function() {
    clickCount++;
    
    // Increase the size of the YES button
    if (clickCount < fontSizeIncrements.length) {
        yesBtn.style.fontSize = fontSizeIncrements[clickCount] + 'px';
        yesBtn.style.padding = paddingIncrements[clickCount] + 'px ' + 
                              (paddingIncrements[clickCount] * 2) + 'px';
    } else {
        // If we've run out of increments, just keep increasing
        const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
        const currentPadding = parseInt(window.getComputedStyle(yesBtn).paddingTop);
        yesBtn.style.fontSize = (currentSize + 4) + 'px';
        yesBtn.style.padding = (currentPadding + 5) + 'px ' + (currentPadding * 2 + 10) + 'px';
    }
    
    // Move the NO button randomly
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

yesBtn.addEventListener('click', function() {
    document.querySelector('.buttons').classList.add('hidden');
    successMessage.classList.remove('hidden');
    
    // Change the GIF to a celebration one
    document.querySelector('.gif-container img').src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGJjY2V0Y3Q0c2RqY3J1b2R3Z2h3eW1xNnV3bDZ3d2NwZzR5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMHxhOfscxPfIfm/giphy.gif';
});
