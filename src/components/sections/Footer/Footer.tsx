import {
  ArchiveIcon,
  KeyIcon,
  SunIcon,
  ChevronUpIcon,
} from '@heroicons/react/solid'
export interface IFooterProps {}

const Footer = ({}: IFooterProps) => {
  return (
    <div className="text-sm">
      <div className="flex my-4">
        <button>
          <ArchiveIcon className="w-8 h-8 mr-2" />
        </button>
        <button>
          <KeyIcon className="w-8 h-8 mr-2" />
        </button>
        <button>
          <SunIcon className="w-8 h-8 mr-2" />
        </button>

        <button className="ml-auto">
          <ChevronUpIcon className="w-8 h-8 border border-white rounded-sm" />
        </button>
      </div>
      <div className="mt-4">
        <div className="mt-8 text-gray-400">Resources</div>
        <div className="grid grid-cols-2 mt-2 lg:1/2 md:w-2/3 sm:w-3/4 md:grid-cols-3">
          <button className="text-left">Support-A-Creator</button>
          <button className="text-left">Publish on Epic Games</button>
          <button className="text-left">Careers</button>
          <button className="text-left">Company</button>
          <button className="text-left">Fan Art Policy</button>
          <button className="text-left">UX Research</button>
          <button className="text-left">Store EULA</button>
          <button className="text-left">Online Services</button>
          <button className="text-left">Community Rules</button>
        </div>
        <div className="mt-8 text-gray-400">Made By Epic Games</div>
        <div className="grid grid-cols-2 mt-2 lg:1/2 md:w-2/3 sm:w-3/4 md:grid-cols-3">
          <button className="text-left">Battle Breakers</button>
          <button className="text-left">Fortnite</button>
          <button className="text-left">Infinity Blade</button>
          <button className="text-left">Robo Recall</button>
          <button className="text-left">Shadow Complex</button>
          <button className="text-left">Spyjinx</button>
          <button className="text-left">Unreal Tournament</button>
        </div>
        <hr className="my-8 text-gray-400" />
        <div className="text-gray-400 max-w-prose">
          ©2021, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
          Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
          the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
          logo are trademarks or registered trademarks of Epic Games, Inc. in
          the United States of America and elsewhere. Other brands or product
          names are the trademarks of their respective owners. Non-US
          transactions through Epic Games International, S.à r.l.
        </div>
        <div className="my-8 sm:flex">
          <button className="mr-2 text-left">Terms of ServicePrivacy</button>
          <button className="mr-2 text-left">PolicyStore</button>
          <button className="mr-2 text-left">Refund Policy</button>
          <div className="flex mt-2 sm:ml-auto">
            <button>
              <KeyIcon className="w-8 h-8 mr-2" />
            </button>
            <button>
              <SunIcon className="w-8 h-8 mr-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
