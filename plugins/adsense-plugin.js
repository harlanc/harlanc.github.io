module.exports = async function myAdSensePlugin(context, options) {
    // ...
    return {
      name: 'adsense-plugin', // 插件的名称
      injectHtmlTags({content}) {
        // console.info("===> adsesne-plugin injectHtmlTags")
        clientID = options.clientID; // 读取配置的AdSense id
        return {
          headTags: [  // 插入到header部分的代码
            {
              tagName: 'script',
              attributes: {
                async: true,
                crossorigin: 'anonymous',
                src: `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientID}`,
              },
            },
          ],
        };
      },    
    };
  };