$hostip   = $args[0];
$username = $args[1];
$password = $args[2];

connect-VIserver -server $hostip -user $username -Password $password
get-vm | format-table -property name,powerstate,memorygb
$server=get-vm | where-object{$_.powerstate -eq "poweredon"}
$server|export-csv "E:\Primeware\server\details.csv" -notypeinformation
