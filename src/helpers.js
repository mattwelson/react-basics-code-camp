export const rgb = {
  name: 'rgb',
  getTextColor: ({ r, g, b }) => (r + g + b < 350 ? "white" : "black"),
  defaultState: {
    name: "rgb",
    r: 0,
    g: 0,
    b: 0
  },
  colors: [
    { name: "r", max: 255 },
    { name: "g", max: 255 },
    { name: "b", max: 255 }
  ],
  colorFromObject: ({ name, r, g, b }) => `${name}(${r}, ${g}, ${b})`
};

export const hsl = {
  name: 'hsl',
  getTextColor: ({ l }) => (l > 65 ? "black" : "white"),
  defaultState: {
    name: "hsl",
    h: 0,
    s: 50,
    l: 50
  },
  colors: [
    { name: "h", max: 359 },
    { name: "s", max: 100 },
    { name: "l", max: 100 }
  ], 
  colorFromObject: ({ name, h, s, l }) => `${name}(${h}, ${s}%, ${l}%)`
};