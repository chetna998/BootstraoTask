$('document').ready(function () {
    
    $(window).scroll(function () {
        if ($(window).scrollTop() == 0) {
            $('#navchange').removeClass('whitecls')
            $('#navchange').addClass('nav1class')
        }
        else {
            $('#navchange').addClass('whitecls')
        }
    })

   
})
