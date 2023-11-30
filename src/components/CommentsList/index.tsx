import Comment from "@/components/Comment";
import { List } from "antd";

type CommentsListProps = {
  commentsIds: number[];
  style?: React.CSSProperties;
  addCommentToRefetch: (id: number, refetch: () => void) => void;
};

const CommentsList = ({ commentsIds, style, addCommentToRefetch }: CommentsListProps) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={commentsIds}
      renderItem={(id) => (
        <Comment commentId={id} key={id} addCommentToRefetch={addCommentToRefetch} />
      )}
      style={style}
    />
  );
};

export default CommentsList;
