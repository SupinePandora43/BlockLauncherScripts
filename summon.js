function procCmd(command)
{
var cmd = command.split(' ');
if(cmd[0] == 'summon')
{
if(!cmd[1])
{
clientMessage('summon entitytype x y z');
}
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
}
