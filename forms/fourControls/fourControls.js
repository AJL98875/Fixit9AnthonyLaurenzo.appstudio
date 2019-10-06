
Card1.onclick=function(){
    NSB.MsgBox("This is a pretty cool car! Too bad its so expensive")
}

Navs1.onclick = function(i) {
  if (typeof i == "object") return;
  NSB.MsgBox("Item clicked: " + Navs1.items[]);
};
