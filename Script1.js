function manage(){
    window.location.href = "RoutesManagement.html";
}

const manage1 = document.getElementById("busManage1");
manage1.addEventListener("click", manage);

function manageticket(){
    window.location.href = "TicketsManagement.html";
}

const tickets = document.getElementById("busManage2");
tickets.addEventListener("click", manageticket);

function bookinglist(){
    window.location.href = "BookingLIst.html";
}
const list = document.getElementById("busManage3");
list.addEventListener("click", bookinglist);

function mapayment(){
    window.location.href = "Payment.html";
}
const pay = document.getElementById("busManage4");
pay.addEventListener("click", mapayment);


function maschedule(){
    window.location.href = "Schedule.html";
}
const schedule = document.getElementById("busManage5");
schedule.addEventListener("click", maschedule);

function mareport(){
    window.location.href = "Reports.html";
}
const report = document.getElementById("busManage6");
report.addEventListener("click", mareport);

//Add Functionality to the add button when clicked
function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.modal.classList.add("blur");
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.modal.classList.remove("blur");
  }

  function home1 (){
    window.location.href = "sudoAdmin.html";
  }
  const home = document.getElementById("homeAdmin");
  home.addEventListener("click", home1)
