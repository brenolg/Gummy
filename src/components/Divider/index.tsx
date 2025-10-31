import { Line } from "./styles";

type DividerProps = {
  mb?: number; // margin-bottom opcional
};

export default function Divider({ mb = 16 }: DividerProps) {
  return <Line $mb={mb} />;
}
