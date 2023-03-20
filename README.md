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

***We style the links with the returned currentValue and call the shuffleValues function onMouseLeave:***
https://user-images.githubusercontent.com/49474412/226444294-911e1eb0-2142-4ab1-8339-8b931bd11fff.mp4

***We style the menu layer with the returned currentValue and call the shuffleValues function in a gsap timeline callback:***
https://user-images.githubusercontent.com/49474412/226444731-92dbe59f-fb7a-4877-8651-7721ec83da53.mp4

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
