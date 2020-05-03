import React from "react";

const generateColor = parcent => {
  if (parcent > 9) return 'bg-green-500'
  if (parcent > 6) return 'bg-yellow-500'
  if (parcent > 3) return 'bg-orange-500'
  return 'bg-red-500'
}

const ProgressBar = (props) => {
  const parcent = Math.floor((props.value / 100) * 12)
  let { color } = props
  if (!color) {
    color = generateColor(parcent)
  }
  const width = parcent > 0 ? `w-${parcent}/12` : 'w-0'
  return (
    <div className="w-full h-2 rounded bg-gray-300 shadow-inner overflow-hidden">
      <div
        className={`animated slideInLeft ${width} h-2 rounded ${color} shadow-md`}
      />
    </div>
  );
};

export default ProgressBar;
