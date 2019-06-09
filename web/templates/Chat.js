function sendMessage(){

        var mensaje = $('#mensaje').val();
        var user_from = user;
        var user_to = $('#user_to').val();
        var message = JSON.stringify({
                "mensaje": mensaje,
                "user_from_id": user_from,
                "user_to_id": user_to
            });

        $.ajax({
            url:'/messages',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){

            },
            error: function(response){

            }
        });
}