ModPE.setItem(501, 'arrow', 0, 'стрел-пушка', 1);

Player.addItemCreativeInv(501,0,0);

function modTick()
{
if(getCarriedItem() == 501)
{
var p=((Entity.getPitch(getPlayerEnt())+90)*Math.PI)/180; 
var y=((Entity.getYaw(getPlayerEnt())+90)*Math.PI)/180; 
var xx=Math.sin(p)*Math.cos(y); 
var yy=Math.sin(p)*Math.sin(y); 
var zz=Math.cos(p); 
var arrow = Level.spawnMob(getPlayerX()+xx,getPlayerY()+zz,getPlayerZ()+yy,80);
setVelX(arrow,6.0*xx); 
setVelY(arrow,6.0*zz);
setVelZ(arrow,6.0*yy); 
}
}

Item.addShapedRecipe(501, 1, 0, ['aaa', 'aaa', 'aaa'], ['a', 262, 0]);
