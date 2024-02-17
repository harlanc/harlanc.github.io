---
sidebar_position: 2
---

import Command from '@theme/Command'

# HTTP API

## 查询实时流信息

xiu对流的音视频信息做了一些统计工作，例如：视频分辨率、码率、帧率等，音频码率、采样率等（目前只支持RTMP协议）。可以使用下面的接口进行查询：

```shell
curl http://localhost:8000/get_stream_status
```

查询结果如下：

```json
[
    {
        "identifier":{
            "Rtmp":{
                "app_name":"live",
                "stream_name":"test"
            }
        },
        "video":{
            "codec":"H264",
            "profile":"High",
            "level":"3.0",
            "width":640,
            "height":360,
            "bitrate(kbits/s)":485.992,
            "frame_rate":25,
            "gop":50
        },
        "audio":{
            "sound_format":"AAC",
            "profile":"LC",
            "samplerate":48000,
            "channels":2,
            "bitrate(kbits/s)":126.184
        }
    }
]
```


## 剔除用户

业务端可以将非法推拉流用户进行剔除，使用如下接口：


```shell
curl -X POST -H "Content-Type: application/json" -d '{"id": "17079922471661"}' http://localhost:8000/kick_off_client
```





