import { Space, Typography } from "antd";
import CommentsList from "@/components/CommentsList";

const { Title, Text } = Typography;

type CommentsPops = {
  commentsIds: number[];
  addCommentToRefetch: (id: number, refetch: () => void) => void;
};

const Comments = ({ commentsIds, addCommentToRefetch }: CommentsPops) => {
  return (
    <>
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
    </>
  );
};

export default Comments;
