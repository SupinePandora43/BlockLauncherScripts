var context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var CurrentWindow;

var spritesheet = new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/gui/mojang.png"));
var ExitBitmap = new android.graphics.Bitmap.createBitmap(spritesheet,0,0,256,256);
var ScaledExitBitmap = android.graphics.Bitmap.createScaledBitmap(ExitBitmap,950,550,false);



function runAsGUI(f)
{
context.runOnUiThread(new java.lang.Runnable({run: function(){
try{
f();
}catch(e){
print(e);
}
}}));
}


function createButton()
{
runAsGUI(function()
{
var layout = new android.widget.LinearLayout(context);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);



var image = new android.widget.ImageView(context);
image.setImageBitmap(ScaledExitBitmap);
image.setOnClickListener(function()
{
removeButton();
});
layout.addView(image);



CurrentWindow = new android.widget.PopupWindow(layout,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);

CurrentWindow.showAtLocation(context.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,40);
});
}


function removeButton()
{
runAsGUI(function(){
if(CurrentWindow)
{
CurrentWindow.dismiss();
CurrentWindow = null;
}
});
}


function newLevel()
{
createButton();
}


function leaveGame()
{
removeButton();
}




