document.addEventListener("DOMContentLoaded", function() {
    const parentCheckbox = [...document.querySelectorAll('.interest__check')];
    for (let el of parentCheckbox){
        el.addEventListener('change', () =>{
                console.log((el.closest('.interest')).querySelectorAll('ul'));
                for(els of (el.closest('.interest')).querySelectorAll('li')){
                    let childrenCheckboxes = els.querySelector('input');
                    childrenCheckboxes.checked = el.checked;
                }
            })
        }
    })