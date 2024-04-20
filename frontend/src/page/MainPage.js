import * as React from "react";
import LoginModal from "../component/LoginModal";

export default function MainPage() {
  return (
    <div>
      <LoginModal isModal={true} />
    </div>
  );
}
