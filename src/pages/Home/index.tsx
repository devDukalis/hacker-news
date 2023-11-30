import { useEffect, useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getTopStoriesSuccess,
  getTopStoriesError,
  updatePageSize,
  updatePageNumber,
} from "@/redux/features/topStoriesSlice";

import Story from "@/components/Story";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import ContentLoader from "@/components/ContentLoader";

import { List, Pagination } from "antd";

import { useGetTopStoriesQuery } from "@/services/api";
import classes from "@/pages/Home/style.module.css";

const updateInterval = 60000;
const pageSizeOptions = [5, 10, 20, 50];

const Home = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError, isSuccess, refetch } = useGetTopStoriesQuery(undefined, {
    pollingInterval: updateInterval,
  });

  const pageSize = useAppSelector((state) => state.topStories.pageSize);
  const pageNumber = useAppSelector((state) => state.topStories.pageNumber);

  const handlePageSizeChange = (current: number, size: number) => {
    dispatch(updatePageNumber(current));
    dispatch(updatePageSize(size));
  };

  const handleCurrentPageChange = (value: number) => {
    dispatch(updatePageNumber(value));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(getTopStoriesSuccess(data));
    } else if (isError) {
      dispatch(getTopStoriesError());
    }
  }, [isSuccess, isError, data, dispatch]);

  const currentPageData = useMemo(() => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    return data?.slice(startIndex, endIndex);
  }, [data, pageSize, pageNumber]);

  return (
    <div className={classes.container}>
      <Header title="Hacker News" />
      <button onClick={() => refetch()} className={classes.updateBtn}>
        🔄
      </button>

      <Main>
        <ContentLoader isError={isError} isLoading={isLoading} isSuccess={isSuccess}>
          <>
            {currentPageData && (
              <List
                itemLayout="vertical"
                size="large"
                dataSource={currentPageData.sort((a, b) => b - a)}
                renderItem={(item) => <Story storyId={item} key={item} />}
              />
            )}
          </>
        </ContentLoader>

        <Pagination
          showSizeChanger
          pageSizeOptions={pageSizeOptions.map(Number)}
          pageSize={pageSize}
          current={pageNumber}
          onShowSizeChange={handlePageSizeChange}
          onChange={handleCurrentPageChange}
          total={data ? data.slice(0, 100).length : 0}
          style={{ padding: "10px" }}
        />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
