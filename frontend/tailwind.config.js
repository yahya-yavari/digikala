/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         bodys: ["yekanbakh"],
      },
      extend: {
         colors: {
            primaryB: "#f0f0f1",
            primaryLight: "#81858b",
            primaryRed: "#EF4056",
            primaryText: "#344064",
         },
         borderRadius: {
            global: "8px",
         },
      },
   },
   plugins: [
      require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
   ],
};
