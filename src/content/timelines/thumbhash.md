---
title: 'Using ThumbHash instead of blurhash for Image Placeholders'
date: '2025-03-20'
link: 'https://gist.github.com/iamsahebgiri/9cc6ee1b7b6450160e306954e5304d29'

---

I initially explored using **BlurHash** in Skia but discovered a more efficient alternative called **ThumbHash**. It was created by Evan Wallace, the co-founder of Figma (who also developed esbuild).

I've implemented ThumbHash in a Skia-based image component, and it works great. However, Skia isn't a requirement—you can also use it with React Native Image or **expo-image** for similar results.
