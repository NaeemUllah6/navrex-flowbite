import { useState, useRef, useEffect } from 'react';
import { countries } from './constants';
import { Label } from 'flowbite-react';
import Tooltip from './toolitp.component';

export default function CountrySelector() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleSelect = (country: string) => {
        setSelectedCountry(country);
        setIsDropdownOpen(false);
    };

    return (
        <>
            <div className="flex items-center gap-2">
                <Label className="text-sm font-medium text-[#111928]">Country</Label>
                <Tooltip tooltipText="Place your tooltip text here." />
            </div>
            <div
                ref={dropdownRef}
                className={`mt-2 text-sm text-[#6B7280] rounded-lg border-[1px] border-solid border-[#D1D5DB] bg-[#F9FAFB] relative`}
                style={{
                    backgroundImage: "url('/images/authentication/chevron-down.svg')",
                    backgroundPosition: "center right 10px",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <input
                    className="px-4 py-3 w-full h-full border-none p-0 bg-transparent outline-none"
                    type="text"
                    name="country_selector"
                    id="countrySelector"
                    value={selectedCountry}
                    placeholder="Select a country"
                    readOnly
                    onClick={handleInputClick}
                />
                {isDropdownOpen && (
                    <div
                        className="absolute top-full w-full p-3 z-10 bg-white rounded-lg"
                        style={{
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        }}
                    >
                        <input
                            className="px-3 py-2 mb-2 w-full border rounded-md border-solid border-[#D1D5DB]"
                            type="text"
                            placeholder="Search countries"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <ul className='max-h-[200px] overflow-y-auto overflow-verticle'>
                            {filteredCountries.map((country, index) => (
                                <li
                                    key={index}
                                    className="py-1 hover:bg-[#F9FAFB] cursor-pointer"
                                    onClick={() => handleSelect(country)}
                                >
                                    {country}
                                </li>
                            ))}
                            {filteredCountries.length === 0 && (
                                <li className="px-3 py-1 text-gray-500">No countries found</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
