var givecommandlock = false;

function procCmd(command)
{
var cmd = command.split(' ');
if(cmd[0] == 'give' )
{
givecommandlock = false;
if(!cmd[1])
{
givecommandlock = true;
clientMessage('/give id count data');
}
if(!cmd[2])
{
cmd[2] = 1;
}
if(!cmd[3])
{
cmd[3] = 0
}
if(givecommandlock==false)
{
addItemInventory(cmd[1], cmd[2], cmd[3]);
clientMessage(ChatColor.GREEN+'Выдано ' + ChatColor.BLUE+ cmd[1] + ChatColor.GREEN+' в количестве '+ ChatColor.BLUE + cmd[2]+' с DATA '+ cmd[3]+' Игроку '+ Player.getName(getPlayerEnt()));
}
}
}
