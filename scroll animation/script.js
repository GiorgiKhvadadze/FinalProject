const boxes = document.querySelectorAll('.box'); //es daamatebs node listivit (arraysavit)

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; //es gvadzlevs informacias elementis zomasa da poziciaze viewporttan shepardebit

        if(boxTop < triggerBottom){
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}