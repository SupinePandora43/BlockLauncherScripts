ModPE.setItem(503, 'stone_hoe', 0, 'Отсекатель голов', 1);

Player.addItemCreativeInv(503,0,0)

function deathHook(attacker,victim)
{
if(getCarriedItem() == 503)
if(Entity.getEntityTypeId() == 32)
{
Level.dropItem(eX, eY, eZ, 1, 450, 2, 0);