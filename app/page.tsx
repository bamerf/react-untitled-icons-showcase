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
  countryIconNames,
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
        ...countryIconNames,
      ],
      {
        threshold: 0.3,
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

  const components = {
    BrowserIcon,
    SocialIcon,
    MessengerIcon,
    CodingIcon,
    ProductivityIcon,
    DesignIcon,
    OSIcon,
    VideoIcon,
    MusicIcon,
    FinanceIcon,
    OtherIcon,
    CountryIcon,
  };

  const Section = ({
    iconNames,
    title,
    componentName,
  }: {
    iconNames: string[];
    title: string;
    componentName: string;
  }) => {
    // @ts-ignore
    const Component = components[componentName];
    return existsInCategory(iconNames) ? (
      <div className="flex flex-col gap-6">
        <h3 className="font-bold text-xl text-gray-200">{title}</h3>
        <div className="flex flex-wrap gap-3">
          {iconNames
            .filter((icon) =>
              searchValue.length > 0
                ? searchValue.some((e) => e.item === icon)
                : true
            )
            .map((name) => (
              <Card
                key={name}
                icon={<Component size={size} name={name} />}
                name={name}
              />
            ))}
        </div>
      </div>
    ) : null;
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
          <Section
            componentName="BrowserIcon"
            title="Browser Icons"
            iconNames={browserIconsNames}
          />
          <Section
            componentName="SocialIcon"
            title="Social Icons"
            iconNames={socialIconNames}
          />
          <Section
            componentName="MessengerIcon"
            title="Messenger Icons"
            iconNames={messengerIconNames}
          />
          <Section
            componentName="CodingIcon"
            title="Coding Icons"
            iconNames={codingIconNames}
          />
          <Section
            componentName="ProductivityIcon"
            title="Productivity Icons"
            iconNames={productivityIconNames}
          />
          <Section
            componentName="DesignIcon"
            title="Design Icons"
            iconNames={designIconsNames}
          />
          <Section
            componentName="OSIcon"
            title="OS Icons"
            iconNames={osIconsNames}
          />
          <Section
            componentName="VideoIcon"
            title="Video Icons"
            iconNames={videoIconsNames}
          />
          <Section
            componentName="MusicIcon"
            title="Music Icons"
            iconNames={musicIconsNames}
          />
          <Section
            componentName="FinanceIcon"
            title="Finance Icons"
            iconNames={financeIconsNames}
          />
          <Section
            componentName="OtherIcon"
            title="Other Icons"
            iconNames={otherIconsNames}
          />
          <Section
            componentName="CountryIcon"
            title="Country Icons"
            iconNames={countryIconNames}
          />
        </div>
      </main>
    </ChakraProvider>
  );
}
