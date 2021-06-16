ModPE.setItem(508, 'trondisk', 0, ChatColor.BLUE + 'Tron Disk', 2);
ModPE.setItem(509, 'cludisk', 0, ChatColor.GOLD + 'Clu Disk', 2);

ModPE.setItem(510, 'tronarmhe', 0, 'Шлем ТРОНА', 1);
ModPE.setItem(511, 'tronarmch', 0, 'Нагрудник ТРОНА', 1);

Item.defineArmor(510, 'tronarmhe', 0, 'Шлем ТРОНА', 'armor/tronarm1.png', 29, 5000, ArmorType.helment);
Item.defineArmor(511, 'tronarmch', 0, 'Нагрудник ТРОНА', 'armor/tronarm1.png', 40, 5000, ArmorType.chestplate);

Item.defineThrowable (508,"trondisk",0,ChatColor.BLUE + "Tron Disk",2);
Item.defineThrowable(509,"cludisk",0,ChatColor.GOLD + "Clu Disk",2);

Item.setHandEquipped(508, true);
Item.setHandEquipped(509, true);

Item.setMaxDamage(508,1000);
Item.setMaxDamage(509,1500);

Player.addItemCreativeInv(508,0,0);
Player.addItemCreativeInv(509,0,0);
Player.addItemCreativeInv(510,0,0);
Player.addItemCreativeInv(511,0,0);

var tronddata=Player.getCarriedItemData();
var trondco=Player.getCarriedItemCount();
var cluddata=Player.getCarriedItemData();
var cludco=Player.getCarriedItemCount();
var prd=false;

function modTick()
{
if(getCarriedItem()==508)
{
if(prd==false)
{
prd=true;
tronddata=Player.getCarriedItemData();
trondco=Player.getCarriedItemCount();
}
}
if(getCarriedItem()==509)
{
if(prd==false)
{
prd=true;
cluddata=Player.getCarriedItemData();
cludco=Player.getCarriedItemCount();
}
}
}

function entityAddedHook(added)
{
if(Entity.getEntityTypeId(added)==EntityType.SNOWBALL)
{
if(getCarriedItem()==508)
{
if(Level.getGameMode()==0)
{
prd=false;
Entity.setCarriedItem(getPlayerEnt(), 508, trondco, tronddata + 1);
}
}
if(getCarriedItem()==509)
{
if(Level.getGameMode()==0)
{
prd=false;
Entity.setCarriedItem(getPlayerEnt(), 509, cludco, cluddata + 1);
}
}
}
}

function attackHook(attacker, victim)
{
if(getCarriedItem() == 508||509)
{
if(Entity.getHealth(victim)>40)
{
Entity.setHealth(victim, Entity.getHealth(victim)-40);
}
if(Entity.getHealth(victim)<41)
{
Entity.addEffect(victim, 7, 20*20, 125, true, false);
Entity.addEffect(victim, 20, 20*20, 125, true, false);
}
}
}

function projectileHitEntityHook(projectile, targetEntity)
{
if(getCarriedItem() == 508||509)
{
if(Entity.getHealth(targetEntity)>40)
{
Entity.setHealth(targetEntity, Entity.getHealth(targetEntity)-40);
}
if(Entity.getHealth(targetEntity)<41)
{
Entity.addEffect(targetEntity, 7, 20*20, 125, true, false);
Entity.addEffect(targetEntity, 20, 20*20, 125, true, false);
}
}
}