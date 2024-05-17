let skill_set = document.getElementById("skill-element").children;
const year_ele = document.getElementById("year");
const date = new Date();
year_ele.innerHTML = date.getFullYear();
for (let i = 0; i < skill_set.length; i++) {
    const element = skill_set[i];
    element['children'][1].style.width =  element['children'][0]['children'][1]['textContent'];
    
}


function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}
function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
    console.log(10);
}

