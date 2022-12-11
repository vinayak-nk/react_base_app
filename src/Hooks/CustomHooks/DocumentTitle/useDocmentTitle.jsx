import {useEffect} from 'react'

const useDocmentTitle = (count) => {

  useEffect(() => { document.title = `Count: ${count}` }, [count])

}

export default useDocmentTitle