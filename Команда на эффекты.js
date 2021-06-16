function procCmd(command)
{ 
var cmd = command.split(' ');
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
}

function procCmd(command)
{
if(command == 'cleareffect')
{
Entity.removeAllEffects(getPlayerEnt());
}
}