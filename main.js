

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#cc5500";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#ff6600";
        });
    });
});

let divHideHbilities = document.getElementById('habilities-hide');
let divAllHabilities = document.getElementById('all-habilities');

divHideHbilities.addEventListener('click', () => {
    if(divAllHabilities.style.display == 'none'){
        divAllHabilities.style.display = 'flex';
    }else{
        divAllHabilities.style.display = 'none';
    }
});