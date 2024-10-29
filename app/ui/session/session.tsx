'use server';
import { auth } from '@/auth';
import { GetServerSideProps, InferGetServerSidePropsType, NextPageContext } from 'next';
import { parseCookies } from 'nookies'
import { cookies } from 'next/headers'
export default async function SessionCard(props: any) {
  const session = await auth();
  const all = parseCookies();
  const cookieStore = cookies()
  const theme = cookieStore.get('authjs.session-token')
  return (
    <div>
      props:{JSON.stringify(props)}
      <br />
      session:{JSON.stringify(session)}
      <br />
      all:{JSON.stringify(all)}
      <br />
      theme:{JSON.stringify(theme)}
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await auth(context);
  console.log('=====session=====');
  console.log(session);
  console.log('=====session=====');

  if (session) {
    // Do something with the session
    return { props: { session, b: 'b' } };
  }

  return { props: { a: 'a' } };
};
SessionCard.getInitialProps = async ({ req }: NextPageContext): Promise<any> => {
  console.log('=====getInitialProps=====');
  console.log("getInitialProps");
  console.log('=====getInitialProps=====');
  const data = req ? 'Data from server' : 'Data from client';
  return { data };
};
