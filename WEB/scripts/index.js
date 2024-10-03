
// const homeListItem = document.getElementById("home-li");
// const pageNav = homeListItem.parentNode;
// console.log(pageNav);

const form = document.querySelector(".main-content__form");

const studentCourses = form.elements["studentCourses"];
console.log(studentCourses);

const attendenceForm = document.getElementById("attendenceForm");

attendenceForm.addEventListener("submit", (event) => { 
 event.preventDefault();   
const studentCourses = form.elements["studentCourses"];
console.log(studentCourses);
});

attendenceForm.addEventListener("mouseover", handleHighlight);
attendenceForm.addEventListener("mouseout", handleHighlight);

function handleHighlight(event) {
const input = event.target.closest("input");
    if (input) {
         if (event.type === "mouseover"){
                input.classList.add("highlighted");
            }
         else if (event.type === "mouseout"){
                input.classList.remove("highlighted");
            }
    }
};
