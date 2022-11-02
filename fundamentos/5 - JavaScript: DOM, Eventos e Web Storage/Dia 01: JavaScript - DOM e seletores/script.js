const emergencyTasks = document.getElementsByClassName('emergency-tasks');

function change1() {
    emergencyTasks[0].style.backgroundColor = "salmon";
    return;
}

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks');

function change2 () {
    noEmergencyTasks[0].style.backgroundColor = 'rgb(255, 255, 153)';
    return;
}

const h3EmergencyTasks = emergencyTasks[0].getElementsByTagName('h3');

function change3() {
    h3EmergencyTasks[0].style.backgroundColor = 'purple';
    h3EmergencyTasks[1].style.backgroundColor = 'purple';
}

const h3NoEmergencyTasks = noEmergencyTasks[0].getElementsByTagName('h3');

function change4() {
    h3NoEmergencyTasks[0].style.backgroundColor = 'black';
    h3NoEmergencyTasks[1].style.backgroundColor = 'black';
}

const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(112, 219, 112)';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(13, 38, 26)';

// function opacity(dom) {
//     dom[i].style.opacity = 0.00;
//     for (let i = 0; i < dom.length; i += 1) {
//         if (dom[i].style.opacity < 1) {
//             dom[i].style.opacity += 0.01;
//         }
//     }
// }

change1();
window.setTimeout(h3EmergencyTasks[0].style.opacity = 0, 8000);
window.setTimeout(change2, 4000);
window.setTimeout(change3, 6000);
window.setTimeout(change4, 8000);