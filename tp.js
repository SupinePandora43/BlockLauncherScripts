function procCmd(command)
{
var cmd = command.split(' ');
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


