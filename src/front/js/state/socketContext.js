import React from "react";
import { createContext, useEffect, useState } from "react";
import client from "socket.io-client";
const SocketContext = createContext({});

export function SocketProvider({ children }) {
  const [Socket, setSocket] = useState(null);

  useEffect(() => {
    const SOCKET_URI = process.env.BACKEND_URL;
    const socket = client(SOCKET_URI);
    setSocket(socket);
  }, []);
  console.log(Socket);
  return (
    <SocketContext.Provider value={Socket}>{children}</SocketContext.Provider>
  );
}

export default SocketContext;
