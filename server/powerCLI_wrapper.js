const { exec } = require('child_process');

var powershell_api = (host,user_name,password, callback) => {

    exec(`powershell.exe .\\ps1\\powercli_connect.ps1 ${host} ${user_name} ${password}`, (err, stdout, stderr) => {
       
        if (err) {
            console.log(err);
        }
    
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
    
        callback(stdout, stderr);

    });

};
var perform_vm = ( host, user_name, password, callback) => {
 
    console.log("performance is running");

    exec(`powershell.exe .\\ps1\\per_fromance.ps1 ${host} ${user_name} ${password} `, (err, stdout, stderr) => {
  
        if (err) {
            console.log(err);
        }
        
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
        callback( stdout, stderr);
        
    });


};
var tog_off= ( host, user_name, password, callback) => {
 
    console.log("togggle off  is running");

    exec(`powershell.exe .\\ps1\\tog_off_command.ps1 ${host} ${user_name} ${password} `, (err, stdout, stderr) => {
  
        if (err) {
            console.log(err);
        }
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
        callback( stdout, stderr);
        
    });


};
var tog_on= ( host, user_name, password, callback) => {
 
    console.log("togggle on  is running");

    exec(`powershell.exe .\\ps1\\tog_on_command.ps1 ${host} ${user_name} ${password} `, (err, stdout, stderr) => {
  
        if (err) {
            console.log(err);
        }
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
        callback( stdout, stderr);
        
    });


};

var view_vm= ( host, user_name, password, callback) => {
 
    console.log("view vm is running");

    exec(`powershell.exe .\\ps1\\get_vm.ps1 ${host} ${user_name} ${password} `, (err, stdout, stderr) => {
  
        if (err) {
            console.log(err);
        }
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
        callback( stdout, stderr);
        
    });


};

var host_shutdown= ( host, user_name, password, callback) => {
 
    console.log("togggle on  is running");

    exec(`powershell.exe .\\ps1\\host_shutdown.ps1 ${host} ${user_name} ${password} `, (err, stdout, stderr) => {
  
        if (err) {
            console.log(err);
        }
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
        callback( stdout, stderr);
        
    });


};
var schedule_on= ( host, user_name, password, callback) => {
 
    console.log("schedule on  is running");

    exec(`powershell.exe .\\ps1\\schedule_on.ps1 ${host} ${user_name} ${password} `, (err, stdout, stderr) => {
  
        if (err) {
            console.log(err);
        }
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
        callback( stdout, stderr);
        
    });


};

var schedule_off= ( host, user_name, password, callback) => {
 
    console.log("schedule off is running");

    exec(`powershell.exe .\\ps1\\schedule_on.ps1 ${host} ${user_name} ${password} `, (err, stdout, stderr) => {
  
        if (err) {
            console.log(err);
        }
        console.log(`Standard Output : ${stdout} \n`);
        console.log(`Standard Error : ${stderr} \n`);
        callback( stdout, stderr);
        
    });


};

module.exports.perform = perform_vm;
module.exports.connect = powershell_api;
module.exports.tog_off = tog_off;
module.exports.tog_on = tog_on;
module.exports.view_vm = view_vm;
module.exports.host_shutdown = host_shutdown;
module.exports.schedule_on = schedule_on;
module.exports.schedule_off = schedule_off;