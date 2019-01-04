function myfun(){

    
    

    document.getElementById("preloader").style.display="block";
    
    document.getElementById("intro").style.display="none";
    document.getElementById("about").style.display="none";

    

    setTimeout(function(){
       
        document.getElementById("preloader").style.display="none"; 
        document.getElementById("services").style.display="block";
        
        document.getElementById("intro").style.display="block";
        document.getElementById("about").style.display="block";
        scrollTo(0,1500);

    },2000);


    var hostip = document.getElementById("host_ip").value;
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;
    var emailID = document.getElementById("email_id").value;
     if ((hostip == "192.168.43.13") && (username == "root") && (password == "rootsystem")) {
     

        var req = new Request("http://127.0.0.1:3000/vmconnect",
            {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    host_ip: hostip,
                    user_name: username,
                    pass_word: password,
                    email_id: emailID

                })

            })
        fetch(req).then(function (res) {
            res.json().then((data) => {
             
            })


        });
    }
    else if ((hostip == "192.168.43.13") && (username == "root") && (password != "rootsystem")) {
        alert("Entered password is incorrect");
    }
    else if ((hostip == "192.168.43.13") && (username != "root") && (password == "rootsystem")) {
        alert("Entered username is incorrect");
    }
    else if((hostip != "192.168.43.13") && (username == "root") && (password != "rootsystem")){
        alert("Entered hostip is incorrect");
    }
    else
    {
        alert("Enterted valid is invalid");
    }
    window.scrollTo(0, 1500);

window.scrollTo(0,1500);
}
function perform() {
    var serviceSection = document.getElementById("services");
    serviceSection.style.display = "block";

    var hostip = document.getElementById("host_ip").value;
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;
    var emailID = document.getElementById("email_id").value;
  
    var req = new Request("http://127.0.0.1:3000/performance",
        {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                host_ip: hostip,
                user_name: username,
                pass_word: password,
                email_id: emailID

            })

        })
    fetch(req).then(function (res) {
        res.json().then((data) => {
          
        })


    });
}
function toggle()
{
    
    var hostip = document.getElementById("host_ip").value;
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;
    var emailID = document.getElementById("email_id").value;
    var checkBox = document.getElementById("checkbox");
    if(checkBox.checked == true)
    {
        
        var req = new Request("http://127.0.0.1:3000/tog_on",
        {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                host_ip: hostip,
                user_name: username,
                pass_word: password,
                email_id: emailID

            })

        })
    fetch(req).then(function (res) {
        res.json().then((data) => {
         
        })


    });
    }
    else
    {
        
        var req = new Request("http://127.0.0.1:3000/tog_off",
            {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify({
                    host_ip: hostip,
                    user_name: username,
                    pass_word: password,
                    email_id: emailID

                })

            })
        fetch(req).then(function (res) {
            res.json().then((data) => {
                //alert("" + data.a);
            })


        });
    }
}


function openME(){
    var modal = document.getElementById('myModal');
    var modal = document.getElementById('myModal');
    var hostip = document.getElementById("host_ip").value;
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;
    var emailID = document.getElementById("email_id").value;
  
    var req = new Request("http://127.0.0.1:3000/view_vm",
        {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                host_ip: hostip,
                user_name: username,
                pass_word: password,
                email_id: emailID

            })

        })
    fetch(req).then(function (res) {
        res.json().then((data) => {


            var string = data.a;
            vm1 = data.message[0];
            vm2 = data.message[3];
          
            var mem1 = data.message[1];
            var mem2  = data.message[4];
            var res = mem1.substr(13,1);
            var res1 = mem2.substr(13,8);
     
            document.getElementById('rowM1').innerText = res;
            
            document.getElementById('rowM2').innerText = res1;
            
         
            console.log(data.message)

        })


    });
    
    modal.style.display="block";
}

function openSchedule(){
    var modal1 = document.getElementById('mySchedule');

    
    modal1.style.display="block";

}

function openCloseDialog(){
    document.getElementById("preloader_closing").style.display="block"; 
    document.getElementById("services").style.display="none";
    
    document.getElementById("intro").style.display="none";
    document.getElementById("about").style.display="none";

    var hostip = document.getElementById("host_ip").value;
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;
    var emailID = document.getElementById("email_id").value;
    
    var req = new Request("http://127.0.0.1:3000/host_shutdown",
        {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                host_ip: hostip,
                user_name: username,
                pass_word: password,
                email_id: emailID

            })

        })
    fetch(req).then(function (res) {
        res.json().then((data) => {
         //   alert("" + data.a);
        })


    });


    setTimeout(function(){
        // document.body.overflow="auto";
        document.getElementById("preloader_closing").style.display="none"; 
        document.getElementById("services").style.display="none";
        
        document.getElementById("intro").style.display="block";
        document.getElementById("about").style.display="block";
        scrollTo(0,1500);

    },2000);

   

}

function openSpan(){

    var modal = document.getElementById('myModal');
    modal.style.display = "none";



   

}
function openSpan1(){

    var modal1 = document.getElementById('myClose');
    modal1.style.display = "none";
}



window.onclick = function(event) {
  if ((event.target == modal)||(event.target == modal1)) {
    var modal = document.getElementById('myModal');
    var modal1 = document.getElementById('myClose');
    modal.style.display = "none";
    modal1.style.display="none";
  }
}

window.onload = function(){



var serviceSection = document.getElementById("services");

serviceSection.style.display="none";

  
        var vm_row = "";

    for (var j = 1; j <= 2; j++) {
        vm_row += `<tr id="rowv${j}"><td>VM${j} </td><td id=rowM${j} >Memory</td><td><label class="label"><div class="toggle"><input class="toggle-state" type="checkbox" name="check" value="check" /><div class="toggle-inner"><div class="indicator"></div></div><div class="active-bg"></div></div></label></td><td class="delete-vm" ><div class="vm-delete">X</div></td></tr>`;
    }

    document.getElementById("vm_container").innerHTML = vm_row;

    document.getElementById("schedule_value").value ="1";

    
}

function setTimerVmShutdown(){
    var hour = document.getElementById("schedule_value").value;
    var hostip = document.getElementById("host_ip").value;
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("pass_word").value;
    var emailID = document.getElementById("email_id").value;
  
    var req = new Request("http://127.0.0.1:3000/schedule",
        {
            method: "POST",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({
                host_ip: hostip,
                user_name: username,
                pass_word: password,
                email_id: emailID,
                hours: hour

            })

        })
    fetch(req).then(function (res) {
        res.json().then((data) => {
           
        })


    });


    
    document.getElementById("mySchedule").style.display="none";
    var requiredTime  = hour * 1000;
   
}



