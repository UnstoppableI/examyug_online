"use client";

const announcements = [
  { title: "🎉 Summer Sale! Get 40% off all courses this month" },
  { title: "JEE Nurture Batch New Timing from 10:00 Am Mon-Fri" },
  { title: "Upcoming JEE Dropper Batch" },
];

export default function AnnouncementBar() {
  return (
    <div className="bg-red-500 bg-opacity-10 border-b border-accent border-opacity-20 relative overflow-hidden h-12 flex items-center">
      <div className="marquee flex items-center space-x-12 h-full">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 flex items-center h-full"
          >
            <p className="text-yellow-300 font-bold mb-0 flex items-center h-full">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}