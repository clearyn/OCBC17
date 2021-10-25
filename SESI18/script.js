$(document).ready(function () {
    console.log($('#title'));
    console.log($('.page-box'));

    $('#title').click(function () {
        alert('Saya ini page title');
    });

    $('#submitButton').click(function (e) {
        e.preventDefault();
        let username = $('input[name="username"]').val();
        console.log(username);
        alert("Halo, " + username);
    });

    $('.page-box:first').addClass( "btn-danger" );
});