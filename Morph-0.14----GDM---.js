ModPE.setItem(500,"nether_star",0,"Morph",64);

Player.addItemCreativeInv(500,1,1);

function newLevel()
{
clientMessage("§a§l§e By Pivatto Gamer");
clientMessage("§eMORPH MOD");
Entity.setCarriedItem(getPlayerEnt(),500,1,1)}
function attackHook(a,v)
{
if(getCarriedItem()==500)
{
try{preventDefault();
Entity.setMobSkin(getPlayerEnt(),Entity.getMobSkin(v));
Entity.setRenderType(getPlayerEnt(),Entity.getRenderType(v))
}
catch(ee)
{
}
}
}