$hostip   = $args[0];
$username = $args[1];
$password = $args[2];

connect-VIserver -server $hostip -user $username -Password $password
stop-vmhost 192.168.43.13 -confirm:$false -force:$true