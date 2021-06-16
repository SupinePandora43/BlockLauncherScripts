function attackHook(attacker,victim)                                                   {
if(getCarriedItem() == 500)
{
Entity.setFireTicks(victim,1000);
Entity.setHealth(victim,1);
Entity.setMaxHealth(victim,1)
}
}

ModPE.setItem(500, 'redstone_dust', 0, 'Мега меч', 1);

Player.addItemCreativeInv(500,0,0);

Item.addShapedRecipe(500, 1, 0, ['obo', 'odo', 'oco'], ['d', 264, 0, 'b', 331, 0, 'c', 280, 0]);

Item.setMaxDamage(500, 99999999);

function modTick()
{
if(getCarriedItem() == 500)
{
Entity.addEffect(getPlayerEnt(), 1, 100*20, 2, true, false);
Entity.addEffect(getPlayerEnt(), 3, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 5, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 8, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 10, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 11, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 12, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 13, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 16, 100*20, 2,true, false);
Entity.addEffect(getPlayerEnt(), 21, 100*20, 2, true, false);
Entity.addEffect(getPlayerEnt(), 22, 100*20, 2, true, false);
Entity.addEffect(getPlayerEnt(), 23, 100*20, 2, true, false);
}
}

Item.setHandEquipped(500, true);
