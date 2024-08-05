'use client';
import {
  queryLocalStorage,
  useAppDispatch,
  useAppSelector,
} from '@/redux/hooks';
import {
  FontStyle,
  selectFont,
  setFontStyle,
} from '@/redux/state/font/fontSlice';
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { BookOpenIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';

const navigation = [{ name: 'Dictionary', href: '/' }];
const fontStyles: FontStyle[] = ['Sans', 'Serif', 'Mono'];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const selectedFontStyle = useAppSelector(selectFont);

  useEffect(() => {
    const savedValue = queryLocalStorage('font-style');
    if (savedValue && fontStyles.includes(savedValue)) {
      dispatch(setFontStyle(savedValue));
    }
  }, []);

  return (
    <Disclosure as="nav" className="w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* App Name Mobile View */}
            <p className="group ml-4 relative inline-flex items-center justify-center">
              Dictionary
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/** Font Style Menu Select */}
            <div className="flex flex-shrink-0 items-center">
              <BookOpenIcon
                width={20}
                height={20}
                className="h-8 w-auto ml-4"
              />
            </div>
            {/** Nav Links */}
            <div className="hidden sm:ml-2 sm:flex items-center">
              <div className="flex">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span className="font-bold text-gray-700">
              {' '}
              {selectedFontStyle}
            </span>
            {/* Select Font Style Menu Dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-md px-3 py-2 bg-blue-500  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-h-5 w-5 text-white"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {fontStyles.map((item) => (
                  <MenuItem key={item}>
                    <div className="flex flex-col">
                      <button
                        onClick={() => dispatch(setFontStyle(item))}
                        className="grow justify-start w-full px-4 py-2 text-sm text-gray-700 text-left hover:text-primary data-[focus]:bg-gray-100"
                      >
                        {item}
                      </button>
                    </div>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
