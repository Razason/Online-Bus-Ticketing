// let toggle = document.querySelector(".toggle");
// let adminNavigation = document.querySelector(".adminNavigation");
// let adminMain = document.querySelector(".adminMain");

// toggle.onclick = function (){
//     adminNavigation.classList.toggle("active");
//     adminMain.classList.toggle("active");
// }

// //hover class to the selected element
// let hover = document.querySelectorAll(".allabel label");

// function activeLink(){
//     hover.forEach((item) => {
//         item.classList.remove("hovered");
//     });
//     this.classList.addd("hovered");
// }
// hover.forEach((item) => item.addEventListener("mouseover",activeLink));


function handleclick(){
    window.location.href = "Buses.html";
}
var myLabel = document.getElementById("busManage");
myLabel.addEventListener("click", handleclick);

function handleclick1(){
    window.location.href = "RoutesManagement.html";
}
var myLabel1 = document.getElementById("routeManage");
myLabel1.addEventListener("click", handleclick1);

function handleclick2(){
    window.location.href = "TicketsManagement.html";
}
var myLabel2 = document.getElementById("ticketManage");
myLabel2.addEventListener("click", handleclick2);

function handleclick3(){
    window.location.href = "BookingLIst.html";
}
var myLabel3 = document.getElementById("bookingList");
myLabel3.addEventListener("click", handleclick3);

function handleclick4(){
    window.location.href = "Payment.html";
}
var myLabel4 = document.getElementById("payDetails");
myLabel4.addEventListener("click", handleclick4);

function handleclick5(){
    window.location.href = "Schedule.html";
}
var myLabel5 = document.getElementById("scheduleManage");
myLabel5.addEventListener("click", handleclick5);

function handleclick6(){
    window.location.href = "Reports.html";
}
var myLabel6 = document.getElementById("report");
myLabel6.addEventListener("click", handleclick6);