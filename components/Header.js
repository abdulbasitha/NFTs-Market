import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import OpenseaLogo from '../assets/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'


const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex`,
    logoContainer: `flex items-center cursor-pointer `,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: `hidden md:inline-flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItemsMd: `hidden md:inline-flex items-center justify-end`,
    headerItemsSm: `md:hidden flex flex-1 items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
}



function Header() {
    return (
        <div className={style.wrapper}>

            <Link href={"/"}>
                <div className={[style.logoContainer]}>
                    <Image src={OpenseaLogo} height={40} width={40} />
                    <div className={[style.logoText]}> OpenSea</div>
                </div>
            </Link>

            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input className={style.searchInput} placeholder={"Search items, collection and accounts"} />
            </div>

            <div className={style.headerItemsMd}>
                <Link href={"/collections/0x600e1f9dD6f71711dD025183c5a2d1e103c24674"} >
                <div className={style.headerItem}>Collections</div>
                </Link>
                <div className={style.headerItem}>Stats</div>
                <div className={style.headerItem}>Resources</div>
                <div className={style.headerItem}>Create</div>
                <div className={style.headerIcon}>
                    <CgProfile />
                </div>
                <div className={style.headerIcon}>
                    <MdOutlineAccountBalanceWallet />
                </div>
            </div>
            <div className={style.headerItemsSm}>

                <div className={style.headerIcon}>
                    <CgProfile />
                </div>
                <div className={style.headerIcon}>
                    <MdOutlineAccountBalanceWallet />
                </div>
            </div>

        </div>
    )
}

export default Header