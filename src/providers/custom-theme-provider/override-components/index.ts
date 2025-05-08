import { AppBar } from "@/providers/custom-theme-provider/override-components/AppBar";
import { Button } from "@/providers/custom-theme-provider/override-components/Button";
import { FormLabel } from "@/providers/custom-theme-provider/override-components/FormLabel";
import { BaseLine } from "@/providers/custom-theme-provider/override-components/BaseLine";
import { Paper } from "@/providers/custom-theme-provider/override-components/Paper";
import { Select } from "@/providers/custom-theme-provider/override-components/Select";
import { TextField } from "@/providers/custom-theme-provider/override-components/TextField";

export const overrideComponents = {
  ...AppBar,
  ...Button,
  ...FormLabel,
  ...BaseLine,
  ...Paper,
  ...Select,
  ...TextField,
};
