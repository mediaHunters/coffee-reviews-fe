interface ICoffeGrains {
  grain: "Arabica" | "Robusta";
  type: "BEAN" | "Mielona";
}

enum COFFEE_GRAINS {
  ARABICA = "Arabica",
  ROBUSTA = "Robusta",
}

enum COFFE_TYPE {
  BEANS = "Ziarnista",
  POWDER = "Mielona",
}

export enum COFFEE_BURNT_LVL {
  LIGHT_ROAST = 1,
  MEDIUM_ROAST = 2,
  DARK_ROAST = 3,
}

export { COFFEE_GRAINS, COFFE_TYPE };
export type { ICoffeGrains };
