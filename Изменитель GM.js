function procCmd(command)
{
var cmd = command.split(' ');
if(cmd[0] == 'gamemode')
{
var lockgm = false;
if(!cmd[1])
{
clientMessage('game mode 0 1 ...');
lockgm = true;
}
if(lockgm = false)
{
Level.setGameMode(cmd[1]);
clientMessage('Gamemode '+ Player.getName(getPlayerEnt())+' был изменен на '+cmd[1]);
}
}
}
