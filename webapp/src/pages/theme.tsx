import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colorScheme: "dark",
  primaryColor: "blue",
  components: {
    Text: {
      styles: {
        root: { fontSize: 20 },
      },
    },
    
  },
  
};

export default theme;
