import React from "react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function App() {

  const form = useRef(null);
  const [emailStatusMessage, setEmailStatusMessage] = useState('');

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        'service_x9y400t',
        'template_x3jhcl6',
        form.current,
        'JTkr1S0CxDa9gFD-c'
      );

      setEmailStatusMessage('メールが送信されました！返信をお待ち下さい。');
    } catch (error) {
      setEmailStatusMessage(
        'メール送信時にエラーが発生しました！お手数ですが再度送信してください。'
      );
    }
  };

  return (
    <>
    <div class="mainContent">
      <p>ご意見，ご感想など，下記のメールアドレスにお気軽にご連絡ください．</p>
      <div class="contentsBox">
        <form ref={form} onSubmit={sendEmail}> 
          <div class="row g-1">
            <div class="mb-3 col-md-6">
              <label htmlFor="nameForm">ご氏名</label>
              <input type="text" name="from_name" class="form-control" />
            </div>
            <div class="mb-3 col-md-6">
              <label htmlFor="mailForm">メールアドレス</label>
              <input type="email" name="from_email" class="form-control" />
            </div>
          </div>
          <div>
            <label htmlFor="mailTitleForm">件名</label>
          </div>
          <input type="text" id="mailTitleForm" name="title" class="form-control" />
          <div>
            <label htmlFor="mailContentForm">お問い合わせ内容</label>
          </div>
          <textarea type="text" name="message" class="form-control"
            rows="5" />
          <div class="btns">
            <div>
              <button class="btn btn-primary my-2">送信</button>
            </div>
            <p>{emailStatusMessage}</p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
