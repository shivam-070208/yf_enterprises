import React, { useState, useMemo } from "react";
import { Allblogs } from "../assets";
import Blogcard from "../ui/Blog/Blogcard";

const Blogs = ({ search, selectedCategory }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    let filtered = Allblogs;

    // Filter by search term
    if (search) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.content.toLowerCase().includes(search.toLowerCase()) ||
        blog.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    return filtered;
  }, [search, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  const handlePrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="lg:col-span-2 flex flex-col gap-6">
      {/* Results info */}
      <div className="text-sm text-gray-600">
        {filteredBlogs.length === 0 ? (
          <p>No blogs found matching your criteria.</p>
        ) : (
          <p>Showing {startIndex + 1}-{Math.min(startIndex + blogsPerPage, filteredBlogs.length)} of {filteredBlogs.length} blogs</p>
        )}
      </div>

      {/* Blog cards */}
      <div className="flex flex-col gap-6">
        {currentBlogs.map((item, key) => (
          <Blogcard key={startIndex + key} index={startIndex + key} item={item} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <div className="flex gap-2 flex-wrap justify-center">
            {[...Array(totalPages)].map((_, index) => {
              const pageNumber = index + 1;
              // Only show page numbers if there are 10 or fewer pages, otherwise show smart pagination
              if (totalPages <= 10) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`px-3 py-2 rounded transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              }
              return null;
            })}
          </div>
          
          {/* Show current page info for many pages */}
          {totalPages > 10 && (
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
          )}
          
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blogs;
