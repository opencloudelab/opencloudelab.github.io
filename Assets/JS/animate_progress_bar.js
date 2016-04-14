$(document).ready(function() {

    $('#create_host').click(function() {

      $('#progress_class').show({easing:'swing'});
      $(function() {
        var value = 0;
        var interval = setInterval(function() {
            value += 25;
            $('#host_progress_bar2')
            .css("width", value + "%")
            .attr("aria-valuenow", value)
            .text(value + "% complete");
            if (value >= 100){
                clearInterval(interval);
                setTimeout(function(){
                    $('#host_create_tip').show({easing:'swing'});
                    $('#host_login_tip').show({easing:'swing'});
                    $('#progress_class').hide({easing:'swing'});
                    $('#create_host').hide({easing:'swing'});
                  }, 1000);    
            }
          }, 1000);

        });
    
    });
  
});