import { useGetStoryQuery } from "@/services/api";
import { List } from "antd";
import { MessageOutlined, StarOutlined } from "@ant-design/icons";
import IconText from "@/components/IconText";
import { Link } from "react-router-dom";
import ContentLoader from "@/components/ContentLoader";

type Props = {
  storyId: number;
};

const Story = ({ storyId }: Props) => {
  const { data, isLoading, isSuccess, isError } = useGetStoryQuery(storyId);

  const renderContent = () => {
    if (data && data.dead) {
      return <p>This story is dead!</p>;
    } else if (data && !data.dead) {
      return (
        <List.Item
          actions={[
            <IconText
              icon={StarOutlined}
              text={data.score.toString()}
              key="list-vertical-star-o"
            />,
            <IconText
              icon={MessageOutlined}
              text={data.descendants ? data.descendants.toString() : "0"}
              key="list-vertical-message"
            />,
          ]}>
          <List.Item.Meta
            title={<Link to={`/news/${storyId}`}>{data.title}</Link>}
            description={`by ${data.by} 
                              ${new Date(data.time * 1000).toLocaleDateString()} 
                              ${new Date(data.time * 1000).toLocaleTimeString(undefined, {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}`}
          />
        </List.Item>
      );
    }
    return null;
  };

  return (
    <ContentLoader isError={isError} isSuccess={isSuccess} isLoading={isLoading}>
      <>{renderContent()}</>
    </ContentLoader>
  );
};

export default Story;
