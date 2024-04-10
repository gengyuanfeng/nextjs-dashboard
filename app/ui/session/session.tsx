"use server"
import { auth } from '@/auth';
import { GetServerSideProps } from 'next';
export default async function SessionCard(props: any) {
  return <div>{JSON.stringify(props)}</div>;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await auth(context);
  console.log('=====session=====');
  console.log(session);
  console.log('=====session=====');

  if (session) {
    // Do something with the session
    return { props: { session,"b":"b" } };
  }

  return { props: {"a":"a"} };
};
