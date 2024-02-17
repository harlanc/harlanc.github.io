---
sidebar_position: 1
---

import Command from '@theme/Command'

# HTTP API

## Query Stream Information

Xiu has done some statistical work on the audio and video information of the stream, such as video resolution, bit rate, frame rate, etc., audio bit rate, sample rate, etc. (currently only supports the RTMP protocol). You can use the following interface for querying

```shell
curl http://localhost:8000/get_stream_status
```

The query results：

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


## Kickoff Client

The business users can kickoff illegal push/pull clients using the following interface:


```shell
curl -X POST -H "Content-Type: application/json" -d '{"id": "17079922471661"}' http://localhost:8000/kick_off_client
```





