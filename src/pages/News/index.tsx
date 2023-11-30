import { useCallback, useRef } from "react";

import { Link, useParams } from "react-router-dom";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import ContentLoader from "@/components/ContentLoader";
import Comments from "@/components/Comments";
import IconText from "@/components/IconText";

import { Button, Typography } from "antd";
import { RightOutlined, MessageOutlined } from "@ant-design/icons";

import { useGetStoryQuery } from "@/services/api";

import classes from "@/pages/News/style.module.css";

const { Title, Text } = Typography;

const updateInterval = 60000;

const News = () => {
  const { id } = useParams();

  const { data, isLoading, isSuccess, isError, isFetching, refetch } = useGetStoryQuery(
    Number(id),
    {
      pollingInterval: updateInterval,
    },
  );

  const commentsIdsToRefetch = useRef({} as { [key: number]: () => void });

  const addCommentToRefetch = useCallback((commentId: number, fetcher: () => void) => {
    if (!(commentId in commentsIdsToRefetch.current)) {
      commentsIdsToRefetch.current[commentId] = fetcher;
    }
  }, []);

  const handleUpdateComments = useCallback(async () => {
    if (!refetch || isFetching || !data) return;

    const result = await refetch().unwrap();

    if (!result.kids || result.kids.length === 0) return;

    for (const key in commentsIdsToRefetch.current) {
      commentsIdsToRefetch.current[key]();
    }
  }, [refetch, isFetching, data]);

  return (
    <div className={classes.container}>
      <Header title="Hacker News" />
      <Link to={`/`} className={classes.iconBack}>
        ◀️
      </Link>

      <button onClick={handleUpdateComments} className={classes.updateBtn}>
        🔄
      </button>

      <Main style={{ paddingLeft: "4rem", paddingRight: "4rem", paddingBottom: "10px" }}>
        <ContentLoader isError={isError} isSuccess={isSuccess} isLoading={isLoading}>
          <>
            {data && (
              <>
                <Title level={3} style={{ padding: "5px", margin: 0 }}>
                  {data.title}
                </Title>

                <Text>
                  {`by ${data.by} 
                            ${new Date(data.time * 1000).toLocaleDateString()}`}
                </Text>
                <Button
                  type="link"
                  href={data.url}
                  icon={<RightOutlined />}
                  target="_blank"
                  rel="noreferrer">
                  read more
                </Button>
                <IconText icon={MessageOutlined} text={data.descendants.toString()} />

                <Comments commentsIds={data.kids} addCommentToRefetch={addCommentToRefetch} />
              </>
            )}
          </>
        </ContentLoader>
      </Main>
      <Footer />
    </div>
  );
};

export default News;
