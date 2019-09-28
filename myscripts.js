$(document).ready(function () {


    $('#searchBar').hide();
    $('#btn-primary:first').click(function () {

        $('#searchBar').toggle();


    });
   // $("#xms1").css("margin-left","10px");
    //$("#xms2").css("margin-left","10px");

    checkScreenSize();


    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth <= 481) {
           $("#xms1").css("margin-left","15px");
           $("#xms2").css("margin-left","15px");
           $("#line").hide();
        }
        else {
              $("#xms2").css("margin-left","2px");
              $("#line").hide();
       
        }
    }


    $("#item1").on("click", function () {
        var con=$("#italy").text();
        console.log(con);
        $("#nav-form-con").attr('value',con);
        
    });

    $("#item2").on("click", function () {
        var contry=$("#Srilanka").text();
        console.log(contry);
        $("#nav-form-con2").attr('value',contry);
        
    });
    
    $("#item3").on("click", function () {
        var contry=$("#india").text();
        console.log(contry);
        $("#nav-form-con2").attr('value',contry);
        
    });
   // $("[placeholder='Username']").text("depart");
  //  $('#depart').attr('placeholder','Some New Text');

   // $("#dropdown-se").css( "margin-left", "-9ch");
    


});