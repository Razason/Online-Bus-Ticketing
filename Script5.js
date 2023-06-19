function mabus(){
    window.location.href = "Buses.html";
}

const bus = document.getElementById("payManage1");
bus.addEventListener("click", mabus);

function maticket(){
    window.location.href = "RoutesManagement.html";
}

const ticket = document.getElementById("payManage2");
ticket.addEventListener("click", maticket);

function mabooking(){
    window.location.href = "TicketsManagement.html";
}

const booking = document.getElementById("payManage3");
booking.addEventListener("click", mabooking);

function mapayment(){
    window.location.href = "BookingLIst.html";
}

const pay = document.getElementById("payManage4");
pay.addEventListener("click", mapayment);

function maschedule(){
    window.location.href = "Schedule.html";
}

const schedule = document.getElementById("payManage5");
schedule.addEventListener("click", maschedule);

function mareport(){
    window.location.href = "Reports.html";
}

const report = document.getElementById("payManage6");
report.addEventListener("click", mareport);

//Function treturn ti the admin panel
function home1 (){
    window.location.href = "sudoAdmin.html";
  }
  const home = document.getElementById("homeAdmin");
  home.addEventListener("click", home1)
