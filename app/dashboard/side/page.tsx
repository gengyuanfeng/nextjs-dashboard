"use server"
import { NextPageContext, NextPage } from 'next';

interface MyPageProps {
  data: string;
}

const MyPage: NextPage<MyPageProps> = ({ data }) => {
  return (
    <div>
      <div>111:{data}:</div>
      <br />
      <div>cookie:{typeof window === 'undefined'?"":document.cookie}:</div>
    </div>
  );
};

MyPage.getInitialProps = async ({ req }: NextPageContext): Promise<MyPageProps> => {
  console.log('=====getInitialProps=====');
  console.log("getInitialProps");
  console.log('=====getInitialProps=====');
  const data = req ? 'Data from server' : 'Data from client';
  return { data };
};

export default MyPage;