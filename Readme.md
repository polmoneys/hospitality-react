### TLDR 


> Hospitality is not to change people, but to offer them space where change can take place.
> **Henry Nouwen**

Interactive [demo](https://polmoneys.github.io/hospitality-react/).


### TLDR


```bash

   # cd hospitality
   npm pack
   
   # cd demo
   npm link

```

The only dependency is ```<FocusScope/>``` from **react-aria** to improve focus management. 


### Get started

3 step process: define **visual** props, connect **callbacks** plus provide **unavailable** spots.

Play with [examples](https://polmoneys.github.io/hospitality-react/) for an interactive demo of all **visual** props.


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
- [ ] publish useCamera demo 


### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)


