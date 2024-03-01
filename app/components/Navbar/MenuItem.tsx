"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100/[50%] font-semibold transition backdrop-blur-md"
    >
      {label}
    </div>
  );
};

export default MenuItem;
