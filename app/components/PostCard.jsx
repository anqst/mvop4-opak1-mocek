"use client"; // 🤓

export default function postCard(props) {

    return (
        <div
            className="flex justify-start items-start p-4 bg-gray-400 hover:bg-gray-300 text-white hover:text-black min-h-[200px] cursor-pointer"
            onClick={(e) => { console.log(props.id) /* místo toho redirect ale */ }}
        >
            <h2 className="text-lg">
                {props.title}
            </h2>
        </div>
    );
}