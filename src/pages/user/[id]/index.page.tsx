import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client';
import { GetServerSideProps } from 'next';

interface UserPage {
  user: User
}

const UserPage: React.FC<UserPage> = ({ user }) => {

  return <div>
    <h1>{user.name}</h1>
    <p>{user.id}</p>
    <p>{user.email}</p>
    <p>{user.createdAt.toString()}</p>
    <p>{user.updatedAt.toString()}</p>
  </div>;
}

export const getServerSideProps: GetServerSideProps = async ({  params }) => {
  const user = await prisma.user.findUnique({
    where: {  id: String(params?.id)  },
  });

  if (!user) return {  notFound: true };

  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};

export default UserPage;
