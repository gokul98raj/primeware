const powerCLI = require('./powerCLI_wrapper');
const temp_store = require('node-persist');
const send_mail = require('./email');


let host_address;
let user_name;
let Password;
let Email_ID;


var Routes = (app) => {

app.post('/vmconnect', (req,res) =>
{
    console.log("welcome to postmethod");
      let hostip = req.body.host_ip;
      let username = req.body.user_name;
      let password = req.body.pass_word;
      let email = req.body.email_id;

      console.log(`Host IP: ${hostip} UserName: ${username} Password: ${password} Email: ${email}`);

      host_address = hostip;
      user_name = username;
      Password = password;
      email_ID = email;

       powerCLI.connect(hostip, username, password, (output, error) => {
         
          console.log(`Error: ${error} \n Output: ${output}`);
        

           res.send({a:output,message:output});
         
       });
      send_mail.vm(email_ID)
      {
         console.log("mail block working");
      }

});

app.post('/performance',(req,res)=>
    {
        console.log("Performance is been loading");
        let hostip = req.body.host_ip;
        let username = req.body.user_name;
        let password = req.body.pass_word;
        let email = req.body.email_id;

       

        console.log(`Host IP: ${hostip} UserName: ${username} Password: ${password}`);
        
        host_address = hostip;
      user_name = username;
      Password = password;
      Email_ID = email;

        powerCLI.perform(hostip, username, password, (output, error) => {

            console.log(`Error: ${error} \n Output: ${output}`);
            
                        res.send({a:output,message:output});

        });
        send_mail.perform(Email_ID)
        {
            console.log("performace mail is been sending");
        }

    })
    app.post('/tog_off',(req,res)=>
    {
        console.log("off button");

        let hostip = req.body.host_ip;
        let username = req.body.user_name;
        let password = req.body.pass_word;
        let email = req.body.email_id;

        console.log(`Host IP: ${hostip} UserName: ${username} Password: ${password}`);
        
        host_address = hostip;
      user_name = username;
      Password = password;
      Email_ID = email;

      powerCLI.tog_off(hostip, username, password, (output, error) => {

        console.log(`Error: ${error} \n Output: ${output}`);
        
                    res.send({a:output,message:output});

    });
            console.log("toggle off is completed");
    })
    app.post('/tog_on',(req,res)=>
    {
        console.log("on toggle is  viewing");

        let hostip = req.body.host_ip;
        let username = req.body.user_name;
        let password = req.body.pass_word;
        let email = req.body.email_id;

        console.log(`Host IP: ${hostip} UserName: ${username} Password: ${password}`);
        
        host_address = hostip;
      user_name = username;
      Password = password;
      Email_ID = email;

      powerCLI.tog_on(hostip, username, password, (output, error) => {

        console.log(`Error: ${error} \n Output: ${output}`);
        
                    res.send({a:output,message:output});

    });


    })


    app.post('/host_shutdown',(req,res)=>
    {
        console.log("host Shutdown");

        let hostip = req.body.host_ip;
        let username = req.body.user_name;
        let password = req.body.pass_word;
        let email = req.body.email_id;

        console.log(`Host IP: ${hostip} UserName: ${username} Password: ${password}`);
        
        host_address = hostip;
      user_name = username;
      Password = password;
      Email_ID = email;

      powerCLI.n(hostip, username, password, (output, error) => {

        console.log(`Error: ${error} \n Output: ${output}`);
        
                    res.send({a:output,message:output});

    });


    })


    app.post('/schedule',(req,res)=>
    {
         
        console.log("staring the schedule");

        let hostip = req.body.host_ip;
        let username = req.body.user_name;
        let password = req.body.pass_word;
        let email = req.body.email_id;
        let hour =  req.body.hours;

      console.log(`Host IP: ${hostip} UserName: ${username} Password: ${password} hour: ${hour}`);
        
      host_address = hostip;
      user_name = username;
      Password = password;
      Email_ID = email;

      const immediate = setImmediate(()=>
      {
        powerCLI.tog_off(hostip, username, password, (output, error) => {
             
                console.log("schedule off");

                console.log(`Error: ${error} \n Output: ${output}`);
            
                res.send({a:output,message:output});
    
        });

      });

      const timeout = setTimeout(()=>
      {
          console.log("schedule on");

            powerCLI.tog_on(hostip, username, password, (output, error) => 
            {
             
                   console.log("schedule off");

                   console.log(`Error: ${error} \n Output: ${output}`);
        
                   res.send({a:output,message:output});

            });

      },hour*1000);
      

    


    })


    app.post('/view_vm',(req,res)=>
    {
        console.log("Viewing the virtual machine");

        let hostip = req.body.host_ip;
        let username = req.body.user_name;
        let password = req.body.pass_word;
        let email = req.body.email_id;

        console.log(`Host IP: ${hostip} UserName: ${username} Password: ${password}`);
        
        host_address = hostip;
      user_name = username;
      Password = password;
      Email_ID = email;

      powerCLI.view_vm(hostip, username, password, (output, error) => {

        //console.log(`Error: ${error} \n Output: ${output}`);

        var out = output.toString().split("\r\n");
        var list = [];
        var count = 0;
        out.forEach(element => {
            if(count <= 3){
                count += 1;
            }else{
                if(element.toString() !== ""){
                    list.push(element);
                }
            }
            
        });

        console.log(list);
       
                    res.send({a:output,message:list});

    });


    })



};
module.exports = Routes;
