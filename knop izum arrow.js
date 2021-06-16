var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var GUI;
var item_in_hand = false;


function showGUI()
{
ctx.runOnUiThread(new java.lang.Runnable({
run: function()
{
try{


var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
 
 
 
var button = new android.widget.Button(ctx);
button.setText("Button");
button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg)
{
//Стреляем стрелой
shotArrow(5);
}
}));
layout.addView(button);



GUI = new android.widget.PopupWindow(layout,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

GUI.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.CENTER,0,0);
}catch(error){
clientMessage('ERROR: ' + error);
}
}}))
}


function delGUI()
{
ctx.runOnUiThread(new java.lang.Runnable({
run: function()
{
if(GUI)
{
GUI.dismiss();
GUI = null;
}
}}))
}


function modTick()
{
if(getCarriedItem() == 388 && !item_in_hand)
{
showGUI();
item_in_hand = true;
}
else if(getCarriedItem() != 388)
{
delGUI();
item_in_hand = false;
}
}


function leaveGame()
{
delGUI();
}


function shotArrow(power)
{
if(!power)
{
power = 1;
}
var pitch = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI)/180;
var yaw = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI)/180;
var X = Math.sin(pitch) * Math.cos(yaw);
var Y = Math.cos(pitch);
var Z = Math.sin(pitch) * Math.sin(yaw);
var arrow = Level.spawnMob(getPlayerX()+(2*X),getPlayerY()+(2*Y),getPlayerZ()+(2*Z),80);
setVelX(arrow,X*power);
setVelY(arrow,Y*power);
setVelZ(arrow,Z*power);
return arrow;
}



