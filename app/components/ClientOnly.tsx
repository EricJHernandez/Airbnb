'use client';

import { useState, useEffect } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {

    useEffect(() => {
      setHasMounted(true);
    }, [])
    

    const [hasMounted, setHasMounted] = useState(false)

    if(!hasMounted){
        return null;
    }

    return ( 
        <>
            {children}
        </>
    );
}
 
export default ClientOnly;