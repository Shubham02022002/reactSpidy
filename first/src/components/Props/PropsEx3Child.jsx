/* eslint-disable react/prop-types */
const PropsEx3Child = ({user, userData,flag}) => {
  return (
    <div>
        <h1>Username: {user.name}</h1>
        <h2>Email: {user.email}</h2>
        <h3>Age: {user.age}</h3>
        {
            userData.map((user,index)=>
            <div key={index}>
                <h1>Username: {user.name}</h1>
                <h2>Email: {user.email}</h2>
                <h3>Age: {user.age}</h3>
            </div>
            )
        }
        <h1>Flag: {flag.toString()}</h1>
    </div>
  )
}

export default PropsEx3Child;