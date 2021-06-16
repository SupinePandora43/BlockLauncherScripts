ModPE.setItem(503, 'hacktool', 0, 'инструмент хакера', 1);

ModPE.setItem(504, 'hah', 0, 'маска хакера', 1);
Item.defineArmor(504, 'hah', 0, 'маска хакера', 'armor/haar1.png', 3, 99999, ArmorType.helment);
Item.setMaxDamage(504,9999999999)

ModPE.setItem(505, 'hach', 0, 'нагрудник хакера', 1);
Item.defineArmor(505, 'hach', 0, 'нагрудник хакера', 'armor/haar1.png', 12, 99999, ArmorType.chestplate);
Item.setMaxDamage(505,9999999999)

ModPE.setItem(506, 'hal', 0, 'штаны хакера', 1);
Item.defineArmor(506, 'hal', 0, 'штаны хакера', 'armor/haar2', 9, 99999, ArmorType.leggings);
Item.setMaxDamage(506,9999999999)

ModPE.setItem(507, 'hab', 0, 'ботинки хакера', 1);
Item.defineArmor(507, 'hab', 0, 'ботинки хакера', 'armor/haar2', 3, 99999, ArmorType.boots);
Item.setMaxDamage(507,9999999999)

Item.setHandEquipped(503, true);

Player.addItemCreativeInv(503,0,0);
Player.addItemCreativeInv(504,0,0);
Player.addItemCreativeInv(505,0,0);
Player.addItemCreativeInv(503,0,0);
Player.addItemCreativeInv(506,0,0);
Player.addItemCreativeInv(507,0,0);

Item.addShapedRecipe(503, 1, 0, ['abc', 'def', 'aga'], ['a', 35, 0, 'b', 268, 0, 'c', 271, 0, 'd', 269,0, 'e', 270, 0, 'f', 290, 0, 'g', 280, 0]);

function modTick()
{
if(getCarriedItem() == 503)
{
Entity.addEffect(getPlayerEnt(), 3, 1*20, 125, true, false);
Entity.addEffect(getPlayerEnt(), 5, 1*20, 125, true, false);
}
if(Player.getArmorSlot(0)==504)
{
Entity.addEffect(getPlayerEnt(), 16, 1*20, 125, true, false);
Entity.addEffect(getPlayerEnt(), 13, 1*20, 125, true, false);
}
if(Player.getArmorSlot(1)==505)
{
Entity.addEffect(getPlayerEnt(), 11, 1*20, 125, true, false);
Entity.addEffect(getPlayerEnt(), 12, 1*20, 125, true, false);
Entity.addEffect(getPlayerEnt(), 10, 1*20, 125, true, false);
Entity.addEffect(getPlayerEnt(), 22, 1*20, 12, true, false);
}
if(Player.getArmorSlot(2)==506)
{
Entity.addEffect(getPlayerEnt(), 1, 1*20, 2, true, false);
}
if(Player.getArmorSlot(3)==507)
{
Entity.addEffect(getPlayerEnt(), 8, 1*20, 3, true, false);
}
}

function destroyBlock(x, y, z, size)
{
if(getCarriedItem()==503)
{
if(getTile(x,y,z))
{
Level.dropItem(x, y, z, 1, getTile(x,y,z), Math.floor((Math.random()*5)+1) , Player.getPointedBlockData());
}
}
}

function attackHook(attacker, victim)
{
if(attacker== Player.getEntity()){
if(getCarriedItem() == 503)
{
Entity.addEffect(victim, 4, 10000*20, 125, true, false);
Entity.addEffect(victim, 7, 10000*20, 125, true, false);
Entity.addEffect(victim, 9, 10000*20, 125, true, false);
Entity.addEffect(victim, 15, 10000*20, 125, true, false);
Entity.addEffect(victim, 17, 10000*20, 125, true, false);
Entity.addEffect(victim, 18, 10000*20, 125, true, false);
Entity.addEffect(victim, 19, 10000*20, 125, true, false);
Entity.addEffect(victim, 20, 10000*20, 125, true, false);
}
}
}