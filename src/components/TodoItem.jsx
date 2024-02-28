function TodoItem(props)
{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    function handleDelete(deleteid)
    {
    
        var tempArr = activityArr.filter(function(item)
        {
            if(item.id === deleteid)
            {
                return false
            }
            else{
                return true
            }
        })
        setActivityArr(tempArr)

    }
    return(
        <div className="flex justify-between ">
            <p>{props.index+1}.{props.activity}</p>
            <button id={props.id} className="text-red-600" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem