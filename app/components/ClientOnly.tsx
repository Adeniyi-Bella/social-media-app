'use client';

import React, { useEffect, useState } from "react";

//a wrapper component that only renders data loaded from the clientside 
export default function ClientOnly({ children }: { children: React.ReactNode }) {

  const [isClient, setIsClient] = useState(false)
  useEffect(() => { setIsClient(true) }, [])

  return (<> {isClient ? <div>{children}</div> : null} </>);
};