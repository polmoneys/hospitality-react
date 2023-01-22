### Hospitality ⛱

> Hospitality is not to change people, but to offer them space where change can take place...

**Henry Nouwen**

[TLDR](https://polmoneys.github.io/boost/hospitality-react).

### Getting started


```bash

   # cd hospitality
   npm pack
   
   # cd demo
   npm link

```

The only dependency is ```<FocusScope/>``` from **react-aria** to improve focus management. 


### Documentation

3 step process: define visual props, connect callbacks and provide **unavailable** spots.

#### Props

Some **props** can't be used together, either you provide **map** or most of the other ones. 


| Visual props       |     Notes    | 
| :-------------- | :-----------: | 
| rows        |    number     |   
| columns       |    number     |   
| rowShape           |     Array of numbers that add up to rows value   |   
| initialRowIndex |    number, useful to chain multiple <Hospitality> instances     |      
| spotComponent   | React element that will inherit some props |   
| map    |      obj      |     



| Callbacks props      |    Returns    |
| :-------------- | :-----------: | 
| onSelect        |     Spots    |    
| onSelectByRows       |     Record<number, Spots>      |    


`<Hospitality>` Provides a render prop to affect internal state from the outside and/or display alternative visuals to log current selection. 

| Available      |    Returns    |
| :-------------- | :-----------: | 
| onSelect        |     Spot     |    
| selected       |     Spots      |    


#### Styles

Powered by CSS grid, feel free to override default styles at your own risk using the following selectors:

```css

[hospitality-root]{}

[hospitality-row]{}

[hospitality-row="map"]{}

[hospitality-spot]{}

[hospitality-spot="default"]{}

[hospitality-spot="default busy"]{}

[hospitality-spot="default selected"]{}


```


### Roadmap 

- [ ] provide alternative Spot designs 


### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)


