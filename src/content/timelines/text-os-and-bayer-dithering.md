---
title: 'Text OS and Bayer Dithering in Skia Shader'
date: '2025-03-18'
cover: '../../assets/timeline/text-os-bayer-dithering.png'
link: 'https://github.com/iamsahebgiri/text-os'
---

I was exploring skia shader and wanted to make a text os concept from [@samdape](https://x.com/samdape/status/1762179245697122614) with bayer dithering. I have implemented the same in the skia shader (sksl).

I learnt that accessing dynamically `mat4` in skia shader is not possible. So, I had to use loop to access the bayer 4x4 matrix values.
