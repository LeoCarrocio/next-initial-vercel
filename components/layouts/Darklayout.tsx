import { FC } from "react";

interface DarklayoutProps {
  children?: React.ReactNode;
}

export const Darklayout:FC<DarklayoutProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <h1>Dark Layout</h1>
      <div>
        { children }
      </div>

    </div>
  )
}
