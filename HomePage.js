$(document).ready(function(){
    $('#recent').css({'display':'none'});
    $('#most').css({'display':'none'});
    $('#categories').css({'display':'block'});

    $('#firstlink').addClass("active");

    $('#firstitem').click(function(){
        $('#firstlink').addClass("active");
        $('#secondlink').removeClass("active");
        $('#thirdlink').removeClass("active");
    });
    $('#seconditem').click(function(){
        $('#secondlink').addClass("active");
        $('#firstlink').removeClass("active");
        $('#thirdlink').removeClass("active");
    });
    $('#thirditem').click(function(){
        $('#thirdlink').addClass("active");
        $('#firstlink').removeClass("active");
        $('#secondlink').removeClass("active");
    });
    $('#SignUp').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#LogIn').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#headersign').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('.close').click(function(){
        $('nav').addClass("navbar-fixed-top");
        $('#header').css({'margin-top':'75px'});
    })
    $('#modelLog').click(function(){
        $('#myModalone').css({'display':'none'});
        $('#myModal').modal('show');
        $('#myModalone').modal('hide');
    });
    $('#signmodal').click(function(){
        $('#myModal').css({'display':'none'});
        $('#myModalone').modal('show');
        $('#myModal').modal('hide');
    });
    $('#start').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#start1').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#start2').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#start3').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#start4').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#start5').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#start6').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    $('#start7').click(function(){
        $('nav').removeClass("navbar-fixed-top");
        $('#header').css({'margin-top':'-20px'});
    });
    
    $('#firstlink').click(function(){
        $('#most').css({'display':'none'});
        $('#categories').css({'display':'block'});
        $('#recent').css({'display':'none'});
    });
    $('#secondlink').click(function(){
        $('#most').css({'display':'block'});
        $('#categories').css({'display':'none'});
        $('#recent').css({'display':'none'});
    });
    $('#thirdlink').click(function(){
        $('#recent').css({'display':'block'});
        $('#categories').css({'display':'none'});
        $('#recent').css({'display':'none'});
    });
    $('#mm').css({'display':'none'});
    $('#moreCourses').click(function(){
        $('#mm').css({'display':'block'});
        $('#moreCourses').css({'display':'none'});
    })
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo')) || [];
    var usersCounter = JSON.parse(localStorage.getItem('userscounter')) || 0;
    var currentUser = {
        id: 0,
        email: '',
        password: '',
        firstname:'',
        lastname:''
    };
    $('#signbutton').click(function() {
        inputEmail = $('#em').val();
        inputPassword = $('#uPw').val();
        inputFirstName =$('#firstname').val();
        inputLastName = $('#lastname').val();
        var user = {
            id: usersCounter + 1,
            email: $('#em').val(),
            password: $('#uPw').val(),
            firstname:$('#firstname').val(),
            lastname:$('#lastname').val()
        };
        var takenEmail = false;
        var passwordIsMoreThan8 = false;
        $('#alert2').css({'display':'none'});
        $('#alert1').css({'display':'none'});
        $('#alert3').css({'display':'none'});
        $('#alert4').css({'display':'none'});
        $('#alert5').css({'display':'none'});
        $('#alert12').css({'display':'none'});
        if(inputEmail != '')
        {
            $('#alert3').css({'display':'none'});
            for (var i = 0; i < usersInfo.length; i++) {
                if (inputEmail == usersInfo[i].email ) 
                {
                    takenEmail = true;
                    $(this).after('<div class="alert alert-danger" role="alert" id="alert1">This Email is used, try again!</div>');
                    break;
                }
                else
                {
                    $('#alert1').css({'display':'none'});
                }
           }
        }
        else
        {
            $(this).after('<div class="alert alert-danger" role="alert" id="alert3">Please Enter Your Email </div>');
        }
        if(inputPassword != '')
       {
         $('#alert12').css({'display':'none'});
            if (inputPassword.length >= 8) {
                passwordIsMoreThan8 = true;
                $('#alert2').css({'display':'none'});
            } 
            else 
            {
                $(this).after('<div class="alert alert-danger" role="alert" id="alert2" >Password must be at least 8 characters</div>');
            }
       } 
       else{
            $(this).after('<div class="alert alert-danger" role="alert" id="alert12" >Enter Password Please</div>');
       } 
        if(inputFirstName =='')
        {
            $(this).after('<div class="alert alert-danger" role="alert" id="alert4">Please Enter Your First Name </div>');
        }
        else 
        {
            $('#alert4').css({'display':'none'});
        }
        if(inputLastName =='')
        {
            $(this).after('<div class="alert alert-danger" role="alert" id="alert5">Please Enter Your Last Name </div>');
        }
        else 
        {
            $('#alert5').css({'display':'none'});
        }
        if (!takenEmail && passwordIsMoreThan8) {
            usersInfo.push(user);
            usersCounter++;
            localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
            localStorage.setItem('userscounter', JSON.stringify(usersCounter));
            usersInfo = JSON.parse(localStorage.getItem('usersinfo'));
            currentUser = usersInfo[usersInfo.length - 1];
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            window.location.assign('newHomePage.html');
        }
    });
    $('#logbutton').click(function() {
        inputEmail = $('#useremail').val();
        inputPassword = $('#userPw').val();
        var exists = false;
        var checkPassword = false;
        var found = 0;
        $('#alert6').css({'display':'none'})
        $('#alert7').css({'display':'none'})
        $('#alert8').css({'display':'none'})
        $('#alert9').css({'display':'none'})
        for (var i = 0; i < usersInfo.length; i++) {
            if (inputEmail == usersInfo[i].email) {
                exists = true;
                found = i;

                if (inputPassword == usersInfo[i].password) 
                {
                    checkPassword = true;
                }
                break;
            }
        }
    
        if(inputEmail != '')
        { 
            $('#alert9').css({'display':'none'})
            if (!exists) {
                $(this).after('<div class="alert alert-danger" role="alert" id="alert6">Not found Please Sign Up First</div>')
            }
            else 
            {
                $('#alert6').css({'display':'none'})
            }
        }
        else 
        {
            $(this).after('<div class="alert alert-danger" role="alert" id="alert9">Enter Your Email </div>')
        }
        if(inputPassword!='')
         {
            $('#alert8').css({'display':'none'})
            if (!checkPassword && exists) 
            {
                $(this).after('<div class="alert alert-danger" role="alert" id="alert7">Wrong password, try again!</div>');
            }
            else if (exists && checkPassword) 
            {
                $('#alert7').css({'display':'none'})
                currentUser = usersInfo[found];
                localStorage.setItem('currentuser', JSON.stringify(currentUser));
                window.location.assign('newHomePage.html')
            }
        }
        else 
        {
            $(this).after('<div class="alert alert-danger" role="alert" id="alert8">Enter Your password </div>'); 
        }
        
    });
});
    

