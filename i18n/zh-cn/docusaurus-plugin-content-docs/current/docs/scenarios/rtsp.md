---
sidebar_position: 3
---

import Command from '@theme/Command'

# RTSP

## FFmpeg推流

RTSP协议推流支持TCP和UDP模式。

### Over TCP(Interleaved mode)

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

### Over UDP

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

:::info 

参考：[转推RTSP协议流](https://www.ycmds.cc/ffmpeg/ffmpeg/#3%E8%BD%AC%E6%8E%A8rtsp%E5%8D%8F%E8%AE%AE%E6%B5%81)

:::

## 播放

### 播放Over TCP的RTSP流

```shell
ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"
```


### 播放Over UDP的RTSP流

```shell
ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"
```

:::info 

参考：[播放RTSP协议流](https://www.ycmds.cc/ffmpeg/ffplay/#%E6%92%AD%E6%94%BErtsp%E5%8D%8F%E8%AE%AE%E6%B5%81)

:::


## 拉取远端RTSP摄像头流到xiu

可以拉取远端摄像头的流到xiu server，并且可以转封装成RTMP/HTTP-FLV/HLS。

### 配置

需要打开RTSP的relay开关：

[RTSP配置](../configurations/config-file#rtsp)

如果需要转封装成RTMP/HTTP-FLV/HLS，需要在配置文件中添加协议的相关配置。

### HTTP-API

使用HTTP-API启动和停止拉取任务：[HTTP-API](../httpapi/http-api#拉取摄像头的rtsp流到xiu)

