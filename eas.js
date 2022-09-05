function mkGrid (input) {
    const num = (input );
    for (let i = 0; i < num; i++) {
        const container = document.querySelector('#container');
        const newDiv = document.createElement('div');
        newDiv.classList.add('column');
        container.appendChild(newDiv);
    }; 
    mkRow(num);

};
function mkRow (input) {
    const num = (input);
        const container = document.querySelectorAll('.column');
        container.forEach(row => {
            for (i = 0; i < num; i++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('row');
                row.appendChild(newDiv);
            };
        });
};

mkGrid(prompt('enter a number!'));