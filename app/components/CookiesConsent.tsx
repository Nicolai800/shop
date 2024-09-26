"use client";
import { hasCookie, setCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CookiesConsent() {

  const [showConsent, setShowConsennt] = useState(true);
  useEffect(()=>{
    setShowConsennt(hasCookie("localConsent"))
  },[]);
const acceptCookie = ()=>{
  setShowConsennt(true);
  setCookie("localConsent", true, {})
}
  return <div>CookiesConsent</div>;
}
