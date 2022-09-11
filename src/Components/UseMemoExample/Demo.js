import React, { useMemo } from 'react'

const Demo = ({ title, items }) => {

  // const sortedList = items.sort((a,b) => a-b)
  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); 
  console.log('DemoList RUNNING', sortedList);
  
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {sortedList.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Demo