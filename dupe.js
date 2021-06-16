function procCmd(command)
{
if(command == 'dupe')
{
var itemc = Player.getCarriedItemCount();
var itemi = Player.getCarriedItem();
var itemd = Player.getCarriedItemData();
addItemInventory(itemi,itemc,itemd);
}
}
