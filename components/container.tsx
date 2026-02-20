export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center w-full flex-col">
            {children}
        </div>
    )
} 