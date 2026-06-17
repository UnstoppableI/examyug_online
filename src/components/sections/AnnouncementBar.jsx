"use client";

const announcements = [
  { title: "🎉 Summer Sale! Get 40% off all courses this month" },
  { title: "JEE Nurture Batch New Timing from 10:00 Am Mon-Fri" },
  { title: "Upcoming JEE Dropper Batch" },
];

export default function AnnouncementBar() {
  return (
    <div className="bg-red-500 bg-opacity-10 border-bottom border-accent border-opacity-20 relative overflow-d-none h-12 d-flex align-items-center">
      <div className="marquee d-flex align-items-center space-x-12 h-full">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="d-flex-shrink-0 px-3 d-flex align-items-center h-full"
          >
            <p className="text-yellow-300 fw-bold mb-0 d-flex align-items-center h-full">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}