function mabus(){
    window.location.href = "Buses.html";
}

const bus = document.getElementById("repoManage1");
bus.addEventListener("click", mabus);

function maticket(){
    window.location.href = "RoutesManagement.html";
}

const ticket = document.getElementById("repoManage2");
ticket.addEventListener("click", maticket);

function mabooking(){
    window.location.href = "TicketsManagement.html";
}

const booking = document.getElementById("repoManage3");
booking.addEventListener("click", mabooking);

function mapayment(){
    window.location.href = "BookingLIst.html";
}

const pay = document.getElementById("repoManage4");
pay.addEventListener("click", mapayment);

function maschedule(){
    window.location.href = "Payment.html";
}

const schedule = document.getElementById("repoManage5");
schedule.addEventListener("click", maschedule);

function mareport(){
    window.location.href = "Schedule.html";
}

const report = document.getElementById("repoManage6");
report.addEventListener("click", mareport);

//Function treturn ti the admin panel
function home1 (){
    window.location.href = "sudoAdmin.html";
  }
  const home = document.getElementById("homeAdmin");
  home.addEventListener("click", home1)
