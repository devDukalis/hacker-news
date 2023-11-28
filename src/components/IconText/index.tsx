import { createElement } from "react";
import { Space } from "antd";

type Props = {
  icon: React.FC;
  text: string;
};

const IconText = ({ icon, text }: Props) => (
  <Space>
    {createElement(icon)}
    {text}
  </Space>
);

export default IconText;
