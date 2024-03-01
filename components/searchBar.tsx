import React, { useState, useEffect, ChangeEvent } from 'react';
// import svgIcon from '../public/facebook.svg'

type MyDataType = {
  id: number;
  imgPath: string;
  name: string;
  email: string;
  address: string;
};

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<MyDataType[]>([]);

  useEffect(() => {
    try {
      setData([
        {
          id: 1,
          imgPath: 'facebook.svg',
          name: "Jane Doe",
          email: "janedoe@gmail.com",
          address: "New Delhi, India",
        },
        {
          id: 2,
          imgPath: "eji.svg",
          name: "Mary Rosamund",
          email: "agra@rosie.com",
          address: "Tbilisi, India",
        },
        {
            id: 3,
            imgPath: "/ejineroz/ezek-app/public/facebook.svg",
            name: "Sherlock Watson",
            email: "irene@johnlock.com",
            address: "Baker Street, India",
          },
          {
            id: 4,
            imgPath: "/assets/img/4.png",
            name: "John Holmes",
            email: "mary@johnlock.com",
            address: "Baker Street, India",
          },
          {
            id: 5,
            imgPath: "/assets/img/5.png",
            name: "Mycroft Lestrade",
            email: "britishgovt@gmail.com",
            address: "London, India",
          },
        
      ]);
    } catch (error) {
      
    }
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Input field for search */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500" // Add some styling
        />

        {/* Display filtered data based on search term */}
        {filteredData.length > 0 ? (
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {filteredData.map((item) => (
              <div key={item.id} className="p-4 md:w-1/3 flex">
                <img src={item.imgPath} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{item.name}</h2>
                  <p className="leading-relaxed text-base">{item.email}</p>
                  <p className="leading-relaxed text-base">{item.address}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </section>
  );
}

export default SearchBar;
