import { useParams } from "react-router";
import { UserDashboard } from "./UserDashboard/UserDashboard";
import { useFetch } from "../../hooks/useFetch";
import { UserMainInfo } from "./UserMainInfo/UserMainInfo";
import Loader from "../../components/ui";

export const UserProfilePage = () => {
  const { userId } = useParams();

  const [data] = useFetch(
    `https://67f80d0c2466325443ebae62.mockapi.io/users/${userId}`
  );
  return (
    <>
      {!data ? (
        <Loader isVisible={true} />
      ) : (
        <>
          <UserDashboard user={data} />
          <UserMainInfo user={data} />
        </>
      )}
    </>
  );
};
