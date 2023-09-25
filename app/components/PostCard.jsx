"use client";
import Link from "next/link";

export default function postCard(props) {

    return (
        <Link href={`/posts/${props.id}`}
            className="flex justify-start items-start p-4 bg-gray-400 hover:bg-gray-300 text-white hover:text-black min-h-[200px] cursor-pointer"
        >
            <h2 className="text-lg">
                {props.title}
            </h2>
        </Link>
    );
}