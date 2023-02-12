'use client';

import { Inter } from '@next/font/google';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ChakraProvider } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import Fuse from 'fuse.js';

import {
  BrowserIcon,
  CodingIcon,
  CountryIcon,
  DesignIcon,
  FinanceIcon,
  MessengerIcon,
  MusicIcon,
  OSIcon,
  OtherIcon,
  ProductivityIcon,
  SocialIcon,
  VideoIcon,
} from '@bamerf/react-untitled-icons';
import {
  codingIconNames,
  socialIconNames,
  productivityIconNames,
  browserIconsNames,
  messengerIconNames,
  designIconsNames,
  osIconsNames,
  videoIconsNames,
  musicIconsNames,
  financeIconsNames,
  otherIconsNames,
} from './iconNames';
import { Card } from '@/components/Card';

const inter = Inter({ subsets: ['latin'] });
const size = 32;

type TFuse = {
  item: string;
}[];

export default function Home() {
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState<TFuse>([]);

  useEffect(() => {
    const fuse = new Fuse(
      [
        ...browserIconsNames,
        ...socialIconNames,
        ...productivityIconNames,
        ...messengerIconNames,
        ...codingIconNames,
        ...designIconsNames,
        ...osIconsNames,
        ...videoIconsNames,
        ...musicIconsNames,
        ...financeIconsNames,
        ...otherIconsNames,
      ],
      {
        threshold: 0.5,
        keys: ['name'],
      }
    );

    const result = fuse.search(value);
    setSearchValue(result as unknown as TFuse);
  }, [value]);

  const existsInCategory = (iconNames: string[]): boolean => {
    return (
      iconNames.filter((icon) =>
        searchValue.length > 0 ? searchValue.some((e) => e.item === icon) : true
      ).length > 0
    );
  };

  return (
    <ChakraProvider>
      <main
        className={clsx(
          inter.className,
          'max-w-4xl mx-auto px-8 py-32 flex flex-col gap-16'
        )}
      >
        <div className="flex gap-3">
          <Input
            className="bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant="filled"
            placeholder="Search"
            _placeholder={{ color: 'neutral.200' }}
          />
        </div>
        <div className="flex flex-col gap-16">
          {existsInCategory(browserIconsNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Browser Icons</h3>
              <div className="flex flex-wrap gap-3">
                {browserIconsNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      key={name}
                      icon={<BrowserIcon size={size} name={name} />}
                      name={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(socialIconNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Social Icons</h3>
              <div className="flex flex-wrap gap-3">
                {socialIconNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      key={name}
                      icon={<SocialIcon name={name} size={size} />}
                      name={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(messengerIconNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">
                Messenger Icons
              </h3>
              <div className="flex flex-wrap gap-3">
                {messengerIconNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<MessengerIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(codingIconNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Coding Icons</h3>
              <div className="flex flex-wrap gap-3">
                {codingIconNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<CodingIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(productivityIconNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">
                Productivity Icons
              </h3>
              <div className="flex flex-wrap gap-3">
                {productivityIconNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<ProductivityIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(designIconsNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Design Icons</h3>
              <div className="flex flex-wrap gap-3">
                {designIconsNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<DesignIcon key={name} name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(osIconsNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">OS Icons</h3>
              <div className="flex flex-wrap gap-3">
                {osIconsNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<OSIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(videoIconsNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Video Icons</h3>
              <div className="flex flex-wrap gap-3">
                {videoIconsNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<VideoIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(musicIconsNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Music Icons</h3>
              <div className="flex flex-wrap gap-3">
                {musicIconsNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<MusicIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {existsInCategory(financeIconsNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Finance Icons</h3>
              <div className="flex flex-wrap gap-3">
                {financeIconsNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<FinanceIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
          {/* <div className="flex flex-col gap-6">
            <h3 className="font-bold text-xl text-gray-200">Country Icons</h3>
            {otherIconsNames.map((name) => (
              <CountryIcon key={name} name={name} size={size} />
            ))}
          </div> */}
          {existsInCategory(otherIconsNames) && (
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-xl text-gray-200">Other Icons</h3>
              <div className="flex flex-wrap gap-3">
                {otherIconsNames
                  .filter((icon) =>
                    searchValue.length > 0
                      ? searchValue.some((e) => e.item === icon)
                      : true
                  )
                  .map((name) => (
                    <Card
                      icon={<OtherIcon name={name} size={size} />}
                      name={name}
                      key={name}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </ChakraProvider>
  );
}
