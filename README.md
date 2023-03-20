# useShuffleValues 🎲
A handy react hook to get a random value from an array without repeating the most recent value.

## How to use it
Pass in the desired values
```tsx
const { currentValue, shuffleValues } = useShuffleValues([
    "purple",
    "orange",
    "green",
    "pink",
    "red",
    "blue",
    "yellow",
]);
```
Use the returned currentValue in your component
```tsx
<Box
    bg={currentValue}
>
Hi, I'm a Box
</Box>
```
Call the shuffle function to get the next value
```tsx
const someFunction = () => {
  shuffleValues();
}
```
## Demo
On our agency website, [Complerity.ch](https://complerity.ch/) we use the hook on several pages.

### We style the links with the returned currentValue and call the shuffleValues function onMouseLeave:


https://user-images.githubusercontent.com/49474412/226445528-6c643b5c-8784-46ba-88c7-2e6cccf37780.mp4



### We style the menu layer with the returned currentValue and call the shuffleValues function in a gsap timeline callback:


https://user-images.githubusercontent.com/49474412/226445497-b8c4749a-44e5-4dbf-b8c0-050edb6102db.mp4



## Balancing
If you want to get a value more over another, just pass in the desired value multiple times.
Notice: We're using a do-while loop to get the new value, this could lead to performance issues, please read the section below.

## Considerations
While the do-while loop works great with unique values, it doesn't perform well with duplicated values.
Change the hook when needed:
```tsx
…
  setCurrentValue((prevValue) => {
      let filteredValues = [];
      for (let i = 0; i < values.length; i++) {
          if (values[i] !== prevValue) {
              filteredValues.push(values[i]);
          }
      }
      return getRandomValue(filteredValues);
  });
…
```
