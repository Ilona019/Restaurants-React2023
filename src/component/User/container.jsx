import { User } from "./component";
import { useGetUsersQuery } from "../../redux/services/api";

export const UserContainer = ({ userId }) => {
  const { data: user, isFetching } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(({ id }) => id === userId),
      };
    },
  });

  if (isFetching) {
    return <b>Loading...</b>;
  }

  if (!user) {
    return null;
  }

  return <User user={user} />;
};
