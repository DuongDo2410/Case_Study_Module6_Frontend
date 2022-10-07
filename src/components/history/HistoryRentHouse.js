import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {SwiperSlide} from "swiper/react";
import HistoryChildren from "./historyChildren";
import Nav from './nav'
import NavItem from './navItem'
import List from './List'
import ListItem from './historyChildren'

const HistoryRentHouse = () => {
    const history = useSelector(state => state.house.history);
    console.log(history)
    return (
        // <div>
        //     <section class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
        //         <div class="flex flex-col justify-center h-full">
        //             <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        //                 <header class="px-5 py-4 border-b border-gray-100">
        //                     <h2 class="font-semibold text-gray-800">History rent house</h2>
        //                 </header>
        //                 <div class="p-3">
        //                     <div class="overflow-x-auto">
        //                         <table class="table-auto w-full">
        //                             <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
        //                             <tr>
        //                                 <th class="p-5 whitespace-nowrap">
        //                                     <div class="font-semibold text-left">Name Home</div>
        //                                     <td className="p-2 whitespace-nowrap"></td>
        //                                 </th>
        //                                 <th class="p-2 whitespace-nowrap">
        //                                     <div class="font-semibold text-left">Start day</div>
        //                                     <td className="p-2 whitespace-nowrap"></td>
        //                                 </th>
        //                                 <th class="p-2 whitespace-nowrap">
        //                                     <div class="font-semibold text-left">End day</div>
        //                                     <td className="p-2 whitespace-nowrap"></td>
        //                                 </th>
        //                                 <th class="p-2 whitespace-nowrap">
        //                                     <div class="font-semibold text-left">Price</div>
        //                                     <td className="p-2 whitespace-nowrap"></td>
        //                                 </th>
        //
        //                             </tr>
        //                             </thead>
        //                             <tbody class="text-sm divide-y divide-gray-100">
        //
        //                             </tbody>
        //                         </table>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>

            <div className="divide-y divide-slate-100">
                <Nav>
                    <NavItem href="/new" isActive>New Releases</NavItem>
                    <NavItem href="/top">Top Rated</NavItem>
                    <NavItem href="/picks">Vincent’s Picks</NavItem>
                </Nav>
                <List>
                    {history.map((h) => (
                        <ListItem key={h._id} history={h} />
                    ))}
                </List>
            </div>
        )
};

export default HistoryRentHouse;