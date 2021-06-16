function procCmd(command)
{
var cmd = command.split(' ');
if(cmd[0] == 'give' && cmd[1]!=null)
{
if(!cmd[1])
{
clientMessage('give id count data');
}
if(!cmd[2])
{
cmd[2] = 1;
}
if(!cmd[3])
{
cmd[3] = 0
}
addItemInventory(cmd[1], cmd[2], cmd[3]);
clientMessage(ChatColor.GREEN+'Выдано ' + ChatColor.BLUE+ cmd[1] + ChatColor.GREEN+' в количестве '+ ChatColor.BLUE + cmd[2]+' с DATA '+ cmd[3]+' Игроку '+ Player.getName(getPlayerEnt()));
}
if(cmd[0] == 'timeset')
{
Level.setTime(cmd[1]);
}
if(cmd[0] == 'summon')
{
if(!cmd[2])
{
cmd[2] = getPlayerX();
}
if(!cmd[3])
{
cmd[3] = getPlayerY();
}
if(!cmd[4])
{
cmd[4] = getPlayerZ();
}
Level.spawnMob(cmd[2],cmd[3],cmd[4],cmd[1]);
}
if(cmd[0] == 'gamemode')
{
Level.setGameMode(cmd[1]);
clientMessage('Gamemode '+ Player.getName(getPlayerEnt())+' был изменен на '+cmd[1]);
}
if(cmd[0]=='screen')
{
ModPE.takeScreenshot('screenshot');
}
if(cmd[0] == 'effect')
{
if(!cmd[3])
{
cmd[3] = 1;
}
if(!cmd[2])
{
cmd[2] = 10;
}
Entity.addEffect(getPlayerEnt(), cmd[1], cmd[2]*20, cmd[3], false, true); 
}
if(command == 'dupe')
{
var itemc = Player.getCarriedItemCount();
var itemi = Player.getCarriedItem();
var itemd = Player.getCarriedItemData();
addItemInventory(itemi,itemc,itemd);
}
if(cmd[0] == 'tp')
{
if(!cmd[1])
{
cmd[1] = getPlayerX();
}
if(!cmd[2])
{
cmd[2] = getPlayerY();
}
if(!cmd[3])
{
cmd[3] = getPlayerZ();
}
Entity.setPosition(Player.getEntity(),cmd[1],cmd[2],cmd[3]);
}
}





