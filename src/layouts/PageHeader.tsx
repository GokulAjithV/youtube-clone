import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from '../assets/react.svg';
import Button from '../components/Button'
import { useState } from "react";

const PageHeader = () => {

    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

    return (
        <div className="flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4">
            <div className={`flex gap-4 items-center shrink-0 ${ showFullWidthSearch ? "hidden" : "flex" }`}>
                <Button variant="icon" size="icon">
                    <Menu />
                </Button>
                <a href="/">
                    <img src={logo} alt="YouTube"/>
                </a>
            </div>
            <form className={`gap-4 justify-center flex-grow ${ showFullWidthSearch ? "flex" : "hidden md:flex" }`}>
                {showFullWidthSearch && 
                <Button 
                    type="button" 
                    variant="icon" 
                    size="icon" 
                    className="shrink-0" 
                    onClick={ () => setShowFullWidthSearch(false)}>
                    <ArrowLeft />
                </Button>}
                <div className="flex flex-grow max-w-[600px]">
                    <input 
                        type="search"
                        placeholder="Search"
                        className="border rounded-l-full border-secondary-border py-1 px-4 w-full outline-none focus:border-blue-500"/>
                    <Button className="px-4 py-2 border border-secondary-border rounded-r-full border-l-0 flex-shrink-0">
                        <Search />
                    </Button>
                </div>
                <Button type="button" size="icon" className="shrink-0">
                    <Mic />
                </Button>
            </form>
            <div className= {`shrink-0 md:gap-2 ${ showFullWidthSearch ? "hidden" : "flex" }`}>
                <Button variant="icon" size="icon" className="md:hidden" onClick={() => setShowFullWidthSearch(true)}>
                    <Search />
                </Button>
                <Button variant="icon" size="icon" className="md:hidden">
                    <Mic />
                </Button>
                <Button variant="icon" size="icon">
                    <Upload />
                </Button>
                <Button variant="icon" size="icon">
                    <Bell />
                </Button>
                <Button variant="icon" size="icon">
                    <User />
                </Button>    
            </div>
        </div>
    )
}


export default PageHeader;