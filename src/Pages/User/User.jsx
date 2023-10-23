import { useLoaderData } from "react-router-dom";

const User = () => {
  const cartData = useLoaderData();
  console.log(cartData);
  return (
    <div>
      <h1>User</h1>
    </div>
  );
};

export default User;
