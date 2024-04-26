import { useEffect, useRef } from 'react';

export function useInterval<C extends CallableFunction>(
    callback: C,
    delay: number | null
): void {

    const savedCallback = useRef<C>();

    // Lembrando o ultimo callback

    useEffect(() => {
        savedCallback.current = callback
    }, [callback]);


    // setar o intervalo
    useEffect(() => {
        function tick() {
            if(savedCallback.current) savedCallback.current();

        }
        if (delay !== null){
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);

}