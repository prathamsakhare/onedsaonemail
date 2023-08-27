"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Email = () => {
  
    async function handleSubmit(e){
        e.preventDefault();
        await fetch('api/email', {
            method: 'POST',
            body : JSON.stringify({
                firstName : "Cosmo"
            })
        })
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <button onClick={handleSubmit}>Send Email</button>
    </div>
  );
};
export default Email;
