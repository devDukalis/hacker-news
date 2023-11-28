import { Alert, Skeleton } from "antd";

type Props = {
  children: JSX.Element;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
};

const ContentLoader = ({ children, isLoading, isSuccess, isError }: Props) => {
  return (
    <Skeleton active loading={isLoading}>
      {isSuccess && children}
      {isError && <Alert message="Error" description="Failed to load resource" type="error" />}
    </Skeleton>
  );
};

export default ContentLoader;
