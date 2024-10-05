import '../Filters.css'
import { useFilter } from '../Hooks/useFilter'
export const Filter = ({max, options}: { max: number, options: string[]}) => {
    const {filter, setFilter } = useFilter()
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({...filter, minPrice: parseInt(e.target.value)  });
    }

    const handleOnChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(
            {...filter, category: e.target.value  }
        );
    }
    return (
        <section className='filters'>
            <div>
                <label htmlFor="price">Price</label>
                <input type="range" id="price" min='0' max={max} onChange={handleOnChange} value={filter.minPrice}/>
                <span>${filter.minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Category</label>
                <select id="category" onChange={handleOnChangeCategory}>
                    <option value="all">All</option>
                    {options.map((option) => (
                    <option value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </section>
    )
}