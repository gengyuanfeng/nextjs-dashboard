'use client';
import { GetServerSideProps, NextPageContext } from 'next';
import Cookies from 'universal-cookie'
import { parseCookies } from 'nookies'
import { useEffect } from 'react';
export default function SessionCardCliend(props: any) {
  const cookies = new Cookies();
  useEffect(() => {
    cookies.set('userId', "123",{});
    console.log("模拟componentDidMount，即只运行一次该函数");
  }, []);
  const all = parseCookies();
  return (
    <div>
      props:{JSON.stringify(props)}
      <br />
      all-cliend:{JSON.stringify(all)}
    </div>
  );
}
SessionCardCliend.getInitialProps = async ({ req }: NextPageContext): Promise<any> => {
  console.log('=====getInitialProps=====');
  console.log("getInitialProps");
  console.log('=====getInitialProps=====');
  const data = req ? 'Data from server' : 'Data from client';
  return { data };
};
