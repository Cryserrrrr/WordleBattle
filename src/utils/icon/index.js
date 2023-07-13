import React from 'react';
// styled
import IconDiv from './iconDiv';
// import IconList
import iconMap from './iconMap';
// set list of size
const sizeMap = {
	xs : {height: 12, width: 12},
	sm : {height: 16, width: 16},
  md : {height: 20, width: 20},
	lg : {height: 24, width: 24},
	"2x" : {height: 32, width: 32},
	"3x" : {height: 48, width: 48},
	"4x" : {height: 64, width: 64},
	"5x" : {height: 80, width: 80}
}

const Icon = ({icon, color, height, width, size,onClick,style, className}) => {
  if(size) {
    if(size in sizeMap){
      const sz = sizeMap[size];
      height = sz.height;
      width = sz.width;
    }
    else{
      console.warn("Icon size is unknown")
    }
  }
  if(!onClick){
    onClick=()=>{};
  }

  let MyComponent = iconMap[icon];
  return (
    <IconDiv style={style} color={color} height={height} width={width} onClick={onClick} className={className}>
      <MyComponent />
    </IconDiv>
  )
}

export default Icon;