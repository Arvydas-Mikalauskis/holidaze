import { Icons } from '../../constants/icons/Icons'

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* <!-- Container --> */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* <!-- Footer Flex Container --> */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* <!-- Menu & Logo Container --> */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* <!-- Logo --> */}
            <div className="h-8">
              <h4 className="w-44 text-center md:text-start text-lg font-semibold md:ml-4 text-gold text-opacity-90">
                Holidaze
              </h4>
            </div>
            {/* <!-- Menu Container --> */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* <!-- Item 1 --> */}
              <div className="h-10 group">
                <a href="#">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-gold"></div>
              </div>
              {/* <!-- Item 2 --> */}
              <div className="h-10 group">
                <a href="#">Careers</a>
                <div className="mx-2 group-hover:border-b group-hover:border-gold"></div>
              </div>
              {/* <!-- Item 3 --> */}
              <div className="h-10 group">
                <a href="#">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-gold"></div>
              </div>
              {/* <!-- Item 4 --> */}
              <div className="h-10 group">
                <a href="#">Products</a>
                <div className="mx-2 group-hover:border-b group-hover:border-gold"></div>
              </div>
              {/* <!-- Item 5 --> */}
              <div className="h-10 group">
                <a href="#">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-gold"></div>
              </div>
            </div>
          </div>

          {/* <!-- Social & rights Container --> */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* <!-- icons Container --> */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* <!-- Icon 1 --> */}
              <div className="h-8 group">
                <a href="#">
                  <Icons.facebook className="h-6 group-hover:text-gold " />
                </a>
              </div>
              {/* <!-- Icon 2 --> */}
              <div className="h-8 group">
                <a href="#">
                  <Icons.twitter className="h-6 group-hover:text-gold" />
                </a>
              </div>
              {/* <!-- Icon 3 --> */}
              <div className="h-8 group">
                <a href="#">
                  <Icons.pinterest className="h-6 group-hover:text-gold" />
                </a>
              </div>
              {/* <!-- Icon 4 --> */}
              <div className="h-8 group">
                <a href="#">
                  <Icons.instagram className="h-6 group-hover:text-gold" />
                </a>
              </div>
            </div>

            {/* <!-- Rights --> */}
            <div className="font-bold">
              &copy; 2024 Holidaze. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
