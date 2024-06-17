import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card as NextUICard } from "@nextui-org/react";

interface CardProps {
    title: string;
    author: string;
    upVotes: number;
    commentsCount: number;
    url: string;
    removeCard: () => void;
}

export default function Card({ title, author, upVotes, commentsCount, url, removeCard }: CardProps) {
    const [removed, setRemoved] = useState(false);

    const handleRemove = () => {
        setRemoved(true);
        setTimeout(removeCard, 500);
    };

    return (
        <AnimatePresence>
            {!removed && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                >
                    <NextUICard className="w-full md:w-96 p-6 bg-black text-white">
                        <div className="flex flex-col mb-4">
                            <div className="font-bold text-xl min-h-20 italic">{title}</div>
                            <div className="text-blue-500 mt-1 font-bold capitalize">👲 {author}</div>
                        </div>
                        <div className="flex justify-between text-gray-600 mb-4">
                            <div className="text-red-500">🗨️ {commentsCount}</div>
                            <div className="text-green-500">⬆️ {upVotes}</div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline transition duration-200"
    >
        <button className="inline-block bg-transparent border border-blue-400 rounded-lg py-1 px-3 text-blue-400 hover:bg-blue-400 hover:text-white transition duration-200">
            Read More
        </button>
    </a>
    <button
        onClick={handleRemove}
        className="inline-block bg-transparent border border-red-400 rounded-lg py-1 px-3 text-red-400 hover:bg-red-400 hover:text-white transition duration-200 ml-2"
    >
        Remove
    </button>
</div>

                    </NextUICard>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
