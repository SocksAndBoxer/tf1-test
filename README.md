# Test technique TF1

## Questions

### Run the project

yarn

**then**

yarn dev

**or**

yarn build

yarn preview

### Design

- Scroll behaviour : One item at a time or by row ?
  -> decided to do it by row, the Netflix way

- Figma's design contains invisible frames, is it a mistake or something I don't understand ?

![Alt text](image.png)

- What happens to the arrow at the edge of the slider ?
  -> I decided to not display them, could have disabled them too

### Code

- CSS: Decided to go for styled-components because I'm used to it

- Structure:
  I didn't add a page folder because there's only one component so I put it directly in the App.tsx

- Slider : Decided to create it instead of using a library because I wanted to try and create it from scratch, it could be improved by adding more props to choose behaviours like an infinite loop, a choice for the next/previous behaviour (one item at a time instead of all of them) etc.

- Image: the thumbnail alt is huge, alt attributes should be shorter, I tried to handle it by truncating the text and adding it in the image title to allow the user to read it

- Mobile: I decided to only make a desktop version to gain time and focus on the slider behavious, the implementation shouldn't be hard since I implemented a prop to handle the slider's length

### API

- Why put thumbnail inside program, program inside thumnail again creating 'infinite depth' ?
  -> maybe just put the ids ?

- typo on thumnail (thumbnail)

- program query is singular but returns multiple programs, it should be called programs in my opinion
