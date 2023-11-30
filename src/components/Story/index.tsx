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
              style={{ color: "#1677ff" }}
            />,
            <IconText
              icon={MessageOutlined}
              text={data.descendants ? data.descendants.toString() : "0"}
              key="list-vertical-message"
              style={{ color: "#1677ff" }}
            />,
          ]}>
          <List.Item.Meta
            title={
              <Link style={{ color: "#1f2338", fontWeight: 600 }} to={`/news/${storyId}`}>
                {data.title}
              </Link>
            }
            description={
              <div style={{ color: "#656d76", opacity: 0.8 }}>{`by ${data.by} 
                            ${new Date(data.time * 1000).toLocaleDateString()} 
                            ${new Date(data.time * 1000).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}`}</div>
            }
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
