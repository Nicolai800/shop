"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="flex justify-center items-center gap-3">
      <h1>Error</h1>
      <Link href="/">
        <p>Strona główna</p>
      </Link>
    </div>
  );
}
