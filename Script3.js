function mabus(){
    window.location.href = "Buses.html";
}

const bus = document.getElementById("ticketManage1");
bus.addEventListener("click", mabus);

function maticket(){
    window.location.href = "RoutesManagement.html";
}

const ticket = document.getElementById("ticketManage2");
ticket.addEventListener("click", maticket);

function mabooking(){
    window.location.href = "BookingLIst.html";
}

const booking = document.getElementById("ticketManage3");
booking.addEventListener("click", mabooking);

function mapayment(){
    window.location.href = "Payment.html";
}

const pay = document.getElementById("ticketManage4");
pay.addEventListener("click", mapayment);

function maschedule(){
    window.location.href = "Schedule.html";
}

const schedule = document.getElementById("ticketManage5");
schedule.addEventListener("click", maschedule);

function mareport(){
    window.location.href = "Reports.html";
}

const report = document.getElementById("ticketManage6");
report.addEventListener("click", mareport);

//Function treturn ti the admin panel
function home1 (){
    window.location.href = "sudoAdmin.html";
  }
  const home = document.getElementById("homeAdmin");
  home.addEventListener("click", home1)
