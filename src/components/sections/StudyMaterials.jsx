import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Button from "../ui/button";
import MaterialCard from "../components/MaterialCard";

export default function StudyMaterials() {
  const [selectedBookCategory, setSelectedBookCategory] =
    useState("all");
  const [selectedBooksetCategory, setSelectedBooksetCategory] =
    useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const [materials, setMaterials] = useState([]);
  const [booksets, setBooksets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [booksRes, booksetsRes] = await Promise.all([
          fetch(
            "https://examyug-dashboard-backend.onrender.com/api/v1/book/view-all-books?page=1&limit=5"
          ),
          fetch(
            "https://examyug-dashboard-backend.onrender.com/api/v1/bookset/view-all-booksets?page=1&limit=5"
          ),
        ]);

        const booksData = await booksRes.json();
        const booksetsData = await booksetsRes.json();

        if (booksData?.success) {
          setMaterials(booksData.allBooks || []);
        }

        if (booksetsData?.success) {
          setBooksets(
            booksetsData.allBookSets ||
              booksetsData.allBooksets ||
              []
          );
        }
      } catch (error) {
        console.error(
          "Error fetching study materials:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="min-vh-100 d-flex align-items-center justify-content-center">
        <p className="fs-6">
          Loading study materials...
        </p>
      </main>
    );
  }

  const bookCategories = [
    { id: "all", label: "All Books" },
    ...Array.from(
      new Set(
        materials
          .map((book) => book.category?.categoryTitle)
          .filter(Boolean)
      )
    ).map((category) => ({
      id: category,
      label: category,
    })),
  ];

  const booksetCategories = [
    { id: "all", label: "All Book Sets" },
    ...Array.from(
      new Set(
        booksets
          .map((bookset) => bookset.category?.categoryTitle)
          .filter(Boolean)
      )
    ).map((category) => ({
      id: category,
      label: category,
    })),
  ];

  const filteredMaterials =
    selectedBookCategory === "all"
      ? materials
      : materials.filter(
          (book) =>
            book.category?.categoryTitle ===
            selectedBookCategory
        );

  const filteredBooksets =
    selectedBooksetCategory === "all"
      ? booksets
      : booksets.filter(
          (bookset) =>
            bookset.category?.categoryTitle ===
            selectedBooksetCategory
        );

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <div className="text-center mb-5">
          <h1 className="display-5 md:display-4 fw-bold text-foreground mb-5">
            Study Materials
          </h1>

          <p className="fs-6 text-muted-foreground max-w-2xl d-d-flex justify-content-center">
            Access comprehensive study materials,
            books, book sets, notes, and resources
            created by our expert instructors.
          </p>
        </div>
      </section>

      {/* Books Section */}
      <section className="container-lg d-d-flex justify-content-center px-3 py-3">
        <h2 className="fs-3 fw-bold mb-5 text-center">
          Books
        </h2>

        <div className="d-flex d-flex-wrap gap-3 justify-content-center mb-5">
          {bookCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() =>
                setSelectedBookCategory(category.id)
              }
              className={`-transform ${
                selectedBookCategory === category.id
                  ? "bg-danger text-white"
                  : ""
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 gap-4">
        {filteredMaterials.map((material) => (
  <div
    key={material._id}
    className="material-card-container"
  >
    <div className="material-card-inner">

      {/* Front Side */}
      <div className="material-card-front bg-white border rounded-2 overflow-d-none shadow-sm-sm d-flex d-flex-column">
        <div className="h-60 overflow-d-none">
          <img
            src={material.thumbnail}
            alt={material.bookTitle}
            className="w-100 h-full object-fit-cover"
          />
        </div>

        <div className="p-6 d-flex d-flex-column d-flex-grow">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-circle small fw-bold w-fit mb-3">
            {material.category?.categoryTitle || "General"}
          </span>

          <h3 className="fs-6 fw-bold mb-2">
            {material.bookTitle}
          </h3>

          <p className="text-muted small d-flex-grow mb-4">
            {material.bookDescription?.length > 100
              ? `${material.bookDescription.substring(0, 100)}...`
              : material.bookDescription}
          </p>

          <div className="d-flex justify-content-between align-items-center border-top pt-4">
            <div>
              <span className="line-through text-gray-400 small">
                ₹{material.maxPrice}
              </span>

              <span className="ms-2 text-primary fw-bold fs-6">
                ₹{material.sellingPrice}
              </span>
            </div>

            <Button
              onClick={() => setSelectedMaterial(material)}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>

      {/* Back Side */}
      <div className="material-card-back bg-white border rounded-2 overflow-d-none shadow-sm-sm">
        <div className="p-6 d-flex d-flex-column h-full">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-circle small fw-bold w-fit mb-3">
            {material.category?.categoryTitle || "General"}
          </span>

          <h3 className="fs-6 fw-bold mb-4">
            {material.bookTitle}
          </h3>

          <div className="text-muted small d-flex-grow overflow-auto mb-4">
            {material.bookDescription}
          </div>

          <div className="d-flex justify-content-between align-items-center border-top pt-4">
            <div>
              <span className="line-through text-gray-400 small">
                ₹{material.maxPrice}
              </span>

              <span className="ms-2 text-primary fw-bold fs-6">
                ₹{material.sellingPrice}
              </span>
            </div>

            <Button
              onClick={() => {
                if (material.bookPdf) {
                  window.open(
                    material.bookPdf,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }
              }}
            >
              <Download className="w-4 h-4 me-2 inline" />
              Download
            </Button>
          </div>

          <Button
            variant="outline"
            className="mt-4"
            onClick={(e) => {
              const card =
                e.currentTarget.closest(
                  ".material-card-container"
                );

              card.classList.remove("flipped");
            }}
          >
            Back
          </Button>
        </div>
      </div>

    </div>
  </div>
))}

          {filteredMaterials.length === 0 && (
            <div className="col-span-full text-center py-5">
              No books found.
            </div>
          )}
        </div>
      </section>

      {/* Book Sets Section */}
      <section className="container-lg d-d-flex justify-content-center px-3 py-5">
        <h2 className="fs-3 fw-bold mb-5 text-center">
          Book Sets
        </h2>

        <div className="d-flex d-flex-wrap gap-3 justify-content-center mb-5">
          {booksetCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() =>
                setSelectedBooksetCategory(
                  category.id
                )
              }
              className={`-transform ${
                selectedBooksetCategory === category.id
                  ? "bg-primary text-white"
                  : ""
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="row row-cols-1 md:row-cols-2 lg:row-cols-3 gap-4">
        {filteredBooksets.map((bookset) => (
  <MaterialCard
    key={bookset._id}
    title={bookset.booksetTitle}
    description={bookset.booksetDescription}
    image={bookset.thumbnail}
    category={bookset.category?.categoryTitle}
    maxPrice={bookset.maxPrice}
    sellingPrice={bookset.sellingPrice}
    pdfUrl={
      bookset.booksetPdf ||
      bookset.bookPdf
    }
  />
))}

          {filteredBooksets.length === 0 && (
            <div className="col-span-full text-center py-5">
              No book sets found.
            </div>
          )}
        </div>
      </section>

      {/* View More */}
      <div className="text-center pb-5">
        <Button
          variant="danger"
          onClick={() => {
            window.location.href =
              "/study-materials";
          }}
        >
          View More Materials
        </Button>
      </div>

      {selectedMaterial && (
  <div
    className="fixed inset-0 z-50 d-flex align-items-center justify-content-center bg-dark/50 backdrop-blur-md p-4"
    onClick={() => setSelectedMaterial(null)}
  >
    <div
      className="bg-white rounded-3 shadow-sm-2xl w-100 max-w-5xl max-h-[90vh] overflow-d-none"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="row md:row-cols-2">
        
        {/* Image Section */}
        <div className="h-72 md:h-auto">
          <img
            src={selectedMaterial.thumbnail}
            alt={selectedMaterial.bookTitle}
            className="w-100 h-full object-fit-cover"
          />
        </div>

        {/* Details Section */}
        <div className="p-8 d-flex d-flex-column">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-circle small fw-bold w-fit mb-4">
            {selectedMaterial.category?.categoryTitle ||
              "General"}
          </span>

          <h2 className="fs-3 fw-bold mb-4">
            {selectedMaterial.bookTitle}
          </h2>

          <div className="overflow-y-auto d-flex-grow text-muted mb-5 pr-2">
            {selectedMaterial.bookDescription}
          </div>

          <div className="d-flex d-flex-wrap justify-content-between align-items-center border-top pt-6 gap-3">
            <div>
              <span className="line-through text-gray-400">
                ₹{selectedMaterial.maxPrice}
              </span>

              <span className="ml-3 text-primary fw-bold fs-4">
                ₹{selectedMaterial.sellingPrice}
              </span>
            </div>

            <div className="d-flex gap-3">
              <Button
                variant="outline"
                onClick={() => setSelectedMaterial(null)}
              >
                Close
              </Button>

              <Button
                onClick={() => {
                  if (selectedMaterial.bookPdf) {
                    window.open(
                      selectedMaterial.bookPdf,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }
                }}
              >
                <Download className="w-4 h-4 me-2 inline" />
                Download
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)}
    </main>
  );
}
