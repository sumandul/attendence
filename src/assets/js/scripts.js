

$(document).ready(function() {
  $(".emiloan ").click(function(){
    $(".label-loan").addClass("toggle-label")
      $(".emiloan").addClass("input-bg")
  });
  
});
$(document).ready(function() {
  $(".nomonth").click(function(){
    $(".label-month").addClass("toggle-label")
      $(".nomonth").addClass("input-bg")
  });
  
});
$(document).ready(function() {
  $(".rate").click(function(){
    $(".label-rate").addClass("toggle-label")
      $(".rate").addClass("input-bg")
  });
  
});

$(document).ready(function() {
  $(".hide-pass").click(function(){
      $(this).toggleClass("la-eye-slash la-eye");

    var passInput=$("#passInput");
  
    if(passInput.attr('type')==='password')
        {
          passInput.attr('type','text');
         
      }else{
         passInput.attr('type','password');
      }
  });
  
});
$(document).ready(function() {
  $(".rhide-pass").click(function(){

    var passInput=$("#rpassInput");
  
    if(passInput.attr('type')==='password')
        {
          passInput.attr('type','text');
         
      }else{
         passInput.attr('type','password');
      }
  });
  
});
$(document).ready(function() {
  $(".login-num").click(function(){
      $(".num-label").addClass("toggle-label")
      $(".login-num").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-address").click(function(){
      $(".label-address").addClass("toggle-label")
      $(".input-address").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-city").click(function(){
      $(".label-city").addClass("toggle-label")
      $(".input-city").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-near").click(function(){
      $(".label-near").addClass("toggle-label")
      $(".input-near").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-area").click(function(){
      $(".label-area").addClass("toggle-label")
      $(".input-area").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-buit").click(function(){
      $(".label-buit").addClass("toggle-label")
      $(".input-buit").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-price").click(function(){
      $(".label-price").addClass("toggle-label")
      $(".input-price").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".login-school").click(function(){
      $(".login-school").addClass("toggle-label")
      $(".login-school").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".login-link").click(function(){
      $(".login-link").addClass("toggle-label")
      $(".login-link").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".login-dine").click(function(){
      $(".label-dine").addClass("toggle-label")
      $(".login-dine").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".login-rest").click(function(){
      $(".label-rest").addClass("toggle-label")
      $(".login-rest").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".rest-link").click(function(){
      $(".rest-label").addClass("toggle-label")
      $(".rest-link").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".dine-link").click(function(){
      $(".label-dine-link").addClass("toggle-label")
      $(".dine-link").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-title").click(function(){
      $(".label-title").addClass("toggle-label")
      $(".input-title").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".input-dis").click(function(){
      $(".label-dis").addClass("toggle-label")
      $(".input-dis").addClass("input-bg")
  });
});
$(document).ready(function() {
  $(".login-pass").click(function(){
      $(".pass-label").addClass("toggle-label")
      $(".login-pass").addClass("input-bg")
  });
  
});

$(document).ready(function() {
  $(".login-name").click(function(){
      $(".label-name").addClass("toggle-label")
      $(".login-name").addClass("input-bg")
  });
  
});
$(document).ready(function() {
  $(".login-email").click(function(){
      $(".label-email").addClass("toggle-label")
      $(".login-email").addClass("input-bg")
  });
  
});
$(document).ready(function() {
  $(".login-pass").click(function(){
      $(".label-pass").addClass("toggle-label")
      $(".login-pass").addClass("input-bg")
  });
  
});
$(document).ready(function() {
  $(".login-rpass").click(function(){
      $(".label-rpass").addClass("toggle-label")
      $(".login-rpass").addClass("input-bg")
  });
  
});



$('.drop-box').click(function(){
  $(this).find('.box-1').toggleClass('active')
})
$('.drop-down-status').click(function(){
  $(this).find('.drop-down').toggleClass('drop-down-active')
})
$('.drop-down-remark').click(function(){
  $(this).find('.remark-down').toggleClass('drop-remark-active')
})

window.addEventListener("scroll",function(){
  let nav = document.querySelector('.navbar')

  nav.classList.toggle("sticky",window.scrollY > 60)
})
let currentLocation = location.href;
let menuItems =document.querySelectorAll('.nav-link');
    let menuLength = menuItems.length;
    console.log(menuLength)
    for( let i=0; i< menuLength; i++){
      if(menuItems[i].href === currentLocation ){
        menuItems[i].classList.add("active")
      }
      
    }

$(document).ready(function(){
  $('[data-bs-toggle="popover"]').popover({
    html:true
  });  
});
$(document).ready(function () {

  
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})



  AOS.init();

 
  
})
    let bigimg = document.querySelector(".big_img");
   let smallimg = document.querySelectorAll(".small_img")

 

smallimg.forEach((item, index) => {
  item.addEventListener('click', function(){


    bigimg.src = smallimg[index].src;
  })

})



  $(document).ready(function(){
    $("#show").change(function(){
       alert("hello")
 
    
    });
   });

  