import Avator from "./Avator";
function Profile() {
  return (
    // 1. Pass the props to the child component in the parent component
    <div>
      <Avator
        size={100} // You can change the size and see what happens
        person={{ name: "Julia", profession: "Software Developer" }}
      />
    </div>
  );
}

export default Profile;
