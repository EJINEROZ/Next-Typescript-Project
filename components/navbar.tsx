
// components/Navbar.tsx

interface Props {
  items: { label: string; href: string }[];
}

const Navbar: React.FC<Props> = ({ items }) => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Logo on left */}
        <a href="/" className="text-white text-xl font-bold ml-4">Your Brand</a>
        {/* Search bar in center with visible button */}
        <div className="flex items-center mx-auto">
          <input
            className="bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white mr-2"
            placeholder="Search..."
          />
          <button className="bg-transparent hover:bg-gray-700 text-white rounded-md px-3 py-2">
            Search
          </button>
        </div>
        {/* Navigation links on right */}
        <div className="hidden md:flex items-center space-x-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;