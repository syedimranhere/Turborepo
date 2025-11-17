"use client"
interface Props {
    params: { roomid: string }
}
export default function App({ params }: Props) {
    const { roomid } = params
    let x = 13
    return (
        <>
            <h3>Room {roomid}</h3>
            <h2>shha</h2>
        </>
    )


}
