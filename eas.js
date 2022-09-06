const reset = document.querySelector('.btn');
reset.addEventListener('click', resetBoard);

function mkRow (input) {
    const num = (input );
    if (num > 100) { (mkRow(prompt('Number must be under 100!'))); return;};
    for (let i = 0; i < num; i++) {
        const container = document.querySelector('#container');
        const newDiv = document.createElement('div');
        newDiv.classList.add('column');
        container.appendChild(newDiv);
    }; 
    mkGrid(num);

};

function mkGrid (input) {
    const num = (input);
        const container = document.querySelectorAll('.column');
        container.forEach(row => {
            for (i = 0; i < num; i++) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('row');
                row.appendChild(newDiv);
            };
        });
        activateRows()
};

function resetBoard (e) {
    const columns = document.querySelectorAll('.column');
    const rows = document.querySelectorAll('.row');
    columns.forEach(column => {
        column.remove()
    });
    rows.forEach(row => {
        row.remove()
    });
    mkRow (prompt('enter a number!'));
}

    mkRow(16)

function activateRows() {
    const boxes = document.querySelectorAll('.row')
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => 
        box.classList.add('highlight')
        )});
};