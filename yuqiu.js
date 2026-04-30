/*
 *
 *
脚本功能：语球
软件版本：1.3.4

使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
^https?:\/\/api\.kotobaheworld\.com\.cn\/api\/user url script-response-body https://raw.githubusercontent.com/liul0ng/quanx/refs/heads/main/yuqiu.js

[mitm]
hostname = api.kotobaheworld.com
*
*
*/
let obj = JSON.parse($response.body);
obj.result.isVip = 1;
obj.result.vipStartTime = 1735689600;
obj.result.vipEndTime = 4102416000;
$done({body: JSON.stringify(obj)});
