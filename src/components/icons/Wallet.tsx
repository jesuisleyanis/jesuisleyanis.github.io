import { ComponentPropsWithoutRef } from "react";

export const WalletIcon = (
    props: ComponentPropsWithoutRef<"svg"> & { size?: number; class?: string }
) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            width={props.size}
            height={props.height}
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            className={props.class}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100/10 stroke-zinc-500"
            ></path>
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-500"
            ></path>
        </svg>
    );
};
