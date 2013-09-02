 seedit.util.parse_url = function(url) {
     var host, path, search, hash, param = {};
     if (url === undefined) {
         var loc = window.location;
         host = loc.host;
         path = loc.pathname;
         search = loc.search.substr(1);
         hash = loc.hash;
     } else {
         var ret = url.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i) || [];
         host = ret[1];
         path = ret[2];
         search = ret[3];
         hash = ret[4];
     }
     search && function() {
         var arr = search.split('&');
         for (var i = 0, l = arr.length; i < l; i++) {
             //var p=arr[i].split('=');
             //param[p[0]]=p[1];
             if (arr[i].indexOf('=') != -1) {
                 var pos = arr[i].indexOf('=');
                 var k = arr[i].slice(0, pos);
                 var v = arr[i].slice(pos + 1);
                 param[k] = v;
             }
         }
     }();
     return {
         host: host,
         path: path,
         search: search,
         hash: hash,
         param: param
     }
 };
