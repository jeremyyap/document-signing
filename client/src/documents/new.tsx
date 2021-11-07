import React, { ChangeEvent, useRef, useState } from 'react';

export default function NewDocumentPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [signer, setSigner] = useState("");

  const handleSignerChange = (e: ChangeEvent<HTMLInputElement>) => setSigner(e.target.value);

  const submitForm = () => {
    if (fileInputRef.current?.files) {
      const file = fileInputRef.current?.files[0];
      
      // TODO: post file, signer to backend
    }
  }

  return (
    <div>
      <input type="file" ref={fileInputRef} />
      <input type="text" value={signer} onChange={handleSignerChange} />
    </div>
  );
}
