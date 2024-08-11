---
sidebar_position: 3
---

import Command from '@theme/Command'

# RTSP

## FFmpeg Push

RTSP protocol streaming supports both TCP and UDP modes.



### Over TCP(Interleaved mode)

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy  -rtsp_transport tcp -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```

### Over UDP

```shell
ffmpeg -re -stream_loop -1  -i test.mp4 -c:v copy  -c:a copy -f rtsp "rtsp://127.0.0.1:5544/live/test?token=123"
```


## Play

### Play Streams over TCP

```shell
ffplay -rtsp_transport tcp -i "rtsp://127.0.0.1:5544/live/test?token=123"
```


### Play Streams over UDP

```shell
ffplay -i "rtsp://127.0.0.1:5544/live/test?token=123"
```

## Pull remote RTSP stream to XIU

You can pull an RTSP stream from a remote camera to the xiu server and remux it into RTMP/HTTP-FLV/HLS, follow the following steps:

### Configuration
Make sure to enable the RTSP relay switch:

[RTSP Configuration](../configurations/config-file#rtsp)

To remux into RTMP/HTTP-FLV/HLS, add the relevant protocol configurations to the configuration file.

### HTTP-API

Use the HTTP-API to start and stop the pulling tasks: 

[HTTP-API](../httpapi/http-api#pull-the-rtsp-stream-from-remote-to-xiu)