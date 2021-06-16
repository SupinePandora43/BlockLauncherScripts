var whid = 550;

ModPE.setItem(whid, 'id?', 0, ChatColor.RED + 'id mob', 1);
Player.addItemCreativeInv(whid,0,0);
Item.addShapedRecipe(whid, 1, 0, ['aaa', 'ooa', 'oao'], ['a', 280, 0]);

function modTick()
{
if(getCarriedItem()==whid)
{
ModPE.showTipMessage(Entity.getEntityTypeId(Player.getPointedEntity()));
}
}



