import React, { useEffect, useRef, useState } from 'react';

interface PlayerProps {
    width: number;
    height: number;
    bundleUrl: string;
}

// js-dos v7 exposes window.Dos as the player factory (UMD/browser build).
// Using the global avoids named-export/tree-shaking issues in the CRA bundler.
declare global {
    var Dos: (root: HTMLElement) => any;
}

export default function DosPlayer(props: PlayerProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const [dos, setDos] = useState<any>(null);

    useEffect(() => {
        if (rootRef.current === null) return;

        const root = rootRef.current;
        const instance = window.Dos(root);
        setDos(instance);

        const elements = rootRef.current.getElementsByClassName('flex-grow-0');
        while (elements.length > 0) {
            elements[0].remove();
        }

        return () => {
            if (instance && instance.stop) instance.stop();
        };
    }, [rootRef]);

    useEffect(() => {
        if (dos !== null && dos.run) {
            dos.run(props.bundleUrl);
        }
    }, [dos, props.bundleUrl]);

    return (
        <div
            ref={rootRef}
            style={{
                width: props.width,
                height: props.height,
                position: 'absolute',
            }}
        ></div>
    );
}
