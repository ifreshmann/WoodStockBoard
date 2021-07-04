import React from 'react'  

const data = {
  content: {
    body: [
      {
        id: 1,
        Title: "12 จุดฮิต ถ่ายรูปสุดปัง ราชบุรี",
        Picture: "",
        View: 800
      },
      {
        id: 2,
        Title: "รวมจุดแชะ แวะ กิน เที่ยว ตลาดน้อย",
        Picture: "",
        View: 800
      },
      {
        id: 1,
        Title: "12 จุดฮิต ถ่ายรูปสุดปัง ราชบุรี",
        Picture: "",
        View: 800
      },
      {
        id: 1,
        Title: "12 จุดฮิต ถ่ายรูปสุดปัง ราชบุรี",
        Picture: "",
        View: 800
      },
      {
        id: 1,
        Title: "12 จุดฮิต ถ่ายรูปสุดปัง ราชบุรี",
        Picture: "",
        View: 800
      },
      {
        id: 1,
        Title: "12 จุดฮิต ถ่ายรูปสุดปัง ราชบุรี",
        Picture: "",
        View: 800
      },
      {
        id: 1,
        Title: "12 จุดฮิต ถ่ายรูปสุดปัง ราชบุรี",
        Picture: "",
        View: 800
      }
    ]
  }
};

const strJson = JSON.stringify(data.content.body);

const TestJson = () => {

  React.useEffect(() => {
    console.log(data.content.body)

  }, [])

  return (
    <div>
      <p strJson = {strJson}> {strJson} </p>
    </div>

  )
}

export default TestJson
