var hX=getPlayerX();
var hY=getPlayerY();
var hZ=getPlayerZ();

function procCmd(cmd)
{
if(cmd=='sethome')
{
hX=getPlayerX();
hY=getPlayerY();
hZ=getPlayerZ();
clientMessage('Home set' + ChatColor.WHITE + '!');
} else {
if(cmd=='home')
{
setPosition(getPlayerEnt(), hX, hY+2,hZ);
}
}
}