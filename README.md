# Remax多端项目模版

## 小程序平台

- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [支付宝小程序](https://opendocs.alipay.com/mini/framework)
- [百度小程序](https://smartprogram.baidu.com/docs/develop/tutorial/intro/)
- [字节小程序](https://microapp.bytedance.com/docs/zh-CN/mini-app/develop/guide/start/introduction/)
- [快手小程序](https://mp.kuaishou.com/docs/develop/guide/introduction.html)
- [QQ小程序](https://q.qq.com/wiki/)
- [京东小程序](https://mp.jd.com/docs/dev/)
- [飞书小程序](https://open.feishu.cn/document/uYjL24iN/uUDNzUjL1QzM14SN0MTN)
- [钉钉小程序](https://developers.dingtalk.com/document/app/introduction-to-dingtalk-mini-programs)
- [360小程序](https://mp.360.cn/doc/miniprogram/dev/#/f4b41f0cc5683bce78dfadfa7f3c73e7)
- [快应用](https://doc.quickapp.cn/)
- [企业微信小程序](https://work.weixin.qq.com/api/doc/90000/90136/92455)
- [支付宝ioT小程序](https://opendocs.alipay.com/iot/01pmrx)

## 多端框架

- [Taro](https://taro-docs.jd.com/taro/docs/README/index.html)
- [uni-app](https://uniapp.dcloud.io/)

## 注意

remax/one 作为多端开发的基础，提供了9个基础组件和路由跳转方法，而其他的API需要从对应的仓库中引入，如 getLocation 需要从 remax/wechat 中获取，那么如果不同端的API名称如果相同，就难以在页面中书写多端判断了，需要封装一个基本的工具类来做跨平台兼容。
