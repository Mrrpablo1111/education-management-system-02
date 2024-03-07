export const Body = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="max-w-7xl min-h-screen mx-auto  px-6">{children}</div>
    )
}

export const H1 = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <h1 className=" text-center text-xl lg:text-2xl font-semibold tracking-wide">{children}</h1>
    )
}
