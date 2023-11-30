import { createElement } from "react";
import { Space } from "antd";

type Props = {
  icon: React.FC;
  text: string;
  style?: React.CSSProperties;
};

const IconText = ({ icon, text, style }: Props) => (
  <Space style={style}>
    {createElement(icon)}
    {text}
  </Space>
);

export default IconText;
