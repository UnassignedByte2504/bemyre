import React from "react";
import { createContext, useEffect, useState } from "react";
import client from "socket.io-client";
const Context = createContext({});

export function SocketProvider({ children }) {
  const [Socket, setSocket] = useState(null);

  useEffect(() => {
    const SOCKET_URI = process.env.APP_SOCKET;
    const socket = client(SOCKET_URI);
    setSocket(socket);
  }, []);
  console.log(Socket);
  return (
    <Context.Provider value={Socket}>{children}</Context.Provider>
  );
}

export default Context;
