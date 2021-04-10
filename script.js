$(function() {

    var time = setInterval(function() {

        function zero_first_format(value) 
        {
            if (value < 10) 
            {
              value = "0"+value;
            }
          return value;
        }
    
        function date_time() 
        {
          var datetime = new Date();
          var day = zero_first_format(datetime.getDate());
          var month = zero_first_format(datetime.getMonth()+1);
          var year = datetime.getFullYear();
          var hour = zero_first_format(datetime.getHours());
          var minutes = zero_first_format(datetime.getMinutes());
    
          return hour + ":" + minutes + " " + day + "." + month + "." + year;
        }

        function date_month_day() 
        {
          
          var datetime = new Date();
          var days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
          var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
          var day_number = zero_first_format(datetime.getDate());
          var week_day = days[datetime.getDay()];
          var month = months[datetime.getMonth()];
    
          return day_number + " " + month + "," + week_day;
        }

        function time() 
        {
          var datetime = new Date();
          var hour = zero_first_format(datetime.getHours());
          var minutes = zero_first_format(datetime.getMinutes());
    
          return hour + ":" + minutes + " ";
        }
    
       document.getElementById('current_date_time_block').innerHTML = date_time();
       document.getElementById('small_menu_day').innerHTML = date_month_day();
       document.getElementById('small_menu_time').innerHTML = time();

    }, 1000);

    const burger = document.querySelector('.burger');
    const close = document.querySelector('.close');
    const menu = document.querySelector('.menu');
    const body = document.body;

    let keys = {
      ESC: 27,
    };

    function showMenu() {
      menu.classList.add('menu--showed');
      body.style.overflow = 'hidden';

      document.addEventListener('keydown', function(e){
        console.log(e)
        if (e.keyCode == keys.ESC) {
          closeMenu();
        }
      });
    }

    function closeMenu() {
      menu.classList.remove('menu--showed');
      body.style.overflow = 'initial';
    }

    burger.addEventListener('click', showMenu);
    close.addEventListener('click', closeMenu);

})