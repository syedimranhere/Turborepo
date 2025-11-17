'use client'
import { useRouter } from "next/navigation";
import { InputBox } from "@repo/ui/inputbox";
export default function Home() {

  const router = useRouter();

  function handleClick() {
    router.push("/login")
  }
  return (
    <div style={
      {
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "14px",
        justifyContent: "center",
      }
    }>
      <h3 style={{
        color: "red"
      }}>Enter Room No</h3>
      <InputBox type="text" onChange={() => console.log("HEY", Math.floor(Math.random() * 100))}></InputBox>

      <button onClick={() => handleClick()}>join room</button>

    </div >

  );
} 
