var timel = Level.getTime();

function procCmd(command)
{
var cmd = command.split(' ');
if(cmd[0] == 'timeset')
{
if(!cmd[1])
{
clientMessage('time '+ timel);
}
Level.setTime(cmd[1]);
}
}