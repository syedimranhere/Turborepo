

interface InputBoxProps {
    type: string,
    onChange: (e?: any) => void
}

export function InputBox({ type, onChange }: InputBoxProps) {
    return (
        <div
            style={{
                border: "2px solid red",
            }}
        >
            <input onChange={onChange} type={type} />
        </div>
    );
}
