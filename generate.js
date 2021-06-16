function generate(ChunkX,ChunkZ,id,minY,maxY,rarity)
{
for(var X = ChunkX * 16; X < (ChunkX + 1) * 16 - 1; X++)
{
for(var Z = ChunkZ * 16; Z < (ChunkZ + 1) * 16 - 1; Z++)
{
for(var Y = minY; Y < maxY; Y++)
{
if(Math.floor(Math.random() * rarity * 10) == 1 && getTile(X,Y,Z) != 0)
{
setTile(X,Y,Z,id);
}
if(Math.floor(Math.random() * rarity * 10) == 1 && getTile(X+1,Y,Z) != 0)
{
setTile(X+1,Y,Z,id);
}
if(Math.floor(Math.random() * rarity * 10) == 1 && getTile(X,Y+1,Z) != 0)
{
setTile(X,Y+1,Z,id);
}
if(Math.floor(Math.random() * rarity * 10) == 1 && getTile(X,Y,Z+1) != 0)
{
setTile(X,Y,Z+1,id);
}
}
}
}
}
var timegen = 30*20;
function modTick()
{
timegen--;
if(timegen==0)
{
timegen = 30*20;
generate(3,3,9,3,5,10)
}
}

