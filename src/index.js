import "./styles/index.scss";

const elvenShieldRecipe = {
  learherStrips: 2,
  ironIngot: 1,
  refinedMoonStone: 4,
};

const elvenGauntLetsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonStone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntLetsRecipe);
