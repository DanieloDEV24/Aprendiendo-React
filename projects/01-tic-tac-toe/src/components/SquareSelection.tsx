export const SquareSelection = ({children, isSelected}: {children:React.ReactNode, isSelected: boolean}) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    return (
      <div className={className}>
        {children}
      </div>
    )
  }