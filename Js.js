$(document).ready(function () {
    $(document).scroll(function () {
        $(".navbar").toggleClass("bg-light", $(this).scrollTop() > $(".navbar").height());
    });
})