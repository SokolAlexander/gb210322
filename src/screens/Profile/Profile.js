import { connect, useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(toggleCheckbox);
  };

  const handleSubmit = (text) => {
    dispatch(setName(text));
  };

  return (
    <>
      <h3>This is Profile</h3>
      {showName && <span>{name}</span>}
      <button onClick={handleClick}>change show name</button>
      <Form onSubmit={handleSubmit} />
    </>
  );
};

// const ProfileToConnect = ({ name, showName, changeName, changeCheckbox }) => {
//   console.log(name, showName);
//   const handleClick = () => {
//     changeCheckbox();
//   };

//   const handleSubmit = (text) => {
//     changeName(text);
//   };

//   return (
//     <>
//       <h3>This is Profile</h3>
//       {showName && <span>{name}</span>}
//       <button onClick={handleClick}>change show name</button>
//       <Form onSubmit={handleSubmit} />
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   name: state.profile.name,
//   showName: state.profile.showName,
// });

// const mapDispatchToProps = {
//   changeName: setName,
//   changeCheckbox: () => toggleCheckbox,
// };

// export const Profile = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileToConnect);
