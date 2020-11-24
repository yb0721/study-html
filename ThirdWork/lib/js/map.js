//地图展示(Chinese Pastry)
var map1 = new BMap.Map("cmap");
var point1 = new BMap.Point(116.424311,39.968418);
map1.centerAndZoom(point1, 20);
var marker1 = new BMap.Marker(point1);
//将标注添加到地图中
map1.addOverlay(marker1);
//跳动的动画
marker1.setAnimation(BMAP_ANIMATION_BOUNCE);
//鼠标滚轮缩放
map1.enableScrollWheelZoom(true);
//添加比例尺于右下角
map1.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}));
//添加平移和缩放按钮
map1.addControl(new BMap.NavigationControl());

//地图展示(Dessert)
var map2 = new BMap.Map("dmap");
var point2 = new BMap.Point(121.457727,31.226636);
map2.centerAndZoom(point2, 20);
var marker2 = new BMap.Marker(point2);
//将标注添加到地图中
map2.addOverlay(marker2);
//跳动的动画
marker2.setAnimation(BMAP_ANIMATION_BOUNCE);
//鼠标滚轮缩放
map2.enableScrollWheelZoom(true);
//添加比例尺于右下角
map2.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}));
//添加平移和缩放按钮
map2.addControl(new BMap.NavigationControl());

//地图展示(HK Dessert)
var map3 = new BMap.Map("hmap");
var point3 = new BMap.Point(121.468342,31.242993);
map3.centerAndZoom(point3, 20);
var marker3 = new BMap.Marker(point3);
//将标注添加到地图中
map3.addOverlay(marker3);
//跳动的动画
marker3.setAnimation(BMAP_ANIMATION_BOUNCE);
//鼠标滚轮缩放
map3.enableScrollWheelZoom(true);
//添加比例尺于右下角
map3.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}));
//添加平移和缩放按钮
map3.addControl(new BMap.NavigationControl());

//地图展示(Japanese Dessert)
var map4 = new BMap.Map("jmap");
var point4 = new BMap.Point(116.461657,39.937546);
map4.centerAndZoom(point4, 20);
var marker4 = new BMap.Marker(point4);
//将标注添加到地图中
map4.addOverlay(marker4);
//跳动的动画
marker4.setAnimation(BMAP_ANIMATION_BOUNCE);
//鼠标滚轮缩放
map4.enableScrollWheelZoom(true);
//添加比例尺于右下角
map4.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}));
//添加平移和缩放按钮
map4.addControl(new BMap.NavigationControl());
