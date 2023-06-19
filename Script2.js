function mabus(){
    window.location.href = "Buses.html";
}

const bus = document.getElementById("routeManage1");
bus.addEventListener("click", mabus);

function maticket(){
    window.location.href = "TicketsManagement.html";
}

const ticket = document.getElementById("routeManage2");
ticket.addEventListener("click", maticket);

function mabooking(){
    window.location.href = "BookingLIst.html";
}

const booking = document.getElementById("routeManage3");
booking.addEventListener("click", mabooking);

function mapayment(){
    window.location.href = "Payment.html";
}

const pay = document.getElementById("routeManage4");
pay.addEventListener("click", mapayment);

function maschedule(){
    window.location.href = "Schedule.html";
}

const schedule = document.getElementById("routeManage5");
schedule.addEventListener("click", maschedule);

function mareport(){
    window.location.href = "Reports.html";
}

const report = document.getElementById("routeManage6");
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

  //Function treturn ti the admin panel
function home1 (){
    window.location.href = "sudoAdmin.html";
  }
  const home = document.getElementById("homeAdmin");
  home.addEventListener("click", home1)
