function mabus(){
    window.location.href = "Buses.html";
}

const bus = document.getElementById("bookingManage1");
bus.addEventListener("click", mabus);

function maticket(){
    window.location.href = "RoutesManagement.html";
}

const ticket = document.getElementById("bookingManage2");
ticket.addEventListener("click", maticket);

function mabooking(){
    window.location.href = "TicketsManagement.html";
}

const booking = document.getElementById("bookingManage3");
booking.addEventListener("click", mabooking);

function mapayment(){
    window.location.href = "Payment.html";
}

const pay = document.getElementById("bookingManage4");
pay.addEventListener("click", mapayment);

function maschedule(){
    window.location.href = "Schedule.html";
}

const schedule = document.getElementById("bookingManage5");
schedule.addEventListener("click", maschedule);

function mareport(){
    window.location.href = "Reports.html";
}

const report = document.getElementById("bookingManage6");
report.addEventListener("click", mareport);

//Function treturn ti the admin panel
function home1 (){
    window.location.href = "sudoAdmin.html";
  }
  const home = document.getElementById("homeAdmin");
  home.addEventListener("click", home1)
