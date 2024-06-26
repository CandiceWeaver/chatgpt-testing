# ChatGPT Testing

Just playing around learning how to implement ChatGPT using Node

## To install

1. ```npm i```

2. Get an api key from OpenAI and add it into an .env file under a variable named ```OPENAI_API_KEY```. Make sure you can use gpt-4o.

3. ```npm start```

4. Uncomment the section you want, then see the output in the terminal.

## Examples

I understand you might not be able to see this project in action, so I've included the outputs of the exercises down below. I recommend looking through my code and these examples side by side to understand it better.

1. Text to text conversation

To start with, I told ChatGPT to be a helpful assistant. I then asked what the oldest English county is. Below is its output:

![Text to Text Output](/output-text-to-text-short.png "Text to Text Output")

2. Longer text to text conversation

This example follows on from the previous one. I took an except from ChatGPT's answer and used that as an answer to the original question. I then asked where those counties can be found.

![Longer Text to Text Output](/output-text-to-text-long.png "Longer Text to Text Output")

I also narrowed down the answer so we only get ChatGPT's new answer returned.

3. Image to text

For this example, I gave ChatGPT the link to a stock photo of a dog wearing glasses and asked what the creature (the dog) is wearing.

![Image to Text Output](/output-image-to-text.png "Image to Text Output")

*Please note, I included the photo in the project's folder and left its file name in a comment about the url.*

4. Multiple images to text / Image comparison

For this example, I gave ChatGPT links to 2 stock photos asked what the differences between the 2 photos are.

![Multiple Images to Text Output](/output-multiple-images-to-text-comparison.png "Multiple Images to Text Output")

*Again, I included the photos in the project's folder and left the file names in comment about the urls.*
