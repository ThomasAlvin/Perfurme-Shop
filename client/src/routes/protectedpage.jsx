import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedPage({ children }) {
  const userSelector = useSelector((state) => state.login.auth);
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!userSelector.username) {
      setIsLoading(false);
      return nav("/login");
    } else {
      setIsLoading(false);
    }
  }, [children]);
  return (
    <>
      <>{isLoading ? <Loading /> : children}</>
    </>
  );
}
