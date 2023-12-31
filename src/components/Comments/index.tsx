import { Space, Typography } from "antd";
import CommentsList from "@/components/CommentsList";

import classes from "@/components/Comments/style.module.css";

const { Title, Text } = Typography;

type Pops = {
  commentsIds: number[];
  addCommentToRefetch: (id: number, refetch: () => void) => void;
};

const Comments = ({ commentsIds, addCommentToRefetch }: Pops) => {
  return (
    <div className={classes.container}>
      <Space
        align={"center"}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}>
        <Title level={4} style={{ color: "#1f2338", fontWeight: 600 }}>
          Comments
        </Title>
      </Space>

      {commentsIds && commentsIds.length > 0 ? (
        <CommentsList commentsIds={commentsIds} addCommentToRefetch={addCommentToRefetch} />
      ) : (
        <Text>no comments yet</Text>
      )}
    </div>
  );
};

export default Comments;
