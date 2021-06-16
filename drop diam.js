function destroyBlock(x,y,z)
{
if(getTile(x,y,z)==1)
{
Level.dropItem(x,y,z,1,264,1,0);
}
}
