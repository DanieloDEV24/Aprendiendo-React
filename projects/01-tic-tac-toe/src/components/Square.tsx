export const Square = ({children, index, updateBoard}: {children: React.ReactNode, index: number, updateBoard:(parm:number) => void }) => {

    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className='square'>
        {children}
      </div>
    )
  }