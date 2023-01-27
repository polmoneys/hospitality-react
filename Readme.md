
<img width="1480" alt="Screenshot 2023-01-27 at 10 39 54" src="https://user-images.githubusercontent.com/7026863/215056582-4bf231d7-d2c2-4c44-8c46-9adcbd8dc571.png">

### TLDR 

> Hospitality is not to change people, but to offer them space where change can take place.
> **Henry Nouwen**

Interactive [demo](https://polmoneys.github.io/hospitality-react/).


### Use


```bash

   # cd hospitality
   npm pack
   
   # cd demo
   npm link

```

The only dependency is ```<FocusScope/>``` from **react-aria** to improve focus management. 


### Get started

3 step process: define **visual** props, connect **callbacks** plus provide **unavailable** spots.

Play with [examples](https://polmoneys.github.io/hospitality-react/) for an interactive demo of all **visual** props. As for data in/out two options:


| Callbacks props      |    Params    |
| :-------------- | :-----------: | 
| onSelect        |     Spots    |    
| onSelectByRows       |     Record<number, Spots>      |    


`<Hospitality>` Provides a render prop to affect internal state from the outside and/or display alternative visuals to log current selection. 

| Available      |    Params    |
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

### Recipes

How to display a **6 column 3 rows** 'map' ?

```tsx

  <Hospitality
        visual={{
          columns:6,
          rows:3,
        }}
      />

```

How to **shape** 6 columns in **pairs** ?

```tsx

  <Hospitality
        visual={{
          columns:6,
          rows:3,
          shape:[2,2,2]
        }}
      />

```

How to **chain** components ?

```tsx

  <Hospitality
        visual={{
          columns:6,
          rows:6,
        }}
   />

   <Hospitality
      visual={{
         columns:6,
         rows:6,
         // starts at row 7
         initialRowIndex:7
      }}
   />

```

How to **draw** a 'map' ?


```tsx

import { MapProp } from "hospitality-react";

  // Let's build a wedding ceremony layout where  0 === invisible spot
const emptyGap: Array<0 | 1> = [0, 0, 0, 0];

const emptyRow: Array<0 | 1> = [
  ...emptyGap,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  ...emptyGap,
];

const mapWedding: MapProp = [
// two '1' for bride and groom
  [...emptyGap, 0, 0, 0, 1, 0, 1, 0, 0, 0, ...emptyGap],
  emptyRow,
  // '1's for guests, left for bride's right for groom's
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  emptyRow,
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
  [...emptyGap, 1, 1, 1, 0, 0, 0, 1, 1, 1, ...emptyGap],
];


  <Hospitality
        visual={{
          map
        }}
      />

```

<img width="1480" alt="Screenshot component" src="https://user-images.githubusercontent.com/7026863/215056560-ad1083f6-5fa3-4877-8ea2-778401e74f5a.png">


How to **log selection** from the  **'outside'** ?

```tsx

  <Hospitality
        visual={{
          columns:8,
          rows:8,
          shape:[2,4,2]
        }}
      >
     {({ selected }) => (
          <Fragment>
            {selected?.map(item => (
              <p key={`${item.row}-${item.spot}`}>
                {item.row}-{item.spot}
              </p>
            ))}
          </Fragment>
        )} 
   </Hospitality>
        

```

### Roadmap 


- [ ] provide alternative Spot designs 
- [ ] publish useCamera demo 


### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)


