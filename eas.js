function mkGrid (input) {
    const num = input;
    for (let i = 0; i < num; i++) {
        const container = document.querySelector('#container');
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
    };
};
mkGrid(prompt('enter a number!'));