import React, { useState, useCallback } from 'react'
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";


const Index = () => {
  const [age, setAge] = useState(20)
  const [salary, setSalary] = useState(20000)

  // const updateAge = () => setAge(prevAge => prevAge + 1)
  // const updateAge = useCallback(() => {}, [])
  const updateAge = useCallback(() => { setAge(prevAge => prevAge + 1) }, [setAge])
  const updateSalary = useCallback(() => { setSalary(prevSalary => prevSalary + 1000) }, [setSalary])
  // const updateAge = useCallback(() => { setAge(prevAge => prevAge + 1) }, [age])
  // const updateSalary = useCallback(() => { setSalary(prevSalary => prevSalary + 1000) }, [salary])

  return (
    <div>
      <Title />
      <hr />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Count text="Age" value={age} />
        <Button name="Age Button" handleClick={updateAge} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Count text="Salary" value={salary} />
        <Button name="Salary Button" handleClick={updateSalary} />
      </div>
    </div>
  )
}

export default Index