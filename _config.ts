import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import svgo from "lume/plugins/svgo.ts";
import jsx from "lume/plugins/jsx_preact.ts";

const site = lume({
  src: "./src",
  location: new URL("https://santito.is-a.dev"),
});

site.use(tailwindcss({
  options: {
    theme: {
      colors: {
        background: "#282A36",
        currentLine: "#44475A",
        foreground: "#F8F8F2",
        comment: "#6272A4",
        cyan: "#8BE9FD",
        green: "#50FA7B",
        orange: "#FFB86C",
        pink: "#FF79C6",
        purple: "#BD93F9",
        red: "#FF5555",
        yellow: "#F1FA8C",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
}));
site.use(postcss());
site.use(svgo());
site.use(jsx());

site.copy("static");

export default site;
