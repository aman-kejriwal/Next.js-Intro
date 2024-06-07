import React from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div>
        <div >
            20% discount for the next 3 days!!!
        </div>
        {children}
    </div>
    );
  }
  