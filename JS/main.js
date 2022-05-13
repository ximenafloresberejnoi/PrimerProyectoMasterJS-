$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        // slideWidth: 1200,
        responsive: true
      });
    }

      //Posts
      if(window.location.href.indexOf('index') > -1){
      var posts = [
          {
              img: '/Images/article1.jpeg',
              title: 'Maridaje Básico',
              date: 'Publicado el día '+ moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
              content: 'Luego de esta nota convertite en un experto a la hora de realzar ambos sabores. ¿Quien dijo sommelier? '
          },
          {
              img: '/Images/article2.png',
              title: 'Tips a la hora de leer etiquetas',
              date: 'Publicado el día '+ moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus eveniet saepe ullam'
          },
          {
            img: '/Images/article3.jpg',
            title: 'Pasos para catar un vino',
            date: 'Publicado el día '+ moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus eveniet saepe ullam'
        }
      ]

      posts.forEach((item,index)=>{
          var post= `     
          <article class="post">
          <img src='${item.img}'/>
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>${item.content}</p>
          <a href="#" class="button-more">Leer más</a>
         </article>
      `;
      
      $('#posts').append(post);

      });
    }
  
      // Select theme
      var theme = $("#theme");
      
      $("#to-dark").click(function(){
         theme.attr("href", "css/dark.css")
      });
      $("#to-red").click(function(){
         theme.attr("href", "css/red.css")
      });
      $("#to-white").click(function(){
          theme.attr("href", "css/white.css")
       });

       //Scroll
       $('.up').click(function(e){
           e.preventDefault();
           $('html, body').animate({
               scrollTop:0
           }, 500);
           return false;
           });

        // Fake login
        $('#login form').submit(function(){
           var form_name =  $('#form_name').val();
           localStorage.setItem("form_name", form_name);
        });

        var form_name = localStorage.getItem("form_name");
        if(form_name != null && form_name != "undefined"){
           var about_parrafo = $('#about p');
            about_parrafo.html("<br><strong>Bienvenido " +  form_name  +  ", disfruta <br>de nuestra selección exclusiva<br><br></strong");
            about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

            $('#login').hide();

            $('#logout').click(function(){
                localStorage.clear();
                location.reload();
            });
        }


      //Acordeon
      if(window.location.href.indexOf('about') > -1){
          $('#acordeon').accordion();
      }

      //Reloj
      if(window.location.href.indexOf('reloj') > -1){

          setInterval(function(){
              var reloj = moment().format("hh:mm:ss");
                $('#reloj').html(reloj);
          }, 1000);
        }

        
      //Validation
      if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
      }


       });
