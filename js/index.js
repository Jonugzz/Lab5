var todoVal = $("#todoText");
var list = $("#list");

$("#post").on("click", function (e){
    e.preventDefault();
   list.append(`<div class="elem"> <input type="checkbox" class="checkb"> ${todoVal.val()} </div> `);
   todoVal.val("");
});

$("#clear").on("click", function (e) {
    e.preventDefault();

    $(".checkb").each(function (){
        $(this).prop("checked", false);
    });
    
});

$("#mark").on("click", function (e) {
    e.preventDefault();
    
    $(".checkb").each(function (){
        $(this).prop("checked", true);
    });

});

$("#delete").on("click", function (e) {
    e.preventDefault();
    
    $(".elem").remove();
});