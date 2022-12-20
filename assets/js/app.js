$(document).ready(function(){
    $('.back_to_top').click(function(){
        $('html, body').animate({scrollTop:0}, 500)
    });

    $(window).scroll(function(){
        let scrollingPX = $(this).scrollTop();

        if (scrollingPX > 400) {
            $('.back_to_top').show(500)
        } else {
            $('.back_to_top').hide(500)
        }

        if(scrollingPX > 500) {
            $('.menu_part').addClass('second_bg')
        } else {
            $('.menu_part').removeClass('second_bg')

        }
    });
    $('.slick_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});

new WOW().init();

// Count Down Start 
(() => {
    // Specify the deadline date
    const deadlineDate = new Date('December 15, 2022 23:59:59').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
})();
// Count Down End


// let counterData1 = document.querySelector('.countdown__seconds').innerHTML = ;
// let counterData2 = document.querySelector('.counter2').textContent;
// let counterData3 = document.querySelector('.counter3').textContent;
// let counterData4 = document.querySelector('.counter4').textContent;
// console.log(counterData1, counterData2, counterData3, counterData4);

$(document).ready(function(){
    
  });
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});



