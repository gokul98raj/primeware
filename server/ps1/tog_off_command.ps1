$hostip   = $args[0];
$username = $args[1];
$password = $args[2];

connect-VIserver -server $hostip -user $username -Password $password

$vms =  Get-VM | where {$_.PowerState -eq "PoweredOn"}  
$vms | where {$_.Guest.State -eq "NotRunning"} | Stop-VM -Confirm:$false  
$vms | where {$_.Guest.State -eq "Running"} | Shutdown-VMGuest -Confirm:$false  
  


