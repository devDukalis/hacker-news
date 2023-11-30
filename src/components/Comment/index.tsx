import { useEffect, useState } from "react";
import { useGetCommentQuery } from "@/services/api";
import CommentBody from "@/components/CommentBody";
import ContentLoader from "@/components/ContentLoader";
import CommentsList from "@/components/CommentsList";

type Props = {
  commentId: number;
  addCommentToRefetch: (id: number, refetch: () => void) => void;
};

const Comment = ({ commentId, addCommentToRefetch }: Props) => {
  const { data: comment, isLoading, isSuccess, isError, refetch } = useGetCommentQuery(commentId);

  const [hasKids, setHasKids] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      addCommentToRefetch(commentId, refetch);
    }
  }, [addCommentToRefetch, commentId, refetch, isSuccess]);

  const handleClick = () => {
    if (!comment?.kids) return;
    setHasKids(true);
  };

  return (
    <ContentLoader isSuccess={isSuccess} isLoading={isLoading} isError={isError}>
      <>
        {comment && (
          <>
            <CommentBody comment={comment} key={commentId} handleClick={handleClick} />
            {hasKids && (
              <CommentsList
                commentsIds={comment.kids}
                style={{ marginLeft: "30px" }}
                addCommentToRefetch={addCommentToRefetch}
              />
            )}
          </>
        )}
      </>
    </ContentLoader>
  );
};

export default Comment;
