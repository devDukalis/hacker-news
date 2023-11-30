import { formatDistanceToNow } from "date-fns";
import { List } from "antd";

import DOMPurify from "dompurify";

import { DownSquareOutlined } from "@ant-design/icons";
import { Comment } from "@/models";

import classes from "@/components/CommentBody/style.module.css";

type Props = {
  comment: Comment;
  handleClick: () => void;
};

const iconStyle: React.CSSProperties = {
  position: "absolute",
  left: "0",
  top: "3px",
  color: "#1677ff",
  fontSize: "20px",
};

const CommentBody = ({ comment, handleClick }: Props) => {
  const timeAgo = formatDistanceToNow(new Date(comment.time * 1000));
  const description = `by ${comment.by} ${timeAgo} ago`;
  const listStyle: React.CSSProperties = {
    position: "relative",
    cursor: comment.kids ? "pointer" : "default",
    paddingLeft: comment.kids ? "25px" : "0",
    marginLeft: comment.kids ? "-25px" : "0",
    border: "none",
    paddingBottom: 0,
    paddingTop: 0,
  };

  // sanitize the HTML content
  const sanitizedCommentText = DOMPurify.sanitize(comment.text);

  return (
    <List.Item onClick={handleClick} style={listStyle}>
      {comment.kids && comment.kids.length > 0 && <DownSquareOutlined style={iconStyle} />}

      <List.Item.Meta
        style={{ textAlign: "left" }}
        title={
          <div
            dangerouslySetInnerHTML={{ __html: sanitizedCommentText }}
            className={classes.commentText}></div>
        }
        description={<div className={classes.description}>{description}</div>}
      />
    </List.Item>
  );
};

export default CommentBody;
