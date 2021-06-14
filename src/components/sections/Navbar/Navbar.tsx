import { Switch, Route, Link, NavLink } from 'react-router-dom'
import {
  CheckCircleIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from '@heroicons/react/outline'
import Home from '../../pages/Home'
export interface INavbarProps {}

const Navbar = ({}: INavbarProps) => {
  return (
    <div>
      <nav className="text-gray-300 bg-gray-800">
        <ul className="flex items-stretch mx-2">
          <li className="my-auto">
            <Link to="/">
              <CheckCircleIcon className="w-8 h-8" />
            </Link>
          </li>
          {[
            { text: 'Store', link: '/store' },
            { text: 'News', link: '/news' },
            { text: 'FAQ', link: '/faq' },
            { text: 'Help', link: '/help' },
            { text: 'Unreal Engine', link: '/unreal-engine' },
          ].map(({ text, link }) => (
            <li className="relative overflow-hidden group">
              <NavLink
                className="p-4 text-sm tracking-wider uppercase"
                to={link}
                activeClassName="activeNavlink"
              >
                {text}
              </NavLink>
              <div
                id="active-marker"
                className={`absolute inset-x-0 bottom-0 h-1 transition-all transform translate-y-full bg-blue-500 group-hover:translate-y-0`}
              ></div>
            </li>
          ))}
          <li className="my-auto ml-auto mr-4">
            <Link to="/" className="relative flex items-center group">
              <GlobeAltIcon className="w-6 h-6 text-gray-400 group-hover:text-white" />
              <div className="absolute z-10 invisible py-2 text-xs text-center transition-all transform -translate-x-1/2 bg-gray-800 shadow-sm group-hover:visible top-full">
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  العربية
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  DEUTSCH
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  ESPAÑOL (SPAIN)
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  ESPAÑOL (LA)
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  FRANÇAIS
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  ITALIANO
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  日本語
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  한국어
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  POLSKI
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  PORTUGUÊS (BRASIL)
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  РУССКИЙ
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  ไทย
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  TÜRKÇE
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  简体中文
                </div>
                <div className="px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                  繁體中文
                </div>
              </div>
            </Link>
          </li>
          <li className="my-auto mr-4">
            <Link to="/" className="relative flex items-center group">
              <UserCircleIcon className="w-6 h-6 mr-1 text-gray-400 group-hover:text-white" />
              <div className="text-xs uppercase group-hover:text-white">
                Karthick ragaven
              </div>
              <div className="absolute right-0 z-10 invisible py-2 text-xs text-center transition-all transform bg-gray-800 shadow-sm group-hover:visible top-full">
                <div className="px-4 py-2 hover:bg-gray-700 ">ACCOUNT</div>
                <div className="px-4 py-2 hover:bg-gray-700 ">REDEEM CODE</div>
                <div className="px-4 py-2 hover:bg-gray-700 ">COUPONS</div>
                <div className="px-4 py-2 hover:bg-gray-700 ">WISHLIST</div>
                <div className="px-4 py-2 hover:bg-gray-700 ">SIGN OUT</div>
              </div>
            </Link>
          </li>
          <li>
            <button className="h-full px-3 py-2 text-xs text-gray-100 uppercase bg-blue-600 hover:bg-blue-700 hover:text-white">
              Get epic games
            </button>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/news">
          <h1 className="flex items-center justify-center h-72">News</h1>
        </Route>
        <Route path="/faq">
          <h1 className="flex items-center justify-center h-72">FAQ</h1>
        </Route>
        <Route path="/help">
          <h1 className="flex items-center justify-center h-72">Help</h1>
        </Route>
        <Route path="/unreal-engine">
          <h1 className="flex items-center justify-center h-72">
            Unreal Engine
          </h1>
        </Route>
        <Route path="/">
          <h1 className="flex items-center justify-center h-72">
            <Home />
          </h1>
        </Route>
      </Switch>
    </div>
  )
}

export default Navbar
