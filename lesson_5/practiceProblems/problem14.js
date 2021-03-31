/*
Given the following data structure write some code
 to return an array containing the colors of the fruits
 and the sizes of the vegetables. The sizes should be uppercase,
  and the colors should be capitalized.

  */

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function capitalizeWords(array) {
  for (let idx = 0; idx < array.length; idx += 1) {
    array[idx] = array[idx].slice(0, 1).toUpperCase() + array[idx].slice(1);
  }

}

let sizeAndColor = [];
Object.values(obj).forEach((item) => {
  if (item.type === 'fruit') {
    capitalizeWords(item.colors);
    sizeAndColor.push(item.colors);
  } else if (item.type === 'vegetable') {
    sizeAndColor.push(item.size.toUpperCase());
  }
});


console.log(sizeAndColor);

