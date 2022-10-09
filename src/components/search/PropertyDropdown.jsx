import React, {useContext, useState} from 'react';
import { Menu } from '@headlessui/react';
import {RiArrowDownSLine, RiArrowUpSLine, RiHome5Line} from "react-icons/ri";
import {HouseContext} from "./HouseContext";

export const PropertyDropdown = () => {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Menu as='div' className='dropdown relative'>
            <Menu.Button
                onClick={() => setIsOpen(!isOpen)}
                className='dropdown-btn w-full text-left'>
                <RiHome5Line className='dropdown-icon-primary' />
                <div>
                    <div className='text-[15px] font-medium leading-tight'>
                        {property}
                    </div>
                    {/*<div className='text-[13px]'>Choose property type</div>*/}
                </div>
                {isOpen ? (
                    <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) : (
                    <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Menu.Button>

            <Menu.Items className='dropdown-menu'>
                {properties.map((e, index) => {
                    return (
                        <Menu.Item
                            as='li'
                            onClick={() => setProperty(e)}
                            key={index}
                            className='cursor-pointer hover:text-violet-700 transition'
                        >
                            {e}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
}