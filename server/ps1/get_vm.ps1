$hostip   = $args[0];
$username = $args[1];
$password = $args[2];

connect-VIserver -server $hostip -user $username -Password $password
get-vm | select name,memorygb,powerstate