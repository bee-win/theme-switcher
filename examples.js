// let buttons = document.getElementsByTagName('instructions');
// console.log(buttons)

let instructions = document.querySelector('#instructions');
instructions.innerText = 'Choose a Theme'
instructions.className = 'new-class'
console.log(instructions)


let fbButton = document.querySelector('.facebook-btn');
fbButton.classList.add('new-class')
fbButton.style.color = 'green'
console.log(fbButton.classList)
console.log(fbButton.className)
console.log(fbButton)

// let buttons = document.querySelectorAll('button');
// console.log(buttons)

// let buttonsByTagName = document.getElementsByTagName('button');
// console.log(buttonsByTagName)

function submit() {
    alert('Post has been submitted!');
};

let submitBtn = document.querySelector('.submitButton');
submitBtn.addEventListener('click', submit);