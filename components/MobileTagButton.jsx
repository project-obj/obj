import React from 'react';

const MobileTagButton = ({ tag, checkedTag, setCheckedTag }) => {
  return (
    <button
      onClick={() => setCheckedTag(tag)}
      className={`${
        checkedTag === tag
          ? 'order-first animate-pulse bg-pink/70 text-gray'
          : 'bg-mint/40'
      } mx-0.5 block rounded-3xl border border-gray/60 px-2 py-1 text-[14px] text-gray/70`}
    >
      {tag}
    </button>
  );
};

export default MobileTagButton;
