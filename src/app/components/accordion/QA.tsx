import { useState } from "react"

type QAProps = {
    question: string,
    answer: string,
}

const QA = (props: QAProps) => {
    const [showQA, setShowQA] = useState(false);

    return (
        <div className="py-6 px-5 my-8 max-w-2xl mx-auto border rounded-lg border-blue-950 flex flex-col gap-6">
            <button
                className="flex flex-row items-center justify-between gap-6 font-medium"
                onClick={() => setShowQA(!showQA)}
            >
                <span className="text-1xl">{props.question}</span>
                <span className="text-gray-500 text-lg">
                    {showQA ? "↑" : "↓"}
                </span>
            </button>
            {showQA &&
                <p className="text-lg">{props.answer}</p>
            }
        </div>
    )
}

export default QA
