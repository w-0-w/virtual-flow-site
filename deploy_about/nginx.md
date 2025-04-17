# include /www/server/panel/vhost/nginx/*.conf;

# /www/server/panel/vhost/nginx/
# fe_account_buy_app.conf
server {
    listen 80;
    server_name accountbuy.cc www.accountbuy.cc accountboy.cc www.accountboy.cc accountbuuy.cc www.accountbuuy.cc acountboy.cc www.acountboy.cc acountbuy.cc www.acountbuy.cc;

    location / {
        # 全局禁止缓存
        add_header Cache-Control "no-store, no-cache, must-revalidate, private";
        add_header Pragma "no-cache";
        add_header Expires "0";
        index index.html;
        root /root/web-root/virtual-flow-site/build;
        try_files $uri $uri/ /index.html;
    }

    access_log  /www/wwwlogs/fe_account_buy_app.log;
    error_log  /www/wwwlogs/fe_account_buy_app.error.log;
}