import { useEffect } from "react";
import useLoginState from "./useLoginState";

export default function useNotification() {
  const { userId } = useLoginState();

  useEffect(() => {
    const eventSource = new EventSource(
      `http://localhost:8080/notifications/subscribe/${userId}`
    );
    eventSource.onopen = () => {
      console.log("connected");
    };
    eventSource.addEventListener("comment", (e) => {
      const { data: receivedConnectData } = e;
      console.log("connect event data: ", receivedConnectData); // "connected!"
    });
    eventSource.addEventListener("reviewLike", (e) => {
      const { data: receivedConnectData } = e;
      console.log("connect event data: ", receivedConnectData);
    });
    eventSource.addEventListener("follow", (e) => {
      const { data: receivedConnectData } = e;
      console.log("connect event data: ", receivedConnectData);
    });
  }, [userId]);
  return { close };
}
