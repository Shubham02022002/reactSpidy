import PropsEx3Child from "./PropsEx3Child";

const PropsEx3 = () => {
  let user = {
    name: "chaudhary",
    age: 22,
    email: "XsVvW@example.com",
  };
  const usersArray = [
    {
      name: "1",
      age: 22,
      email: "XsVvW@example.com",
    },
    {
      name: "c2",
      age: 22,
      email: "XsVvW@example.com",
    },
    {
      name: "ch3",
      age: 22,
      email: "XsVvW@example.com",
    },
  ];

  const flag=true;
  return (
    <div>
      <PropsEx3Child user={user} userData={usersArray} flag={flag} />
    </div>
  );
};

export default PropsEx3;
