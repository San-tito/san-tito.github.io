import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  location: new URL("https://santito.is-a.dev"),
});

export default site;
