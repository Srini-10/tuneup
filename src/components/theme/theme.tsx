import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./theme.module.css";

const Theme = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="transparent"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "dark" && (
        <IconSun className={cx(classes.light)} stroke={3} />
      )}
      {computedColorScheme === "light" && (
        <IconMoon className={cx(classes.dark)} stroke={3} />
      )}
    </ActionIcon>
  );
};

export default Theme;
