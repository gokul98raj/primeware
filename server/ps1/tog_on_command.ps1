$hostip   = $args[0];
$username = $args[1];
$password = $args[2];

connect-VIserver -server $hostip -user $username -Password $password
$VMToPoweron = @(Import-Csv E:\Primeware\server\"details.csv")

 #Loop Power on
 foreach ($VMName in $VMToPoweron)
     {
         Write-Host Starting VM: $VMName.Name

         $VMView = Get-View -ViewType VirtualMachine -Filter @{Name = $VMName.Name}

         If ($VMView.Runtime.PowerState -eq "poweredoff")
             {
              Get-VM $VMName.Name | Start-VM -Confirm:$false > $null
             }

         Sleep 5
     }
 Write-Host Completed!