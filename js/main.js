$(window).scroll(function(){
    let windwoScrollTop=$(window).scrollTop()
    if(windwoScrollTop >PortfolioSectionTop){
        $("nav.navbar").removeClass("bg-black")
        $("nav.navbar").addClass("bg-light")
    }
    else {
        $("nav.navbar").removeClass("bg-light")
        $("nav.navbar").addClass("bg-black")

    }
})
let PortfolioSectionTop=$(".Portfolio").offset().top;




