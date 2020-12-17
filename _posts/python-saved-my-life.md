---
title: 'Python and Javascript saved my life'
excerpt: 'If you work with computer(which I do most of the time) and have people around you, it is possible that they will ask you for favour. I was no exception.'
coverImage: '/assets/blog/python-saved-my-life/cover.jpg'
date: 'September 26, 2020'
type: 'featured'
author:
  name: Saheb Giri
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/run-cpp-on-web-emscripten/cover.jpg'
---

If you work with computer(which I do most of the time) and have people around you, it is possible that they will ask you for favour.

I was no exception. I had been constantly pester for creating documents, pdf, dtp and all these stuff. And I kinda of like that but again excess of doing it make me feel sick.

Now it is during this COVID-19 pandemic, my sister had her projects to be done before deadlines.I did most of the thing like creating documents and all these stuff.

Like all other projects it contains same shit like acknowledgement, contents, blah blah blah! She asked me to start the page number from the chapter one and I have merged all the thing into one docs file. But I didn't know how to start the page number from different page other then starting page. And I was too lazy to google it. Yes I know to check the different

> Problem
>
> Create pdf from multiple docs file and images.

How I solved the problem in a different way?

I have created two pdfs i.e. Original text and Index page including all other pages.

Now all I did that I added the page no only on original text and saved it as PDF in Word. Simple enough?
I repeated the same with other PDF but without page no because she said me so.

I have the picture of front page in png format. I had to transform it into pdf as well. This time I didn’t use word but Python package Pillow.

## Fun part begins

I had to merge all the pdfs in to one and convert png to pdf.

**Steps to convert png to pdf in Python**

1. Install Pillow

```python
pip install pillow
```

2. Write code and run

```python
from PIL import Image
frontPageImg = Image.open(r'./1.png')
frontPage = frontPageImg.convert('RGB')
frontPage.save(r'./front_page.pdf')
```

Finally I have my `front_page.pdf` done to rock.

**Steps to merge all the pdf into single pdf in Javascript(Nodejs)**

This time I choose Nodejs to get shit done quickly.
Here are the steps…

Create a folder say, `pdf_work`

```js
npm init –y
```

```js
npm install pdfmerge
```

And write the code as below.

```js
let PDFMerge = require('pdfmerge');

PDFMerge(
  ['./front_page.pdf', './acknowlege.pdf', './original_text.pdf'],
  'output.pdf',
)
  .then((done) => {
    console.log(done); // success
  })
  .catch(function (error) {
    console.error(error.code); // Logs error code if an error occurs
  });
```

And voila! We are good to go.

> Notes
>
> Orders of the file are important and the file path should be exact.
