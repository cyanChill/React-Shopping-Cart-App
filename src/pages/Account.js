import { useContext } from "react";

import { FirebaseContext } from "../context/firebase-ctx";

import classes from "./Account.module.css";

const Account = () => {
  const { user, isLoggedIn, signIn, signOut } = useContext(FirebaseContext);

  if (!isLoggedIn) {
    return (
      <div className={classes.page}>
        <div className={classes.wrapper}>{signIn()}</div>
      </div>
    );
  }

  return (
    <div className={classes.page}>
      <div className={classes.wrapper}>
        <h3 className={classes.name}>{user.displayName}</h3>
        <p className={classes.email}>{user.email}</p>
        <div>
          <img
            src={user.photoURL}
            alt={user.displayName}
            referrerPolicy="no-referrer"
          />
        </div>
        {signOut()}
      </div>
    </div>
  );
};

export default Account;
