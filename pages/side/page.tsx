'use server';
import { auth } from '@/auth';
import { GetServerSideProps } from 'next';
export default async function Page(props: any) {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(props)}
      <br />
      {JSON.stringify(session)}
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
