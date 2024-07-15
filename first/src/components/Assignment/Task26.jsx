import React , { useState } from 'react'
import Task26Child from './Task26Child';

const Task26 = () => {
    const tabs=["Home","About","Contact"];
    const [selectedTags, setSelectedTags] = useState([]);
  return (
    <div>
        <Task26Child tabs={tabs} selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
    </div>
  )
}

export default Task26