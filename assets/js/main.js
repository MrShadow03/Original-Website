(function($){
   $(document).ready(function(){
      $('#userName').focus(function(){
         $(this).css('border-bottom','1px solid rgb(15, 211, 113)');
      });
      $('#userName').blur(function(){
         $(this).css('border-bottom','1px solid rgba(0, 0, 0, 0.3)');
      });
      $('#password').focus(function(){
         $('#input-pass').css('border-bottom','1px solid rgb(15, 211, 113)');
      });
      $('#password').blur(function(){
         $('#input-pass').css('border-bottom','1px solid rgba(0, 0, 0, 0.3)');
      });
      $('#login-button').click(function(){
         $('#login-box').fadeToggle(150);
      })
      $('#login-button').blur(function(){
         if($('#login-box').css('display') == 'flex')
         {
            $('#login-button').css('background-color','red');
         }
      })

      let inputAttr = $('#password').attr('type');
      console.log(inputAttr);
      $('#show_pass').click(function(){

         $('#password').attr('type','text');
         $(this).text('Hide Password');
      })
   });
})(jQuery)