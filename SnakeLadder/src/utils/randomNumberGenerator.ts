export const generatorRandomNumber = (min?: number, max?: number) => {
  if(min && max) {
      return Math.floor(Math.random() * (max - min + 1)) + 10;
  }
  return Math.random();
}