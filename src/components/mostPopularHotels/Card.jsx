import hotelImg from '../../assets/images/hotel.jpg'
import { Icons } from '../../constants/icons/Icons'

const Card = () => {
  return (
    <div className="my-6 max-w-md text-black border border-slate-300 shadow-md mx-auto ">
      <div>
        <img className="object-cover" src={hotelImg} alt="Hotel picture" />
      </div>
      <div className="flex flex-col bg-slate-100 space-y-1 pl-2">
        <div className="flex flex-col">
          <h3 className="text-md font-medium text-lg">Pool Villa</h3>
          <div className="flex items-center space-x-1 ">
            <Icons.location />
            <p className="text-slate-700">Marbella, Spain</p>
          </div>
        </div>
        <div className="flex items-center py-2 space-x-20">
          <p className="text-slate-700">Price: 100$/night</p>
          <button className="bg-gold px-4 rounded-md border border-gold">
            View
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
